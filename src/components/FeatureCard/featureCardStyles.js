import styled, { keyframes } from "styled-components";

const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
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

export const CardContainer = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${(props) => props.index * 0.1}s;
  opacity: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    border-color: ${(props) => props.color || "#1a73e8"};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.color || "#1a73e8"}10;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const IconContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.color || "#1a73e8"};
  font-size: 1rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 1.1rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.2rem;
  }

  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease, color 0.3s ease;
  border: 1px solid;
  border-radius: 4px;

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

  @media (min-width: ${breakpoints.laptop}) {
    font-size: 1.1rem;
  }

  color: #2f2f2f;
  font-weight: 600;
  font-family: "Work Sans";
  margin: 0.5rem 0;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;

  ${CardContainer}:hover & {
    color: ${(props) => props.color || "#1a73e8"};
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

  @media (min-width: ${breakpoints.laptop}) {
    font-size: 0.85rem;
  }

  color: #393838;
  font-weight: 400;
  font-family: "Work Sans";
  margin: 0;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
`;
