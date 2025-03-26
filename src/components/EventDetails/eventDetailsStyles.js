import styled from "styled-components";

// Define breakpoints for responsive design
const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
};

export const FormContainer = styled.div`
  width: 100%;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const FormHeading = styled.h2`
  font-size: 24px;
  color: #333;
  margin-bottom: 25px;
  font-weight: 600;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 15px;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  font-weight: 500;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 15px;
  transition: border 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #ff3a5c;
  }

  &::placeholder {
    color: #aaa;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px 10px;
    font-size: 14px;
  }
`;

export const DateTimeInput = styled(Input)`
  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    opacity: 0.6;
    filter: invert(0.5);

    &:hover {
      opacity: 1;
    }
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 15px;
  transition: border 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888888' d='M6 9L0 3h12'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 12px;
  color: #888;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #ff3a5c;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px 10px;
    font-size: 14px;
    background-position: right 10px center;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff3a5c;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 0;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
    margin-top: 4px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 20px;
    flex-direction: ${(props) =>
      props.$stackButtons ? "column-reverse" : "row"};
    gap: ${(props) => (props.$stackButtons ? "10px" : "0")};
  }
`;

export const NextButton = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  background-color: #ff3a5c;
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #e62e50;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px 16px;
    font-size: 14px;
    width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
  }
`;

export const BackButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
  border: 1px solid #ddd;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f5f5f5;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 7px 14px;
    font-size: 14px;
    width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
  }
`;
