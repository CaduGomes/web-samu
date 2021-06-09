import firebase from "firebase";

export type AmbulanceRequestModel = {
  id: string;
  createAt: firebase.firestore.Timestamp;
  images: [
    {
      name: string;
      url: string;
    }
  ];
  location: firebase.firestore.GeoPoint;
  isOpen: boolean;
};
