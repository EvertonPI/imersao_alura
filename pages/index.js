import { useState } from "react";
import styled from "styled-components";
import db from "../db.json";

import QuizHead from "../src/components/QuizHeader";
import Widget from "../src/components/Widget";
import QuizLogo from "../src/components/QuizLogo";
import QuizBackground from "../src/components/QuizBackground";
import Footer from "../src/components/Footer";
import GitHubCorner from "../src/components/GitHubCorner";
import InputQuiz from "../src/components/InputQuiz";
import { ButtonQuiz } from "../src/components/ButtonQuiz";

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/quiz?name=${name}`);
    console.log("Fazendo uma submissão por meio do react");
  };
  const handleChangeName = ({ target }) => {
    setName(target.value);
    console.log(target.value);
  };
  return (
    <>
      <QuizHead props={db} />
      <QuizBackground backgroundImage={db.anime}>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <form onSubmit={handleSubmit}>
                <InputQuiz
                  onChange={handleChangeName}
                  placeholder="Diz ai seu nome"
                />
                <ButtonQuiz type="submit" disabled={name.length === ""}>
                  Jogar
                  {name}
                </ButtonQuiz>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>

              <p>
                {" "}
                Aqui será os trabalho da gaelra e as dúvidas, bora fazer
                projetos incriveis .
              </p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/EvertonPI" />
      </QuizBackground>
    </>
  );
}
