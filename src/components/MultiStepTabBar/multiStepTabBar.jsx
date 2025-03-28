import React, { useState, useEffect } from "react";
import {
  TabContainer,
  TabItem,
  TabLabel,
  TabLine,
  ActiveTabLine,
} from "./multiStepTabBarStyles";

const MultiStepTabBar = ({ currentStep, steps, isEditMode = false }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to insert line breaks after spaces for mobile view
  const formatStepLabel = (label) => {
    if (!isMobile || !label.includes(" ")) return label;

    const words = label.split(" ");
    return (
      <>
        {words[0]}
        <br />
        {words.slice(1).join(" ")}
      </>
    );
  };

  return (
    <TabContainer>
      <div
        style={{
          position: "absolute",
          top: "-30px",
          left: "0",
          fontWeight: "bold",
          color: "#4a90e2",
          display: isEditMode ? "block" : "none",
        }}
      >
        Edit Mode
      </div>

      {steps.map((step, index) => (
        <TabItem key={index}>
          <TabLabel
            $active={(currentStep === index).toString()}
            $completed={(index < currentStep).toString()}
          >
            {formatStepLabel(step)}
          </TabLabel>
          <TabLine>
            {(currentStep === index || index < currentStep) && (
              <ActiveTabLine $completed={(index < currentStep).toString()} />
            )}
          </TabLine>
        </TabItem>
      ))}
    </TabContainer>
  );
};

export default MultiStepTabBar;
