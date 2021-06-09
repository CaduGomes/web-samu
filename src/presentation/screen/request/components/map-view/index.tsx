import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { Container } from "./styles";

type Props = {
  latitude: number;
  longitude: number;
  // fullscreen: boolean;
};

export const MapView: React.FC<Props> = ({ latitude, longitude }) => {
  return (
    <Container>
      <MapContainer
        id="mapid"
        center={[latitude, longitude]}
        zoom={17}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Container>
  );
};
