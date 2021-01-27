import styled from "styled-components";

const InputQuiz = styled.input`
  font-size: 15px;
  height: 25px;
  width: 70%;
  outline: none;
  color: ${({ theme }) => theme.colors.wrong};
`;
export default InputQuiz;
