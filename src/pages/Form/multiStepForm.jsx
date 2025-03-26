import React, { useState } from "react";
import MultiStepTabBar from "../../components/MultiStepTabBar/multiStepTabBar";
import BasicInformation from "../../components/BasicInformation/basicInformation";
import InstructorDetails from "../../components/InstructorDetails/instructorDetails";
import EventDetails from "../../components/EventDetails/eventDetails";
import PaymentInformation from "../../components/PaymentInformation/paymentInformation";
import { FormWrapper } from "./multiStepFormStyles";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const steps = [
    "Basic Information",
    "Instructors Details",
    "Event Details",
    "Payment Information",
  ];

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
    console.log("Form submitted with data:", completeFormData);
    // Here you would typically send the data to your API
    alert("Form submitted successfully!");

    // Reset form and go back to first step
    setFormData({});
    setCurrentStep(0);
    setIsFormSubmitted(true);
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
          />
        );
      case 1:
        return (
          <InstructorDetails
            onNext={handleNext}
            onBack={handleBack}
            initialData={formData}
          />
        );
      case 2:
        return (
          <EventDetails
            onNext={handleNext}
            onBack={handleBack}
            initialData={formData}
          />
        );
      case 3:
        return (
          <PaymentInformation
            onSubmit={handleSubmit}
            onBack={handleBack}
            initialData={formData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <FormWrapper>
      <MultiStepTabBar currentStep={currentStep} steps={steps} />
      {renderStep()}
    </FormWrapper>
  );
};

export default MultiStepForm;
