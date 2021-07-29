// import firebase from "firebase/app";
import { firestore } from "core/infra/firebase";

import { TARMRequestEntity } from "../../domain/entities";
import { TARMRequestRepository } from "modules/tarm/domain/repositories";

export class RequestRepositoryImpl implements TARMRequestRepository {
  async get(): Promise<TARMRequestRepository.Model[]> {
    const querySnapshot = await firestore
      .collection("AmbulanceRequest")
      .where("state", "==", 0)
      .get();

    const requests: TARMRequestEntity[] = querySnapshot.docs.map((doc) => ({
      createAt: doc.data().createAt.toDate(),
      id: doc.id,
    }));

    return requests;
  }

  async getOne({
    id,
  }: TARMRequestRepository.GetOneParams): Promise<TARMRequestRepository.Model> {
    const querySnapshot = await firestore
      .collection("AmbulanceRequest")
      .doc(id)
      .get();

    const doc = querySnapshot.data();
    if (doc) {
      const request: TARMRequestEntity = {
        createAt: doc.createAt.toDate(),
        id: querySnapshot.id,
      };

      return request;
    }
    throw new Error("Erro ao pegar documento: " + id);
  }

  async close(): Promise<void> {}

  async send({ id, notes }: TARMRequestRepository.SendParams): Promise<void> {
    await firestore.collection("AmbulanceRequest").doc(id).update({
      notes,
      state: 1,
    });
  }
}
