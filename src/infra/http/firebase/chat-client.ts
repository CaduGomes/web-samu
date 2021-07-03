import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { ChatClient } from "data/protocols/http";
import { MessageModel } from "domain/models";

const firestore = firebase.firestore();

const converter = {
  toFirestore: (data: MessageModel) => data,
  fromFirestore: (snap: firebase.firestore.QueryDocumentSnapshot) =>
    snap.data() as MessageModel,
};

export class FirebaseChatClient implements ChatClient {
  async get({ id }: ChatClient.Get): Promise<ChatClient.Model[]> {
    const messagesRef = firestore
      .collection("AmbulanceRequest")
      .doc(id)
      .collection("messages");

    const query = await messagesRef
      .orderBy("createdAt")
      .withConverter(converter)
      .get();

    const messages: MessageModel[] = [];

    query.forEach((msg) => {
      messages.push(msg.data());
    });
    console.log(messages);
    return messages;
  }

  async post({ id, text }: ChatClient.Post): Promise<void> {
    const messagesRef = firestore
      .collection("AmbulanceRequest")
      .doc(id)
      .collection("messages");

    const data: MessageModel = {
      createdAt: firebase.firestore.Timestamp.now(),
      direction: "admin",
      text: text,
    };

    messagesRef.add(data);
  }

  async watch({ id, update }: ChatClient.Watch) {
    firestore
      .collection("AmbulanceRequest")
      .doc(id)
      .collection("messages")
      .withConverter(converter)
      .onSnapshot((doc) => {
        const messages: MessageModel[] = [];
        doc.docs.forEach((msg) => {
          messages.push(msg.data());
        });
        update(messages);
      });
  }
}
