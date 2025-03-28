import React, { useEffect, useMemo } from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  FormContainer,
  FormHeading,
  InstructorContainer,
  FormGroup,
  Label,
  Input,
  TextArea,
  ButtonContainer,
  NextButton,
  BackButton,
  ErrorMessage,
  AddButton,
  RemoveButton,
  InstructorTitle,
} from "./instructorDetailsStyles";

const InstructorDetails = ({
  onNext,
  onBack,
  initialData,
  isEditMode = false,
}) => {
  // Define a single instructor object as default using useMemo
  const defaultInstructor = useMemo(
    () => ({
      name: "",
      description: "",
      jobRole: "",
    }),
    []
  );

  // Use useMemo to avoid recreating defaultValues on each render
  const defaultValues = useMemo(
    () => ({
      instructors: [defaultInstructor],
    }),
    [defaultInstructor]
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

  const { fields, append, remove } = useFieldArray({
    control,
    name: "instructors",
  });

  // Reset form when initialData changes
  useEffect(() => {
    if (initialData) {
      // If instructors array exists but is empty, add one instructor
      const instructorsToUse =
        initialData.instructors && initialData.instructors.length > 0
          ? initialData.instructors
          : [defaultInstructor];

      reset({
        ...initialData,
        instructors: instructorsToUse,
      });
    } else {
      // Ensure exactly one instructor is visible initially
      reset(defaultValues);
    }
  }, [initialData, reset, defaultValues, defaultInstructor]);

  const onSubmit = (data) => {
    if (isValid) {
      onNext(data);
    }
  };

  return (
    <FormContainer>
      <FormHeading>
        {isEditMode ? "Edit Instructor Details" : "Instructor Details"}
      </FormHeading>

      {fields.map((item, index) => (
        <InstructorContainer key={item.id}>
          <InstructorTitle>
            Instructor {index + 1} *
            {index > 0 && (
              <RemoveButton
                type="button"
                onClick={() => remove(index)}
                aria-label={`Remove instructor ${index + 1}`}
              >
                <FontAwesomeIcon icon={faTimes} />
              </RemoveButton>
            )}
          </InstructorTitle>

          <FormGroup>
            <Label htmlFor={`instructor-name-${index}`}>Name*</Label>
            <Controller
              name={`instructors.${index}.name`}
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  id={`instructor-name-${index}`}
                  placeholder="Enter name"
                  value={field.value || ""}
                />
              )}
            />
            {errors.instructors?.[index]?.name && (
              <ErrorMessage>
                {errors.instructors[index].name.message}
              </ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor={`instructor-description-${index}`}>
              Description *
            </Label>
            <Controller
              name={`instructors.${index}.description`}
              control={control}
              rules={{ required: "Description is required" }}
              render={({ field }) => (
                <TextArea
                  {...field}
                  id={`instructor-description-${index}`}
                  placeholder="Enter the description..."
                  value={field.value || ""}
                />
              )}
            />
            {errors.instructors?.[index]?.description && (
              <ErrorMessage>
                {errors.instructors[index].description.message}
              </ErrorMessage>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor={`instructor-job-role-${index}`}>Job Role *</Label>
            <Controller
              name={`instructors.${index}.jobRole`}
              control={control}
              rules={{ required: "Job Role is required" }}
              render={({ field }) => (
                <Input
                  {...field}
                  id={`instructor-job-role-${index}`}
                  placeholder="Enter Job Role"
                  value={field.value || ""}
                />
              )}
            />
            {errors.instructors?.[index]?.jobRole && (
              <ErrorMessage>
                {errors.instructors[index].jobRole.message}
              </ErrorMessage>
            )}
          </FormGroup>
        </InstructorContainer>
      ))}

      <AddButton
        type="button"
        onClick={() => append(defaultInstructor)}
        aria-label="Add instructor"
      >
        <FontAwesomeIcon icon={faPlus} /> Add
      </AddButton>

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

export default InstructorDetails;
