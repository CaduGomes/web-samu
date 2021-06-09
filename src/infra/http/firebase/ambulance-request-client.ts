import { AmbulanceRequestClient } from "data/protocols/http";
import { AmbulanceRequestModel } from "domain/models";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firestore = firebase.firestore();

const converter = {
  toFirestore: (data: AmbulanceRequestModel) => data,
  fromFirestore: (snap: firebase.firestore.QueryDocumentSnapshot) =>
    snap.data() as AmbulanceRequestModel,
};

export class FirebaseAmbulanceRequestClient implements AmbulanceRequestClient {
  async getData(): Promise<AmbulanceRequestModel[]> {
    const querySnapshot = await firestore
      .collection("AmbulanceRequest")
      .withConverter(converter)
      .get();

    const requests = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return requests;
  }

  async getOneData({
    id,
  }: AmbulanceRequestClient.GetOneParams): Promise<AmbulanceRequestModel> {
    const querySnapshot = await firestore
      .collection("AmbulanceRequest")
      .withConverter(converter)
      .doc(id)
      .get();

    const data = querySnapshot.data();

    if (!data) {
      throw new Error("Item não encontrado! id: " + id);
    }

    return data;
  }

  async closeRequest() {}
}
