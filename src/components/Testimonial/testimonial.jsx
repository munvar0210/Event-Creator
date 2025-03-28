import React, { useState, useEffect } from "react";
import { testimonialData } from "../../data/eventDetailsData";
import {
  CarouselContainer,
  CarouselWrapper,
  CarouselHeader,
  CarouselTitle,
  CarouselSubtitle,
  CarouselContent,
  TestimonialCard,
  TestimonialText,
  ProfileSection,
  ProfileImage,
  ProfileInfo,
  ProfileName,
  ProfileTitle,
  DotsContainer,
  Dot,
} from "./testimonialStyles";

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [isPaused, setIsPaused] = useState(false);

  // Auto transition effect
  useEffect(() => {
    const transitionInterval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) =>
          prev === testimonialData.length - 1 ? 0 : prev + 1
        );
      }
    }, 5000); // Transition every 5 seconds

    return () => clearInterval(transitionInterval);
  }, [isPaused]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <CarouselContainer
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <CarouselWrapper $isDesktop={isDesktop}>
        <CarouselHeader $isDesktop={isDesktop}>
          <CarouselTitle>About Instructors</CarouselTitle>
          <CarouselSubtitle>
            Version control with Git It was popularised in the 1960s with the
            release of Letraset sheets containing was popularised in the 1960s
            with the release of Letraset sheets containing was popularised in
            the 1960s containing
          </CarouselSubtitle>
        </CarouselHeader>

        <CarouselContent>
          <TestimonialCard>
            <TestimonialText>
              {testimonialData[currentSlide].testimonial}
            </TestimonialText>
            <ProfileSection>
              <ProfileImage>
                {testimonialData[currentSlide].initials}
              </ProfileImage>
              <ProfileInfo>
                <ProfileName>{testimonialData[currentSlide].name}</ProfileName>
                <ProfileTitle>
                  {testimonialData[currentSlide].title}
                </ProfileTitle>
              </ProfileInfo>
            </ProfileSection>
          </TestimonialCard>
        </CarouselContent>
      </CarouselWrapper>

      <DotsContainer>
        {testimonialData.map((_, index) => (
          <Dot
            key={index}
            $active={index === currentSlide}
            onClick={() => goToSlide(index)}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default TestimonialCarousel;
