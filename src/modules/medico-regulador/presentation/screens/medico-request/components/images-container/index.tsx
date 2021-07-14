import React from "react";
import { Container, Image, Video } from "./styles";

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

export const ImagesContainer: React.FC<Props> = ({ images, videos }) => {
  return (
    <Container>
      {images.map((image, index) => (
        <Image key={`image-${index}`}>
          <img src={image.url} alt={`${index}-imagem`} />
        </Image>
      ))}
      {videos.map((videos, index) => (
        <Video key={`image-${index}`}>
          <video src={videos.url} controls />
        </Video>
      ))}
    </Container>
  );
};
