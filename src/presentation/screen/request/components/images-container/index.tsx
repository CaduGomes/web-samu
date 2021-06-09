import React from "react";
import { Container, Image } from "./styles";

type Props = {
  images: {
    url: string;
    name: string;
  }[];
};

export const ImagesContainer: React.FC<Props> = ({ images }) => {
  return (
    <Container>
      {images.map((image, index) => (
        <Image key={`image-${index}`}>
          <img src={image.url} alt={`${index}-imagem`} />
        </Image>
      ))}
    </Container>
  );
};
