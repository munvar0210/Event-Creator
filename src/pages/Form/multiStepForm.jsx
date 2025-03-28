import React, { useState, useEffect } from "react";
import MultiStepTabBar from "../../components/MultiStepTabBar/multiStepTabBar";
import BasicInformation from "../../components/BasicInformation/basicInformation";
import InstructorDetails from "../../components/InstructorDetails/instructorDetails";
import EventDetails from "../../components/EventDetails/eventDetails";
import PaymentInformation from "../../components/PaymentInformation/paymentInformation";
import { FormWrapper } from "./multiStepFormStyles";

const MultiStepForm = ({ editData = null, onEditComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  // Add steps array
  const steps = [
    "Basic Information",
    "Instructors Details",
    "Event Details",
    "Payment Information",
  ];

  // Initialize form with editData if provided
  useEffect(() => {
    if (editData) {
      setFormData(editData);
      setIsEditMode(true);
    } else {
      setFormData({});
      setIsEditMode(false);
    }
  }, [editData]);

  const handleNext = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (finalData) => {
    const completeFormData = { ...formData, ...finalData };

    if (isEditMode) {
      console.log("Form edited with data:", completeFormData);
      // Here you would typically update the data via your API
      alert("Form updated successfully!");

      // Call the onEditComplete callback if provided
      if (onEditComplete) {
        onEditComplete(completeFormData);
      }
    } else {
      console.log("Form submitted with data:", completeFormData);
      // Here you would typically send the data to your API
      alert("Form submitted successfully!");
    }

    // Reset form and go back to first step
    setFormData({});
    setCurrentStep(0);
    setIsFormSubmitted(true);
    setIsEditMode(false);
  };

  // Reset isFormSubmitted when starting a new form
  const handleStartNewForm = () => {
    setIsFormSubmitted(false);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <BasicInformation
            onNext={handleNext}
            onBack={handleBack}
            initialData={formData}
            isFormSubmitted={isFormSubmitted}
            onStartNewForm={handleStartNewForm}
            isEditMode={isEditMode}
          />
        );
      case 1:
        return (
          <InstructorDetails
            onNext={handleNext}
            onBack={handleBack}
            initialData={formData}
            isEditMode={isEditMode}
          />
        );
      case 2:
        return (
          <EventDetails
            onNext={handleNext}
            onBack={handleBack}
            initialData={formData}
            isEditMode={isEditMode}
          />
        );
      case 3:
        return (
          <PaymentInformation
            onSubmit={handleSubmit}
            onBack={handleBack}
            initialData={formData}
            isEditMode={isEditMode}
          />
        );
      default:
        return null;
    }
  };

  return (
    <FormWrapper>
      <MultiStepTabBar
        currentStep={currentStep}
        steps={steps}
        isEditMode={isEditMode}
      />
      {renderStep()}
    </FormWrapper>
  );
};

export default MultiStepForm;
