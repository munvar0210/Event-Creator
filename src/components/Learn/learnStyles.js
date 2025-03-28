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

const ripple = keyframes`
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
`;

export const LearnContainer = styled.div`
  width: 100%;
  margin: 2rem 0;
  padding: 1.5rem;
  background-color: #fff;
  /* border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); */
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: 0.5s;
  opacity: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
    /* box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15); */
  }

  @media (min-width: ${breakpoints.tablet}) {
    order: 4;
    padding: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.25rem;
    margin: 1.5rem 0;
  }
`;

export const LearnHeader = styled.h2`
  font-size: 1.3rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1.6rem;
  }

  @media (min-width: ${breakpoints.laptop}) {
    font-size: 1.8rem;
  }

  font-weight: 600;
  color: #3d3d3d;
  font-weight: 700;
  font-family: "Inter";
  text-align: center;
  margin: 0 0 1.5rem 0;
  transition: color 0.3s ease;

  ${LearnContainer}:hover & {
    color: #1a73e8;
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin: 0 0 2rem 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin: 0 0 1.25rem 0;
  }
`;

export const TopicsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TopicItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  font-size: 0.85rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 0.9rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 0.95rem;
  }

  @media (min-width: ${breakpoints.laptop}) {
    font-size: 1rem;
  }

  line-height: 1.5;
  transition: transform 0.2s ease;
  color: #666;

  ${LearnContainer}:hover & {
    transform: translateX(3px);
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: 1.25rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 0.875rem;
  }
`;

export const CheckIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4caf50;
  margin-right: 0.75rem;
  min-width: 1.25rem;
  font-size: 0.9rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 0.95rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1rem;
  }

  margin-top: 0.2rem;
  transition: transform 0.3s ease;

  ${LearnContainer}:hover & {
    transform: scale(1.2);
  }

  @media (max-width: ${breakpoints.mobile}) {
    min-width: 1rem;
    margin-right: 0.5rem;
  }
`;

export const TopicText = styled.span`
  color: #666;
  transition: opacity 0.3s ease;

  ${LearnContainer}:hover & {
    opacity: 0.8;
  }
`;

export const TopicTitle = styled.span`
  font-weight: 600;
  color: #4b4444;
  font-weight: 400;
  font-family: "DM Sans";
  display: block;
  margin-bottom: 0.3rem;
  transition: color 0.3s ease;
  font-size: 0.9rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 0.95rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1rem;
  }

  @media (min-width: ${breakpoints.laptop}) {
    font-size: 1.05rem;
  }

  ${LearnContainer}:hover & {
    color: #1a73e8;
  }

  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: 0.4rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 0.25rem;
  }
`;

export const LearnMoreButton = styled.button`
  background-color: #1a73e8;
  color: white;
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

  @media (min-width: ${breakpoints.laptop}) {
    font-size: 1.1rem;
  }

  cursor: pointer;
  width: 100%;
  margin-top: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

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
    animation: ${ripple} 1s ease-out;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 0.8rem 1.2rem;
    margin-top: 2rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0.6rem 0.9rem;
    margin-top: 1.25rem;
  }
`;
