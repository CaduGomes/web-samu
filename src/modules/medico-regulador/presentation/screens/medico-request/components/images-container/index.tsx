import React, { useState } from "react";
import {
  Container,
  Image,
  ItensContainer,
  ModalContainer,
  Video,
} from "./styles";
import Modal from "react-modal";

type Props = {
  images: {
    url: string;
    name: string;
  }[];
  videos: {
    url: string;
    name: string;
  }[];
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const ImagesContainer: React.FC<Props> = ({ images, videos }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imgURL, setImgURL] = useState("");

  function openModal(url: string) {
    setImgURL(url);
    setModalIsOpen(true);
  }

  return (
    <Container>
      <Modal
        ariaHideApp={false}
        style={customStyles}
        className="ImageModal"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <ModalContainer>
          <img src={imgURL} alt="modal" />
        </ModalContainer>
      </Modal>
      <label>Imagens e Vídeos</label>
      <ItensContainer>
        {images.map((image, index) => (
          <Image key={`image-${index}`} onClick={() => openModal(image.url)}>
            <img src={image.url} alt={`${index}-imagem`} />
          </Image>
        ))}
        {videos.map((videos, index) => (
          <Video key={`image-${index}`}>
            <video src={videos.url} controls />
          </Video>
        ))}
      </ItensContainer>
    </Container>
  );
};
