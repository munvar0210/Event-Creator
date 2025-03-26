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

export const InstructorContainer = styled.div`
  margin-bottom: 20px;
  position: relative;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid #eee;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.mobile}) {
    padding: 15px;
    margin-bottom: 15px;
  }
`;

export const InstructorTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 15px;
    margin-bottom: 12px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 12px;
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
  font-weight: 500;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 13px;
    margin-bottom: 6px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
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
    font-size: 13px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  min-height: 100px;
  resize: vertical;
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
    font-size: 13px;
    min-height: 80px;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff3a5c;
  font-size: 13px;
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

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 15px;
  font-size: 15px;
  color: white;
  background-color: #0d6efd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: auto;
  font-weight: 500;
  width: auto;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0b5ed7;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 7px 12px;
    font-size: 13px;
    width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
  }
`;

export const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ff3a5c;
  cursor: pointer;
  font-size: 16px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    color: #e62e50;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
    padding: 4px;
  }
`;
