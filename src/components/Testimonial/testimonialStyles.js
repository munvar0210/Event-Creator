import styled from "styled-components";

const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1200px",
};

export const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #4da0ff;
  color: white;
  display: flex;
  flex-direction: column;
  min-height: 500px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  order: 5;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.5rem;
    min-height: 400px;
    order: 5;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.25rem;
    min-height: 350px;
  }
`;

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.$isDesktop ? "row" : "column")};
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  flex: 1;
  width: 100%;
  text-align: ${(props) => (props.$isDesktop ? "left" : "center")};

  @media (max-width: ${breakpoints.tablet}) {
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 1.25rem;
    margin-bottom: 1.25rem;
  }
`;

export const CarouselHeader = styled.div`
  width: 100%;
  max-width: ${(props) => (props.$isDesktop ? "45%" : "100%")};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$isDesktop ? "flex-start" : "center")};

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 1rem;
    max-width: ${(props) => (props.$isDesktop ? "45%" : "90%")};
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100%;
  }
`;

export const CarouselTitle = styled.h2`
  font-size: 1.75rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 2rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 2.25rem;
  }

  @media (min-width: ${breakpoints.laptop}) {
    font-size: 2.5rem;
  }

  font-weight: bold;
  margin-bottom: 1rem;
  text-align: ${(props) => (props.$isDesktop ? "left" : "center")};
  width: 100%;
  color: #ffffff;
  font-weight: 700;
  font-family: "Inter";

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 0.75rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 0.5rem;
  }
`;

export const CarouselSubtitle = styled.p`
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

  line-height: 1.6;
  opacity: 0.9;
  text-align: ${(props) => (props.$isDesktop ? "left" : "center")};
  margin: 0;
  color: #f8f7f7;
  font-weight: 400;
  font-family: "DM Sans";

  @media (max-width: ${breakpoints.mobile}) {
    line-height: 1.5;
  }
`;

export const CarouselContent = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: ${(props) => (props.$isDesktop ? "500px" : "100%")};

  @media (max-width: ${breakpoints.tablet}) {
    max-width: ${(props) => (props.$isDesktop ? "450px" : "90%")};
  }

  @media (max-width: ${breakpoints.mobile}) {
    max-width: 100%;
  }
`;

export const TestimonialCard = styled.div`
  background-color: white;
  color: #333;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 150px;
    height: 100px;
    background-color: white;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 50%;
    z-index: 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    &::before {
      width: 120px;
      height: 80px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    &::before {
      width: 100px;
      height: 70px;
    }
  }
`;

export const TestimonialText = styled.p`
  font-size: 0.9rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 0.95rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1rem;
  }

  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: left;
  padding: 2rem;
  color: #1e1e1e;
  font-weight: 400;
  font-family: "DM Sans";

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 1.5rem;
    padding: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    line-height: 1.5;
    margin-bottom: 1.25rem;
    padding: 1.25rem;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
  background-color: #298bfc;
  border-top-left-radius: 20px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 1.5rem;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.25rem;
  }
`;

export const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffffff;
  color: #298bfc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  margin-right: 1rem;
  font-family: "Inter";

  @media (max-width: ${breakpoints.mobile}) {
    width: 40px;
    height: 40px;
    margin-right: 0.75rem;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const ProfileName = styled.span`
  font-weight: 700;
  font-size: 0.9rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 0.95rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1rem;
  }

  margin-bottom: 0.25rem;
  font-family: "Inter";
  color: #ffffff;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 0.2rem;
  }
`;

export const ProfileTitle = styled.span`
  font-size: 0.75rem;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 0.85rem;
  }

  color: #ffffff;
  opacity: 60%;
  font-family: "Inter";
  font-weight: 400;
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 10px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 0.75rem;
    gap: 8px;
  }
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$active ? "white" : "rgba(255, 255, 255, 0.5)"};
  margin: 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media (max-width: ${breakpoints.mobile}) {
    width: 8px;
    height: 8px;
  }
`;
