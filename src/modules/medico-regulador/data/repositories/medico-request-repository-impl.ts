// import firebase from "firebase/app";
import { firestore } from "core/infra/firebase";

import { MedicoRequestEntity } from "../../domain/entities";
import { MedicoRequestRepository } from "../../domain/repositories";

// const converter = {
//   toFirestore: (data: RequestEntity) => data,
//   fromFirestore: (snap: firebase.firestore.QueryDocumentSnapshot) =>
//     snap.data() as RequestEntity,
// };

export class MedicoRequestRepositoryImpl implements MedicoRequestRepository {
  async get(): Promise<MedicoRequestRepository.Model[]> {
    const querySnapshot = await firestore
      .collection("AmbulanceRequest")
      .where("state", "==", 1)
      .get();

    const requests: MedicoRequestEntity[] = querySnapshot.docs.map((doc) => ({
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
    }));
    console.log(requests);

    return requests;
  }

  async getOne({
    id,
  }: MedicoRequestRepository.GetOneParams): Promise<MedicoRequestRepository.Model> {
    const querySnapshot = await firestore
      .collection("AmbulanceRequest")
      .doc(id)
      .get();

    const doc = querySnapshot.data();
    if (doc) {
      const request: MedicoRequestEntity = {
        createAt: doc.createAt.toDate(),
        id: querySnapshot.id,
        images: doc.images,
        videos: doc.videos,
        location: {
          lat: doc.location.latitude,
          lng: doc.location.longitude,
        },
        notes: doc.notes,
      };

      return request;
    }
    throw new Error("Erro ao pegar documento: " + id);
  }

  async close({ id }: MedicoRequestRepository.CloseParams): Promise<void> {
    await firestore.collection("AmbulanceRequest").doc(id).update({
      state: 3,
    });
  }

  async send({ id, notes }: MedicoRequestRepository.SendParams): Promise<void> {
    await firestore.collection("AmbulanceRequest").doc(id).update({
      state: 2,
      notes,
    });
  }
}
