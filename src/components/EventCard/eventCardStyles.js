import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1200px",
};

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.02); }
  100% { transform: scale(1); }
`;

export const CardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(-3px);
  }
`;

export const CardImage = styled.div`
  height: 160px;
  background-color: #f5f5f5;
  background-image: ${(props) =>
    props.$imageUrl
      ? `url(${props.$imageUrl})`
      : "repeating-conic-gradient(#f5f5f5 0% 25%, #ececec 0% 50%)"};
  background-size: ${(props) => (props.$imageUrl ? "cover" : "20px 20px")};
  background-position: center;
  position: relative;
`;

export const StatusBadge = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 10px;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 11px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 12px;
  }

  font-weight: 500;
  color: ${(props) => (props.$status === "paid" ? "#5D5FEF" : "#057A63")};
  background-color: ${(props) => {
    if (props.$status === "new") return "#CCFFED";
    if (props.$status === "paid") return "#E8E8FF";
    if (props.$status === "free") return "#CCFFED";
    return "transparent";
  }};
  display: ${(props) => (props.$status || props.$isFree ? "block" : "none")};
`;

export const CardContent = styled.div`
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const EventTitle = styled.h3`
  font-size: 16px;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 17px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }

  margin-bottom: 12px;
  color: #2f2f2f;
  font-weight: 500;
  font-family: "Inter";
  line-height: 1.3;
`;

export const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
`;

export const EventInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 13px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }

  color: #686868;
  font-weight: 500;
  font-family: "Inter";
  line-height: 1.5;
`;

export const DateLabel = styled.span`
  font-weight: 500;
  margin-right: 5px;
`;

export const EventDateText = styled.span`
  flex-grow: 1;
`;

export const RegistrationInfo = styled.div`
  font-size: 11px;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 13px;
  }

  color: #2f2f2f;
  font-weight: 500;
  font-family: "Work Sans";
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PriceTag = styled.div`
  font-size: 16px;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 17px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
  }

  color: #3a3a3a;
  font-weight: 700;
  font-family: "Open Sans";
`;

export const RegisterButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 12px 0;
  background-color: #298bfc;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  font-weight: 500;
  font-family: "Mulish";
  font-size: 14px;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 15px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }

  border-radius: 4px;
  transition: all 0.2s ease;
  margin-top: auto;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
    animation: ${pulseAnimation} 0.8s ease-in-out;
  }

  &:active {
    transform: scale(0.98);
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

export const SoldOutButton = styled(RegisterButton)`
  background-color: #888;
  cursor: not-allowed;

  &:hover {
    background-color: #888;
    animation: none;
  }
`;
