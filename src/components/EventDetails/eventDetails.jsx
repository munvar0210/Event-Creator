import React, { useEffect, useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  FormContainer,
  FormHeading,
  FormGroup,
  Label,
  Input,
  DateTimeInput,
  Select,
  ButtonContainer,
  NextButton,
  BackButton,
  ErrorMessage,
} from "./eventDetailsStyles";

const EventDetails = ({ onNext, onBack, initialData, isEditMode = false }) => {
  // Use useMemo to avoid recreating defaultValues on each render
  const defaultValues = useMemo(
    () => ({
      startDateTime: "",
      endDateTime: "",
      targetingUsers: "",
      venueMode: "",
    }),
    []
  );

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: initialData || defaultValues,
    mode: "onChange",
  });

  // Reset form when initialData changes
  useEffect(() => {
    if (initialData) {
      reset({
        startDateTime: initialData.startDateTime || defaultValues.startDateTime,
        endDateTime: initialData.endDateTime || defaultValues.endDateTime,
        targetingUsers:
          initialData.targetingUsers || defaultValues.targetingUsers,
        venueMode: initialData.venueMode || defaultValues.venueMode,
      });
    }
  }, [
    initialData,
    reset,
    defaultValues.startDateTime,
    defaultValues.endDateTime,
    defaultValues.targetingUsers,
    defaultValues.venueMode,
  ]);

  const onSubmit = (data) => {
    if (isValid) {
      onNext(data);
    }
  };

  // Options for dropdowns
  const targetingOptions = useMemo(
    () => [
      { value: "", label: "Select targeting Users" },
      { value: "all", label: "All Users" },
      { value: "premium", label: "Premium Users" },
      { value: "new", label: "New Users" },
    ],
    []
  );

  const venueModeOptions = useMemo(
    () => [
      { value: "", label: "Select venue mode" },
      { value: "Online", label: "Online" },
      { value: "Offline", label: "Offline" },
      { value: "Hybrid", label: "Hybrid" },
    ],
    []
  );

  return (
    <FormContainer>
      <FormHeading>
        {isEditMode ? "Edit Event Details" : "Event Details"}
      </FormHeading>

      <FormGroup>
        <Label htmlFor="event-start-date-time">Start Date and Time *</Label>
        <Controller
          name="startDateTime"
          control={control}
          rules={{ required: "Start date and time is required" }}
          render={({ field }) => (
            <DateTimeInput
              {...field}
              type="datetime-local"
              id="event-start-date-time"
              value={field.value || ""}
            />
          )}
        />
        {errors.startDateTime && (
          <ErrorMessage>{errors.startDateTime.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="event-end-date-time">End Date and Time *</Label>
        <Controller
          name="endDateTime"
          control={control}
          rules={{
            required: "End date and time is required",
            validate: (value, formValues) =>
              !formValues.startDateTime ||
              !value ||
              new Date(value) > new Date(formValues.startDateTime) ||
              "End date must be after start date",
          }}
          render={({ field }) => (
            <DateTimeInput
              {...field}
              type="datetime-local"
              id="event-end-date-time"
              value={field.value || ""}
            />
          )}
        />
        {errors.endDateTime && (
          <ErrorMessage>{errors.endDateTime.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="event-targeting-users">Targeting Users *</Label>
        <Controller
          name="targetingUsers"
          control={control}
          rules={{ required: "Please select target users" }}
          render={({ field }) => (
            <Select
              {...field}
              id="event-targeting-users"
              value={field.value || ""}
            >
              {targetingOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          )}
        />
        {errors.targetingUsers && (
          <ErrorMessage>{errors.targetingUsers.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="event-venue-mode">Venue Mode *</Label>
        <Controller
          name="venueMode"
          control={control}
          rules={{ required: "Venue mode is required" }}
          render={({ field }) => (
            <Select {...field} id="event-venue-mode" value={field.value || ""}>
              {venueModeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          )}
        />
        {errors.venueMode && (
          <ErrorMessage>{errors.venueMode.message}</ErrorMessage>
        )}
      </FormGroup>

      <ButtonContainer>
        <BackButton type="button" onClick={onBack} aria-label="Go back">
          ← Back
        </BackButton>
        <NextButton
          type="button"
          onClick={handleSubmit(onSubmit)}
          aria-label="Continue to next step"
        >
          Next →
        </NextButton>
      </ButtonContainer>
    </FormContainer>
  );
};

export default EventDetails;
