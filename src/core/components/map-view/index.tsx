import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import { AmbulanceMarker } from "./components";
import { RequestMarker } from "./components/request-marker";

import GoogleMapReact from "google-map-react";

type Props = {
  latitude: number;
  longitude: number;
};

type Ambulance = {
  available: boolean;
  lat: number;
  lng: number;
  distance: string;
};

const ambulancesData: Ambulance[] = [
  {
    available: true,
    lat: -29.889880152611607,
    lng: -50.27502430550564,
    distance: "",
  },
  {
    available: true,
    lat: -29.886512923939673,
    lng: -50.2657489198381,
    distance: "",
  },
  {
    available: true,
    lat: -29.903617827738298,
    lng: -50.26841524293678,
    distance: "",
  },
  {
    available: true,
    lat: -29.906648267604492,
    lng: -50.25550332934607,
    distance: "",
  },
  {
    available: true,
    lat: -29.894813545333477,
    lng: -50.23557407079686,
    distance: "",
  },
  {
    available: true,
    lat: -29.893574523883714,
    lng: -50.253772002477156,
    distance: "",
  },
  {
    available: true,
    lat: -29.894988325536733,
    lng: -50.25814936737586,
    distance: "",
  },
];

export const MapView: React.FC<Props> = ({ latitude, longitude }) => {
  useEffect(() => {}, []);

  const [ambulances, setAmbulances] = useState(ambulancesData);

  async function loadDistance(google: any) {
    console.log("rodou");
    const newArray: Ambulance[] = [];

    for await (let ambulance of ambulances) {
      await new google.maps.DistanceMatrixService().getDistanceMatrix(
        {
          origins: [new google.maps.LatLng(latitude, longitude)],
          destinations: [new google.maps.LatLng(ambulance.lat, ambulance.lng)],
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (response: any) => {
          if (response && response?.rows[0].elements[0].duration.text) {
            console.log(response?.rows[0].elements[0]);
            ambulance.distance = response?.rows[0].elements[0].duration.text;
            newArray.push(ambulance);
          }
        }
      );
    }

    setAmbulances(newArray);
  }

  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyAczNDlSc1G6NsUmwFQIx8WpkIZYKx4yQ8",
        }}
        defaultZoom={14}
        defaultCenter={{ lat: -29.8942044, lng: -50.2597328 }}
        layerTypes={["TrafficLayer", "TransitLayer"]}
        onGoogleApiLoaded={loadDistance}
        yesIWantToUseGoogleMapApiInternals
      >
        <RequestMarker lat={latitude} lng={longitude} />
        {ambulances.map((ambulance, index) => (
          <AmbulanceMarker key={`ambulance-${index}`} {...ambulance} />
        ))}
      </GoogleMapReact>
    </Container>
  );
};
