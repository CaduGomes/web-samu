import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

type Props = {
  lat: number;
  lng: number;
};

const K_WIDTH = 20;
const K_HEIGHT = 20;

export const RequestMarker: React.FC<Props> = (props) => {
  // console.log(props);
  return (
    <div
      style={{
        position: "absolute",
        width: K_WIDTH,
        height: K_HEIGHT,
        left: -K_WIDTH / 2,
        top: -K_HEIGHT / 2,
      }}
    >
      <FaMapMarkerAlt size={20} color={"black"} />
    </div>
  );
};
