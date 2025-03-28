import React from "react";
import EventCard from "../../components/EventCard/eventCard";
import events from "../../data/eventData";
import {
  Container,
  Header,
  Title,
  Subtitle,
  Description,
  EventGrid,
} from "./eventStyles";

const EventsPage = () => {
  return (
    <Container>
      <Header>
        <Title>
          <span>EVENT</span> HORIZON
        </Title>
        <Subtitle>UNLOCK SKILLS FOR A BRIGHTER FUTURE</Subtitle>
        <Description>
          Explore Our Exciting Lineup Of Events Designed To Inspire, Educate,
          And Connect Individuals From All Walks Of Life. Discover Opportunities
          To Grow, Learn, And Network With Industry Leaders And Peers.
        </Description>
      </Header>

      <EventGrid>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </EventGrid>
    </Container>
  );
};

export default EventsPage;
