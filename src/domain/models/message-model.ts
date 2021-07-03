import firebase from "firebase";

export type DirectionModel = "admin" | "client";

export type MessageModel = {
  text: string;
  direction: DirectionModel;
  createdAt: firebase.firestore.FieldValue;
};
