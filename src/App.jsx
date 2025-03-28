import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventsPage from "./pages/Event/event";
import WorkshopRegistration from "./pages/EventDetails/eventDetails";
import MultiStepForm from "./pages/Form/multiStepForm";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/event/:id" element={<WorkshopRegistration />} />
        <Route path="/form" element={<MultiStepForm />} />
      </Routes>
    </Router>
  );
};

export default App;
