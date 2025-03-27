import styled from "styled-components";

const breakpoints = {
  mobile: "680px",
  tablet: "1024px",
  desktop: "1200px",
};

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 24px;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 26px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 30px;
  }

  color: #2f2f2f;
  font-weight: 600;
  font-family: "Work Sans";
  margin: 0px;

  span {
    color: #e01a3e;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 18px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }

  text-transform: uppercase;
  letter-spacing: 1px;
  color: #646464;
  font-weight: 600;
  font-family: "Work Sans";
  margin-top: 0px;
  margin-bottom: 30px;
`;

export const Description = styled.p`
  font-size: 13px;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 13.5px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }

  line-height: 1.5;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: #404040;
  font-weight: 400;
  font-family: "Mulish";
`;

export const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
