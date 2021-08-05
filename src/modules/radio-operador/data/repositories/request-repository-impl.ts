// import firebase from "firebase/app";
import { firestore } from "core/infra/firebase";

import { RadioRequestEntity } from "../../domain/entities";
import { RadioRequestRepository } from "../../domain/repositories";

// const converter = {
//   toFirestore: (data: RadioRequestEntity) => data,
//   fromFirestore: (snap: firebase.firestore.QueryDocumentSnapshot) =>
//     snap.data() as RadioRequestEntity,
// };

export class RadioRequestRepositoryImpl implements RadioRequestRepository {
  async get(): Promise<RadioRequestRepository.Model[]> {
    const querySnapshot = await firestore
      .collection("AmbulanceRequest")
      .where("state", "==", 2)
      .get();

    const requests: RadioRequestEntity[] = querySnapshot.docs.map((doc) => ({
      createAt: doc.data().createAt.toDate(),
      id: doc.id,
      images: doc.data().images,
      videos: doc.data().videos,
      isOpen: doc.data().isOpen,
      location: {
        lat: doc.data().location.latitude,
        lng: doc.data().location.longitude,
      },
      notes: doc.data().notes,
      MedicoReguladorDate: doc.data().MedicoReguladorDate.toDate(),
      TARMDate: doc.data().TARMDate.toDate(),
    }));
    console.log(requests);

    return requests;
  }

  async getOne({
    id,
  }: RadioRequestRepository.GetOneParams): Promise<RadioRequestRepository.Model> {
    const querySnapshot = await firestore
      .collection("AmbulanceRequest")
      .doc(id)
      .get();

    const doc = querySnapshot.data();
    if (doc) {
      const request: RadioRequestEntity = {
        createAt: doc.createAt.toDate(),
        id: querySnapshot.id,
        images: doc.images,
        videos: doc.videos,
        location: {
          lat: doc.location.latitude,
          lng: doc.location.longitude,
        },
        notes: doc.notes,
        MedicoReguladorDate: doc.MedicoReguladorDate.toDate(),
        TARMDate: doc.TARMDate.toDate(),
      };

      return request;
    }
    throw new Error("Erro ao pegar documento: " + id);
  }

  async close(): Promise<void> {}

  async send({ id }: RadioRequestRepository.SendParams): Promise<void> {
    await firestore.collection("AmbulanceRequest").doc(id).update({
      state: 3,
    });
  }
}
