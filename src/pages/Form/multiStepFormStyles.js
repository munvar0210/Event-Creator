import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  border: 1px solid;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 90%;
    padding: 30px;
  }

  @media (min-width: 1200px) {
    width: 80%;
    padding: 40px;
  }

  @media (min-width: 1600px) {
    width: 1200px;
  }
`;
