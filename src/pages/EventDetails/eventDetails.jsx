import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Header,
  BackButton,
  ContentWrapper,
  CardLayout,
  RegistrationCard,
  MainContent,
  ImageContainer,
  WorkshopImage,
  CardContent,
  WorkshopTitle,
  WorkshopDescription,
  TimeDetails,
  TimeItem,
  RegistrationDetails,
  RegistrationCount,
  Price,
  PaidBadge,
  RegisterButton,
  RegisteredButton,
  TermsContainer,
  TermsText,
  TermsLink,
  MeetLinkText,
  FeaturesContainer,
  HeadingWrapper,
  StyledHeading,
  EventGrid,
} from "./eventDetailsStyles";
import FeatureCard from "../../components/FeatureCard/featureCard";
import LearnComponent from "../../components/Learn/learn";
import TestimonialCarousel from "../../components/Testimonial/testimonial";
import EventCard from "../../components/EventCard/eventCard";
import events from "../../data/eventData";
import { workshopData, featureCards } from "../../data/eventDetailsData";

const WorkshopRegistration = () => {
  const { id } = useParams();
  const [workshop, setWorkshop] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [relatedEvents, setRelatedEvents] = useState([]);
  const displayLimit = 6;

  useEffect(() => {
    const fetchWorkshopData = () => {
      setLoading(true);

      setTimeout(() => {
        setWorkshop({
          ...workshopData,
          id: id,
          isRegistered: id % 2 === 0,
        });
        setIsRegistered(id % 2 === 0);

        // Use the imported events data
        setRelatedEvents(events);

        setLoading(false);
        setTimeout(() => setIsVisible(true), 100);
      }, 300);
    };

    fetchWorkshopData();
  }, [id]);

  if (loading || !workshop) {
    return <div>Loading workshop details...</div>;
  }

  return (
    <Container className={isVisible ? "visible" : ""}>
      <Header>
        <BackButton to="/events">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Events
        </BackButton>
      </Header>

      <ContentWrapper>
        <CardLayout>
          <RegistrationCard>
            <ImageContainer>
              <WorkshopImage src={workshop.image} alt={workshop.title} />
              <PaidBadge>Paid</PaidBadge>
            </ImageContainer>

            <CardContent>
              <WorkshopTitle className="card-title">
                {workshop.title}
              </WorkshopTitle>

              <TimeDetails>
                <TimeItem>
                  <span>Start Time: </span>
                  {workshop.startTime}
                </TimeItem>
                <TimeItem>
                  <span>End Time: </span>
                  {workshop.endTime}
                </TimeItem>
              </TimeDetails>

              <RegistrationDetails>
                <RegistrationCount>
                  {workshop.registeredCount} people have registered
                </RegistrationCount>
                <Price>Rs {workshop.price}/-</Price>
              </RegistrationDetails>

              {isRegistered ? (
                <RegisteredButton>Registered</RegisteredButton>
              ) : (
                <RegisterButton onClick={() => setIsRegistered(true)}>
                  Register
                </RegisterButton>
              )}
            </CardContent>
          </RegistrationCard>
          <TermsContainer>
            <TermsText>
              By continuing you agree to our
              <br />
              <TermsLink to="/terms">Terms</TermsLink> and{" "}
              <TermsLink to="/privacy">Privacy Policy</TermsLink>
            </TermsText>
          </TermsContainer>
        </CardLayout>

        <MainContent>
          <WorkshopTitle>{workshop.title}</WorkshopTitle>

          <WorkshopDescription>{workshop.description}</WorkshopDescription>

          <MeetLinkText>
            Google Meet Link will be shared to your registered email before 15
            minutes of workshop start time.
          </MeetLinkText>
        </MainContent>

        <FeaturesContainer>
          {featureCards.map((card, index) => (
            <FeatureCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              color={card.color}
            />
          ))}
        </FeaturesContainer>
        <LearnComponent />
        <TestimonialCarousel />

        {/* Added Upcoming Events Section with Styled Components */}
        <HeadingWrapper>
          <StyledHeading>Upcoming Events</StyledHeading>
          <EventGrid>
            {relatedEvents.slice(0, displayLimit).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </EventGrid>
        </HeadingWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default WorkshopRegistration;
