// import firebase from "firebase/app";
import { firestore } from "core/infra/firebase";

import { RequestEntity } from "../../domain/entities";
import { RequestRepository } from "modules/tarm/domain/repositories";

// const converter = {
//   toFirestore: (data: RequestEntity) => data,
//   fromFirestore: (snap: firebase.firestore.QueryDocumentSnapshot) =>
//     snap.data() as RequestEntity,
// };

export class RequestRepositoryImpl implements RequestRepository {
  async get(): Promise<RequestRepository.Model[]> {
    const querySnapshot = await firestore.collection("AmbulanceRequest").get();

    const requests: RequestEntity[] = querySnapshot.docs.map((doc) => ({
      createAt: doc.data().createAt.toDate(),
      id: doc.id,
      images: doc.data().images,
      videos: doc.data().videos,
      isOpen: doc.data().isOpen,
      location: {
        lat: doc.data().location.latitude,
        lng: doc.data().location.longitude,
      },
    }));
    console.log(requests);

    return requests;
  }

  async getOne({
    id,
  }: RequestRepository.GetOneParams): Promise<RequestRepository.Model> {
    const querySnapshot = await firestore
      .collection("AmbulanceRequest")
      .doc(id)
      .get();

    const doc = querySnapshot.data();
    if (doc) {
      const request: RequestEntity = {
        createAt: doc.createAt.toDate(),
        id: querySnapshot.id,
        images: doc.images,
        videos: doc.videos,
        isOpen: doc.isOpen,
        location: {
          lat: doc.location.latitude,
          lng: doc.location.longitude,
        },
      };

      return request;
    }
    throw new Error("Erro ao pegar documento: " + id);
  }

  async close(): Promise<void> {}

  async send(): Promise<void> {}
}
