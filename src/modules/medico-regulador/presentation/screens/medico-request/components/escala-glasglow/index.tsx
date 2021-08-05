import { CustomButton } from "core/components";
import React, { useState } from "react";
import Modal from "react-modal";

import {
  CloseContainer,
  Container,
  ModalContainer,
  OpenButtonContainer,
  RadiosContainer,
  Row,
} from "./styles";

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

export const EscalaGlasglow: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [aberturaOcular, setAberturaOcular] = useState(1);
  const [respostaVerbal, setRespostaVerbal] = useState(1);
  const [respostaMotora, setRespostaMotora] = useState(1);

  function closeHandler() {
    console.log(aberturaOcular + respostaMotora + respostaVerbal);
    setModalOpen(false);
  }

  return (
    <Container>
      <OpenButtonContainer>
        <label>Escala de Coma de Glasgow</label>
        <p>
          Resultado:
          <span> {aberturaOcular + respostaMotora + respostaVerbal}</span>
        </p>
        <CustomButton onClick={() => setModalOpen(!modalOpen)}>
          Calcular
        </CustomButton>
      </OpenButtonContainer>
      <Modal
        className="Modal"
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        style={customStyles}
        contentLabel="Escala de Coma de Glasglow"
      >
        <ModalContainer>
          <Row>
            <p>Abertura Ocular</p>
            <RadiosContainer>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={1}
                    checked={aberturaOcular === 1}
                    onChange={(e) => setAberturaOcular(+e.target.value)}
                  />
                  Ausente. +1
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={2}
                    checked={aberturaOcular === 2}
                    onChange={(e) => setAberturaOcular(+e.target.value)}
                  />
                  Ao estímulo doloroso. +2
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={3}
                    checked={aberturaOcular === 3}
                    onChange={(e) => setAberturaOcular(+e.target.value)}
                  />
                  Ordem verbal. +3
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={4}
                    checked={aberturaOcular === 4}
                    onChange={(e) => setAberturaOcular(+e.target.value)}
                  />
                  Espontânea. +4
                </label>
              </div>
            </RadiosContainer>
          </Row>
          <Row>
            <p>Melhor Resposta Verbal</p>

            <RadiosContainer>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={1}
                    checked={respostaVerbal === 1}
                    onChange={(e) => setRespostaVerbal(+e.target.value)}
                  />
                  Ausente. +1
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={2}
                    checked={respostaVerbal === 2}
                    onChange={(e) => setRespostaVerbal(+e.target.value)}
                  />
                  Gemido a dor. +2
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={3}
                    checked={respostaVerbal === 3}
                    onChange={(e) => setRespostaVerbal(+e.target.value)}
                  />
                  Choro por estímulo doloroso. +3
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={4}
                    checked={respostaVerbal === 4}
                    onChange={(e) => setRespostaVerbal(+e.target.value)}
                  />
                  Choro irritado. +4
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={5}
                    checked={respostaVerbal === 5}
                    onChange={(e) => setRespostaVerbal(+e.target.value)}
                  />
                  Balbucio. +5
                </label>
              </div>
            </RadiosContainer>
          </Row>
          <Row>
            <p>Resposta Motora</p>

            <RadiosContainer>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={1}
                    checked={respostaMotora === 1}
                    onChange={(e) => setRespostaMotora(+e.target.value)}
                  />
                  Ausente. +1
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={2}
                    checked={respostaMotora === 2}
                    onChange={(e) => setRespostaMotora(+e.target.value)}
                  />
                  Descerebração. +2
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={3}
                    checked={respostaMotora === 3}
                    onChange={(e) => setRespostaMotora(+e.target.value)}
                  />
                  Decorticação. +3
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={4}
                    checked={respostaMotora === 4}
                    onChange={(e) => setRespostaMotora(+e.target.value)}
                  />
                  Reage à dor. +4
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={5}
                    checked={respostaMotora === 5}
                    onChange={(e) => setRespostaMotora(+e.target.value)}
                  />
                  Reage ao toque. +5
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={6}
                    checked={respostaMotora === 6}
                    onChange={(e) => setRespostaMotora(+e.target.value)}
                  />
                  Espontânea e normal. +6
                </label>
              </div>
            </RadiosContainer>
          </Row>
          <CloseContainer>
            <p>Resultado: {aberturaOcular + respostaMotora + respostaVerbal}</p>
            <CustomButton className="btn btn-default" onClick={closeHandler}>
              Fechar
            </CustomButton>
          </CloseContainer>
        </ModalContainer>
      </Modal>
    </Container>
  );
};
