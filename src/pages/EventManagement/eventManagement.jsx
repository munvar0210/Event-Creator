import React, { useState } from "react";
import styled from "styled-components";
import MultiStepForm from "../Form/multiStepForm";

// Styled components for the event management page
const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const PageHeader = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

const EventsList = styled.div`
  margin-bottom: 30px;
`;

const EventCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EventInfo = styled.div`
  flex: 1;
`;

const EventTitle = styled.h3`
  margin: 0 0 10px;
  color: #444;
`;

const EventDescription = styled.p`
  margin: 0 0 5px;
  color: #666;
  font-size: 14px;
`;

const EventDateInfo = styled.p`
  margin: 0;
  color: #888;
  font-size: 12px;
`;

const ActionButton = styled.button`
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 15px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;

  &:hover {
    background-color: #3a80d2;
  }
`;

const DeleteButton = styled(ActionButton)`
  background-color: #e74c3c;

  &:hover {
    background-color: #c0392b;
  }
`;

const CreateNewButton = styled(ActionButton)`
  margin: 20px 0;
  padding: 12px 20px;
  font-size: 16px;
`;

const FormattedDate = ({ dateString }) => {
  if (!dateString) return null;

  const date = new Date(dateString);
  return (
    <span>
      {date.toLocaleDateString()} at{" "}
      {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </span>
  );
};

const EventManagementPage = () => {
  // Sample data for existing events
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Introduction to React",
      description: "Learn the basics of React and component-based architecture",
      image: "https://example.com/react-image.jpg", // In a real app, this would be a File object
      learningItems: [
        "Understanding React components",
        "Working with state and props",
        "Component lifecycle methods",
      ],
      instructors: [
        {
          name: "John Smith",
          description: "Senior React Developer with 5 years of experience",
          jobRole: "Lead Frontend Developer",
        },
      ],
      startDateTime: "2025-04-15T10:00",
      endDateTime: "2025-04-15T16:00",
      targetingUsers: "all",
      venueMode: "Online",
      publish: true,
      paid: true,
      amount: "1500",
    },
    {
      id: 2,
      title: "Advanced JavaScript Patterns",
      description:
        "Deep dive into advanced JavaScript patterns and best practices",
      image: "https://example.com/js-patterns.jpg",
      learningItems: [
        "Advanced closure techniques",
        "Functional programming in JavaScript",
        "Performance optimization",
      ],
      instructors: [
        {
          name: "Jane Doe",
          description: "JavaScript expert and author",
          jobRole: "Senior JavaScript Consultant",
        },
      ],
      startDateTime: "2025-05-20T09:30",
      endDateTime: "2025-05-20T17:30",
      targetingUsers: "premium",
      venueMode: "Hybrid",
      publish: true,
      paid: true,
      amount: "2500",
    },
  ]);

  // State to track which event is being edited
  const [editingEvent, setEditingEvent] = useState(null);
  // State to control the visibility of the form
  const [showForm, setShowForm] = useState(false);
  // State to track if we're creating a new event
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  // Function to handle editing an event
  const handleEditEvent = (eventId) => {
    const eventToEdit = events.find((event) => event.id === eventId);
    if (eventToEdit) {
      setEditingEvent(eventToEdit);
      setShowForm(true);
      setIsCreatingNew(false);
    }
  };

  // Function to handle deleting an event
  const handleDeleteEvent = (eventId) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter((event) => event.id !== eventId));
    }
  };

  // Function to handle creating a new event
  const handleCreateNewEvent = () => {
    setEditingEvent(null);
    setShowForm(true);
    setIsCreatingNew(true);
  };

  // Function to handle the completion of the edit
  const handleEditComplete = (updatedEventData) => {
    if (isCreatingNew) {
      // Add new event with a generated ID
      const newEvent = {
        ...updatedEventData,
        id: Math.max(...events.map((e) => e.id), 0) + 1,
      };
      setEvents([...events, newEvent]);
    } else {
      // Update existing event
      setEvents(
        events.map((event) =>
          event.id === editingEvent.id
            ? { ...updatedEventData, id: event.id }
            : event
        )
      );
    }

    setShowForm(false);
    setEditingEvent(null);
    setIsCreatingNew(false);
  };

  return (
    <PageContainer>
      <PageHeader>Event Management</PageHeader>

      {showForm ? (
        <MultiStepForm
          editData={editingEvent}
          onEditComplete={handleEditComplete}
        />
      ) : (
        <>
          <CreateNewButton onClick={handleCreateNewEvent}>
            Create New Event
          </CreateNewButton>

          <EventsList>
            {events.map((event) => (
              <EventCard key={event.id}>
                <EventInfo>
                  <EventTitle>{event.title}</EventTitle>
                  <EventDescription>{event.description}</EventDescription>
                  <EventDateInfo>
                    <FormattedDate dateString={event.startDateTime} /> to{" "}
                    <FormattedDate dateString={event.endDateTime} />
                  </EventDateInfo>
                </EventInfo>
                <div>
                  <ActionButton onClick={() => handleEditEvent(event.id)}>
                    Edit
                  </ActionButton>
                  <DeleteButton onClick={() => handleDeleteEvent(event.id)}>
                    Delete
                  </DeleteButton>
                </div>
              </EventCard>
            ))}
          </EventsList>
        </>
      )}
    </PageContainer>
  );
};

export default EventManagementPage;
