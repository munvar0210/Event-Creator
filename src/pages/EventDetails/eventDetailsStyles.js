import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const breakpoints = {
  mobile: "768px",
  tablet: "992px",
  desktop: "1200px",
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(26, 115, 232, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(26, 115, 232, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(26, 115, 232, 0);
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  background-color: white;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  &.visible {
    opacity: 1;
  }
`;

export const Header = styled.div`
  margin-bottom: 1.5rem;
  animation: ${fadeIn} 0.5s ease forwards;
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #323232;
  font-weight: 500;
  font-family: "DM Sans";
  font-weight: 500;
  font-size: 0.8rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1rem;
  }

  transition: all 0.2s ease;

  &:hover {
    color: #1a73e8;
    transform: translateX(-3px);
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

export const CardLayout = styled.div`
  margin-bottom: 2rem;
  @media (min-width: ${breakpoints.mobile}) {
    order: 2;
    margin-bottom: 0;
    width: 350px;

    &:hover {
      transform: translateY(-5px);
    }
  }
`;

export const RegistrationCard = styled.div`
  width: 100%;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: 0.1s;
  opacity: 0;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (min-width: ${breakpoints.mobile}) {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }
  }
`;

export const MainContent = styled.div`
  width: 100%;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: 0.2s;
  opacity: 0;

  @media (min-width: ${breakpoints.mobile}) {
    order: 1;
    flex: 1;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  overflow: hidden;
`;

export const WorkshopImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${RegistrationCard}:hover & {
    transform: scale(1.05);
  }
`;

export const CardContent = styled.div`
  padding: 1rem 0;

  @media (min-width: ${breakpoints.mobile}) {
    padding: 1.5rem;
  }
`;

export const WorkshopTitle = styled.h1`
  font-size: 1.3rem;
  color: #2f2f2f;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
  transition: color 0.3s ease;
  font-weight: 500;
  font-family: "Inter";

  &.card-title {
    font-size: 1rem;

    @media (min-width: ${breakpoints.mobile}) {
      font-size: 1.1rem;
    }

    @media (min-width: ${breakpoints.tablet}) {
      font-size: 1.2rem;
    }

    margin-bottom: 0.5rem;
  }

  ${RegistrationCard}:hover & {
    color: #1a73e8;
  }

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.7rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 1.8rem;
  }
`;

export const WorkshopDescription = styled.p`
  color: #323232;
  font-weight: 400;
  font-family: "Work Sans";
  font-size: 0.8rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 0.85rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 0.9rem;
  }

  line-height: 1.5;
  margin-bottom: 1rem;
`;

export const TimeDetails = styled.div`
  margin-bottom: 1rem;
`;

export const TimeItem = styled.div`
  font-size: 0.8rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 0.85rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 0.9rem;
  }

  color: #686868;
  margin-bottom: 0.25rem;
  transition: transform 0.2s ease;
  font-family: "Inter";

  span {
    font-weight: 500;
    color: #686868;
  }

  ${RegistrationCard}:hover & {
    transform: translateX(3px);
  }
`;

export const RegistrationDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

export const RegistrationCount = styled.div`
  font-size: 0.7rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 0.75rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 0.8rem;
  }

  color: #2f2f2f;
  font-weight: 500;
  font-family: "Work Sans";
  transition: opacity 0.3s ease;

  ${RegistrationCard}:hover & {
    opacity: 0.8;
  }
`;

export const Price = styled.div`
  font-size: 1rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 1.1rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.2rem;
  }

  font-weight: 600;
  color: #3a3a3a;
  font-weight: 700;
  font-family: "Open Sans";
  transition: transform 0.3s ease, color 0.3s ease;

  ${RegistrationCard}:hover & {
    color: #1a73e8;
    transform: scale(1.1);
  }
`;

export const PaidBadge = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: #e8e8ff;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.6rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 0.65rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 0.7rem;
  }

  color: #5d5fef;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;

  ${RegistrationCard}:hover & {
    background-color: #1a73e8;
    color: white;
  }
`;

export const RegisterButton = styled.button`
  background-color: #298bfc;
  color: #ffffff;
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 0.95rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1rem;
  }

  cursor: pointer;
  width: 100%;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-family: "Mulish";
  font-weight: 500;

  &:hover {
    background-color: #1557b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(26, 115, 232, 0.3);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(26, 115, 232, 0.3);
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
  }

  &:focus:not(:active)::after {
    animation: ripple 1s ease-out;
  }

  @keyframes ripple {
    0% {
      transform: scale(0, 0);
      opacity: 0.5;
    }
    20% {
      transform: scale(25, 25);
      opacity: 0.3;
    }
    100% {
      opacity: 0;
      transform: scale(40, 40);
    }
  }
`;

export const RegisteredButton = styled(RegisterButton)`
  background-color: #0a8084;
  animation: ${pulse} 2s infinite;

  &:hover {
    background-color: rgb(9, 101, 92);
  }
`;

export const TermsContainer = styled.div`
  text-align: center;
  margin-top: 0.5rem;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;
`;

export const TermsText = styled.p`
  font-size: 0.7rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 0.75rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 0.8rem;
  }

  color: #3a3a3a;
  font-weight: 400;
  font-style: italic;
  font-family: "Work Sans";
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const TermsLink = styled(Link)`
  color: #3934d6;
  text-decoration: none;
  font-weight: 500;
  font-family: "Work Sans";
  transition: color 0.2s ease, text-decoration 0.2s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -2px;
    left: 0;
    background-color: #1a73e8;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #1557b3;

    &::after {
      transform: scaleX(1);
    }
  }
`;

export const MeetLinkText = styled.p`
  display: inline-block;
  width: fit-content;
  background-color: #ccffed;
  padding: 0.75rem;
  border-radius: 4px;
  font-size: 0.7rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 0.75rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 0.8rem;
  }

  color: #057a63;
  font-weight: 600;
  font-family: "Open Sans";
  font-style: italic;
  margin-top: 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #d0f0d0;
    transform: translateY(-2px);
    box-shadow: 0 2px 6px rgba(0, 128, 0, 0.15);
  }
`;

export const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  width: 100%;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: 0.4s;
  opacity: 0;

  @media (min-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(4, 1fr);
    order: 3;
  }
`;

export const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    border-color: #1a73e8;
  }
`;

export const IconContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color || "#1a73e8"};
  font-size: 1.1rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 1.15rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.2rem;
  }

  margin-bottom: 0.5rem;
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.2);
  }
`;

export const CardTitle = styled.h3`
  font-size: 0.9rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 0.95rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1rem;
  }

  color: #333;
  margin: 0.5rem 0;
  transition: color 0.3s ease;

  ${CardContainer}:hover & {
    color: #1a73e8;
  }
`;

export const CardDescription = styled.p`
  font-size: 0.7rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 0.75rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 0.8rem;
  }

  color: #666;
  margin: 0;
  transition: opacity 0.3s ease;

  ${CardContainer}:hover & {
    opacity: 0.8;
  }
`;

export const HeadingWrapper = styled.div`
  margin-top: 3rem;
  width: 100%;
  order: 6;

  @media (max-width: 768px) {
    order: 6;
  }
`;

export const StyledHeading = styled.h1`
  font-size: 1.8rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 2.2rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 2.5rem;
  }

  font-weight: 700;
  text-align: center;
  margin: 2rem 0;
  color: #3d3d3d;
  font-family: "Inter";
`;

export const EventGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
