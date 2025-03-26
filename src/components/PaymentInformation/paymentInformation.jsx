import React, { useState, useEffect } from "react";
import {
  FormContainer,
  FormHeading,
  ToggleGroup,
  ToggleLabel,
  ToggleSwitch,
  ToggleInput,
  ToggleSlider,
  FormGroup,
  Label,
  Input,
  PriceInputWrapper,
  ButtonContainer,
  BackButton,
  SaveButton,
  ErrorMessage,
} from "./paymentInformationStyles";

const PaymentInformation = ({ onSubmit, onBack, initialData }) => {
  // Initialize state values
  const [publishToggle, setPublishToggle] = useState(false);
  const [paidToggle, setPaidToggle] = useState(false);
  const [amount, setAmount] = useState(initialData?.amount || "2000");
  const [error, setError] = useState("");

  // Update state from initialData when component mounts or initialData changes
  // Update state only when initialData changes and is not null
  useEffect(() => {
    if (initialData) {
      setPublishToggle(
        initialData.publish !== undefined ? Boolean(initialData.publish) : false
      );
      setPaidToggle(
        initialData.paid !== undefined ? Boolean(initialData.paid) : false
      );
      setAmount(initialData.amount !== undefined ? initialData.amount : "2000");
    }
  }, [initialData]);

  // Form submission handler
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate amount if paid toggle is on
    if (paidToggle) {
      if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
        setError("Please enter a valid amount");
        return;
      }
    }

    setError("");

    const data = {
      publish: publishToggle,
      paid: paidToggle,
      amount: paidToggle ? amount : "0",
    };
    onSubmit(data);
  };

  // Create a switch component that handles both the input and slider click
  const ToggleWithClick = ({ id, checked, onChange }) => {
    return (
      <ToggleSwitch onClick={() => onChange(!checked)}>
        <ToggleInput
          type="checkbox"
          id={id}
          checked={checked}
          onChange={() => {}} // Empty handler since parent handles it
        />
        <ToggleSlider />
      </ToggleSwitch>
    );
  };

  // Handle amount change
  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, ""); // Allow only numbers and decimal
    setAmount(value);
    if (error) setError("");
  };

  return (
    <FormContainer onSubmit={handleFormSubmit}>
      <FormHeading>Payment Information</FormHeading>

      <ToggleGroup>
        <ToggleLabel htmlFor="event-publish">Publish</ToggleLabel>
        <ToggleWithClick
          id="event-publish"
          checked={publishToggle}
          onChange={setPublishToggle}
        />
      </ToggleGroup>

      <ToggleGroup>
        <ToggleLabel htmlFor="event-paid">Paid</ToggleLabel>
        <ToggleWithClick
          id="event-paid"
          checked={paidToggle}
          onChange={(value) => {
            setPaidToggle(value);
            if (!value) {
              setError("");
            }
          }}
        />
      </ToggleGroup>

      {paidToggle && (
        <FormGroup>
          <Label htmlFor="event-amount">Enter Amount *</Label>
          <PriceInputWrapper>
            <Input
              id="event-amount"
              type="text"
              value={amount}
              onChange={handleAmountChange}
              required
              placeholder="Enter amount..."
            />
          </PriceInputWrapper>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </FormGroup>
      )}

      <ButtonContainer>
        <BackButton type="button" onClick={onBack} aria-label="Go back">
          ← Back
        </BackButton>
        <SaveButton type="submit" aria-label="Save form">
          Save
        </SaveButton>
      </ButtonContainer>
    </FormContainer>
  );
};

export default PaymentInformation;
