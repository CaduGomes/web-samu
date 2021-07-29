import React, { useState } from "react";
import { FaAmbulance } from "react-icons/fa";

type Props = {
  lat: number;
  lng: number;
  distance: string;
};

const K_WIDTH = 15;
const K_HEIGHT = 15;

export const AmbulanceMarker: React.FC<Props> = ({ distance }) => {
  const [show, setShow] = useState(false);

  function showHandler() {
    setShow(!show);
  }

  return (
    <div
      onClick={showHandler}
      style={{
        position: "absolute",
        width: K_WIDTH,
        height: K_HEIGHT,
        left: -K_WIDTH / 2,
        top: -K_HEIGHT / 2,
        zIndex: 99999999999999999999999,
      }}
    >
      {show ? (
        <div
          style={{
            position: "absolute",
            width: 70,
            height: 40,
            left: -50 / 2,
            top: -K_HEIGHT - 30,
            backgroundColor: "white",
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999999999999999999999,
          }}
        >
          {distance}
        </div>
      ) : null}
      <FaAmbulance size={20} color={"black"} />
    </div>
  );
};
