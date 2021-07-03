import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { UserModel } from "domain/models";

import { AuthRepository } from "domain/repositories";
import { IObserver } from "core/observer";
import { auth, firestore } from "data/firebase";

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

export class AuthRepositoryImpl implements AuthRepository {
  userData: UserModel | null = null;

  static observer: IObserver | null = null;

  async signIn({ email, password }: AuthRepository.SignIn) {
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

        this.userData = {
          uid: user.uid,
          cpf,
          email,
          name,
          password,
          phone,
        };

        this.notify();
      }
    } catch (err) {
      console.log(err);
    }
  }

  async autoSignIn() {
    const user = await getCurrentUser();
    console.log(await user?.getIdToken());
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

      this.userData = {
        uid: user.uid,
        cpf,
        email,
        name,
        password,
        phone,
      };

      this.notify();
    }
  }

  async signOut() {
    await auth.signOut();
    this.userData = null;

    this.notify();
  }

  public attach(observer: IObserver): void {
    if (AuthRepositoryImpl.observer) {
      return;
    }

    console.log("Subject: Attached an observer.");
    AuthRepositoryImpl.observer = observer;
  }

  public detach(): void {
    if (AuthRepositoryImpl.observer) {
      return;
    }

    AuthRepositoryImpl.observer = null;
  }

  public notify(): void {
    if (AuthRepositoryImpl.observer) AuthRepositoryImpl.observer.update(this);
  }
}
