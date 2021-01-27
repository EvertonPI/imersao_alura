import styled from "styled-components";

const ButtonQuiz = styled.button`
  height: 25px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.contrastText};
`;
export { ButtonQuiz };
