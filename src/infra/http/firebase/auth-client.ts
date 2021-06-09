import { AuthClient } from "data/protocols/http";
import { UserModel } from "domain/models";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { ConcreteSubject } from "infra/state/auth-state";

const firebaseConfig = {
  apiKey: "AIzaSyAXKIccskdly5cl0gT1rlX2aZqLJ29Zeuo",
  authDomain: "app-samu-ufsc.firebaseapp.com",
  projectId: "app-samu-ufsc",
  storageBucket: "app-samu-ufsc.appspot.com",
  messagingSenderId: "944453284476",
  appId: "1:944453284476:web:3a5f822c776eb4b00d4ff9",
  measurementId: "G-WC2VWZDDYQ",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

function getCurrentUser() {
  return new Promise<firebase.User | null>((resolve, reject) => {
    if (auth.currentUser) {
      resolve(auth.currentUser);
    }
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
}

const converter = {
  toFirestore: (data: UserModel) => data,
  fromFirestore: (snap: firebase.firestore.QueryDocumentSnapshot) =>
    snap.data() as UserModel,
};

export class FirebaseAuthClient extends ConcreteSubject implements AuthClient {
  async signUpWithEmailandPassword({
    email,
    password,
  }: AuthClient.SignUpWithEmailandPasswordParams) {
    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      if (user) {
        const doc = await firestore
          .collection("Users")
          .withConverter(converter)
          .doc(user.uid)
          .get();

        const data = doc.data();

        if (!data) {
          throw new Error("Data é null");
        }
        const { cpf, email, name, password, phone } = data;

        this.signInUser({
          uid: user.uid,
          cpf,
          email,
          name,
          password,
          phone,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  async autoSignIn() {
    const user = await getCurrentUser();
    if (user?.uid) {
      const doc = await firestore
        .collection("Users")
        .withConverter(converter)
        .doc(user.uid)
        .get();

      const data = doc.data();

      if (!data) {
        throw new Error("Data é null");
      }
      const { cpf, email, name, password, phone } = data;

      this.signInUser({
        uid: user.uid,
        cpf,
        email,
        name,
        password,
        phone,
      });
    }
  }

  async signOut() {
    await auth.signOut();
    this.signOutUser();
  }
}
