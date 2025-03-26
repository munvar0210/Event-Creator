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

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 10px;
  }
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

export const StyledLabel = styled.label`
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
  padding: 12px;
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
    padding: 10px;
    font-size: 14px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 15px;
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
    padding: 10px;
    font-size: 14px;
    min-height: 80px;
  }
`;

export const ImageUploadContainer = styled.div`
  border: 2px dashed
    ${(props) => (props.$active === "true" ? "#ff3a5c" : "#ddd")};
  border-radius: 4px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${(props) =>
    props.$active === "true" ? "rgba(255, 58, 92, 0.05)" : "#f9f9f9"};
  height: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  &:hover {
    border-color: #ff3a5c;
    background-color: rgba(255, 58, 92, 0.05);
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 100px;
    padding: 15px 10px;
  }
`;

export const UploadIcon = styled.div`
  font-size: 30px;
  color: #666;
  margin-bottom: 10px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
    margin-bottom: 8px;
  }
`;

export const UploadText = styled.div`
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
  font-weight: 500;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
    margin-bottom: 3px;
  }
`;

export const UploadNote = styled.div`
  font-size: 14px;
  color: #999;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff3a5c;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 0;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
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

  &:hover {
    background-color: #e62e50;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px 16px;
    font-size: 14px;
    width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
    justify-content: center;
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

  &:hover {
    background-color: #f5f5f5;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 7px 14px;
    font-size: 14px;
    width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
    justify-content: center;
  }
`;

export const SectionHeading = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 10px;
`;

export const LearningItemContainer = styled.div`
  margin-bottom: 15px;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const InputRemoveButton = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
`;

export const RemoveIconButton = styled.button`
  background: transparent;
  border: none;
  color: #ff3a5c;
  cursor: pointer;
  padding: 3px 8px;
  display: flex;
  align-items: center;

  &:hover {
    color: #e62e50;
  }
`;

export const StyledAddButton = styled.button`
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
  margin-top: 10px;
  margin-left: auto;
  font-weight: 500;

  &:hover {
    background-color: #0b5ed7;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 7px 12px;
    font-size: 14px;
    width: 100%;
    margin-left: 0;
  }
`;

export const ImagePreviewContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

export const ImagePreview = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: contain;
  display: block;
  border-radius: 4px;
`;

export const DeleteImageButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff3a5c;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  }
`;
