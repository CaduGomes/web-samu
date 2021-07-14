import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { MessageEntity } from "core/domain/entities";
import { ChatRepository } from "core/domain/repositories";
import { IObserver } from "core/observer";

const firestore = firebase.firestore();

const converter = {
  toFirestore: (data: MessageEntity) => data,
  fromFirestore: (snap: firebase.firestore.QueryDocumentSnapshot) =>
    snap.data() as MessageEntity,
};

export class ChatRepositoryImpl implements ChatRepository {
  messages: MessageEntity[] | null = null;

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

  updateData(params: MessageEntity[]) {
    this.messages = params;
    this.notify();
  }

  async post({ id, text }: ChatRepository.Post): Promise<void> {
    const messagesRef = firestore
      .collection("AmbulanceRequest")
      .doc(id)
      .collection("messages");

    const data: MessageEntity = {
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
        const messages: MessageEntity[] = [];
        doc.docs.forEach((msg) => {
          messages.push(msg.data());
        });
        this.updateData(messages);
      });
  }
}
