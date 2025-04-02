import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsPage from "./pages/Event/event";
import WorkshopRegistration from "./pages/EventDetails/eventDetails";
import MultiStepForm from "./pages/Form/multiStepForm";
import EventManagementPage from "./pages/EventManagement/eventManagement";
import RegisteredMembers from "./pages/RegisteredMembers/registeredMembers";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/event/:id" element={<WorkshopRegistration />} />
        <Route path="/form" element={<MultiStepForm />} />
        <Route path="/edit" element={<EventManagementPage />} />
        <Route path="/registered-members" element={<RegisteredMembers />} />
      </Routes>
    </Router>
  );
};

export default App;
