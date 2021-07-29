import firebase from "firebase";

export type MessageDirectionEntity = "admin" | "client";

export type MessageEntity = {
  text: string;
  direction: MessageDirectionEntity;
  createdAt: firebase.firestore.FieldValue;
  answers?: string[];
  answered?: boolean;
};
