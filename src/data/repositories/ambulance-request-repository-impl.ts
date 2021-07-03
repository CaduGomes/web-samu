import { firestore } from "data/firebase";
import { AmbulanceRequestModel } from "domain/models";
import { AmbulanceRequestRepository } from "domain/repositories";
import firebase from "firebase/app";

const converter = {
  toFirestore: (data: AmbulanceRequestModel) => data,
  fromFirestore: (snap: firebase.firestore.QueryDocumentSnapshot) =>
    snap.data() as AmbulanceRequestModel,
};

export class AmbulanceRequestRepositoryImpl
  implements AmbulanceRequestRepository
{
  async get(): Promise<AmbulanceRequestModel[]> {
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

  async getOne({
    id,
  }: AmbulanceRequestRepository.GetOneParams): Promise<AmbulanceRequestModel> {
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

  async close() {}

  async delete() {}
}
