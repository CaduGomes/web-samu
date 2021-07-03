import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { MessageModel } from "domain/models";
import { ChatRepository } from "domain/repositories";
import { IObserver } from "core/observer";

const firestore = firebase.firestore();

const converter = {
  toFirestore: (data: MessageModel) => data,
  fromFirestore: (snap: firebase.firestore.QueryDocumentSnapshot) =>
    snap.data() as MessageModel,
};

export class ChatRepositoryImpl implements ChatRepository {
  messages: MessageModel[] | null = null;

  static observer: IObserver | null = null;

  attach(observer: IObserver): void {
    if (ChatRepositoryImpl.observer) {
      return;
    }

    console.log("Subject: Attached an message observer.");
    ChatRepositoryImpl.observer = observer;
  }

  detach(): void {
    if (!ChatRepositoryImpl.observer) {
      return;
    }

    ChatRepositoryImpl.observer = null;
  }

  notify(): void {
    if (ChatRepositoryImpl.observer) ChatRepositoryImpl.observer.update(this);
  }

  updateData(params: MessageModel[]) {
    this.messages = params;
    this.notify();
  }

  async post({ id, text }: ChatRepository.Post): Promise<void> {
    const messagesRef = firestore
      .collection("AmbulanceRequest")
      .doc(id)
      .collection("messages");

    const data: MessageModel = {
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      direction: "admin",
      text: text,
    };

    messagesRef.add(data);
  }

  async watch({ id }: ChatRepository.Watch) {
    firestore
      .collection("AmbulanceRequest")
      .doc(id)
      .collection("messages")
      .orderBy("createdAt", "desc")
      .withConverter(converter)
      .onSnapshot((doc) => {
        const messages: MessageModel[] = [];
        doc.docs.forEach((msg) => {
          messages.push(msg.data());
        });
        this.updateData(messages);
      });
  }
}
