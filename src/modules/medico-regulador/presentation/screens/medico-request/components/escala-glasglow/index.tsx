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
  const [reaçãoPupilar, setReaçãoPupilar] = useState(0);

  function closeHandler() {
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
                  Nenhuma. +1
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
                  Ao estímulo de pressão. +2
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
                  Ao estímulo sonoro. +3
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
            <p>Resposta Verbal</p>

            <RadiosContainer>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={1}
                    checked={respostaVerbal === 1}
                    onChange={(e) => setRespostaVerbal(+e.target.value)}
                  />
                  Nenhuma. +1
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
                  Verbaliza sons. +2
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
                  Verbaliza palavras soltas. +3
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
                  Confusa. +4
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
                  Orientada. +5
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
                  Nenhuma. +1
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
                  Extensão anormal. +2
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
                  Flexão anormal. +3
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
                  Flexão normal. +4
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
                  Localiza estímulo. +5
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
                  Obedece comandos. +6
                </label>
              </div>
            </RadiosContainer>
          </Row>
          <Row>
            <p>Avaliação Pupilar</p>

            <RadiosContainer>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={0}
                    checked={reaçãoPupilar === 0}
                    onChange={(e) => setReaçãoPupilar(+e.target.value)}
                  />
                  As duas pupilar reagem ao estímulo de luz. +0
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={1}
                    checked={reaçãoPupilar === 1}
                    onChange={(e) => setReaçãoPupilar(+e.target.value)}
                  />
                  Apenas uma pupila reage ao estímulo de luz. +1
                </label>
              </div>
              <div className="radio">
                <label>
                  <input
                    type="radio"
                    value={2}
                    checked={reaçãoPupilar === 2}
                    onChange={(e) => setReaçãoPupilar(+e.target.value)}
                  />
                  Nenhuma pupila reage ao estímulo de luz. +2
                </label>
              </div>
            </RadiosContainer>
          </Row>
          <CloseContainer>
            <p>Resultado: {(aberturaOcular + respostaMotora + respostaVerbal) - reaçãoPupilar}</p>
            <CustomButton className="btn btn-default" onClick={closeHandler}>
              Fechar
            </CustomButton>
          </CloseContainer>
        </ModalContainer>
      </Modal>
    </Container>
  );
};
