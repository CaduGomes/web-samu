import React from "react";

import { Container, QuestionContainer } from "./styles";

type Props = {
  sendQuestion: (question: string, answers: string[]) => void;
};

const questions = [
  {
    question: "Qual é a faixa etária?",
    answers: ["0 a 18", "18 a 35", "35+"],
  },
  {
    question: "Qual é o sexo?",
    answers: ["Feminino", "Masculino"],
  },
  {
    question: "Quantas pessoas precisam de socorro?",
    answers: ["Uma", "Duas", "3 ou mais"],
  },
];

export const FastQuestions: React.FC<Props> = ({ sendQuestion }) => {
  return (
    <Container>
      {questions.map((question, index) => (
        <QuestionContainer key={`question-${index}`}>
          <div
            onClick={() => sendQuestion(question.question, question.answers)}
          >
            <p>{question.question}</p>
          </div>
        </QuestionContainer>
      ))}
    </Container>
  );
};
