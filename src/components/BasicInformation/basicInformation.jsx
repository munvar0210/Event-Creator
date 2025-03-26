import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUploadAlt,
  faPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  FormContainer,
  FormHeading,
  FormGroup,
  StyledLabel,
  Input,
  TextArea,
  ImageUploadContainer,
  UploadIcon,
  UploadText,
  UploadNote,
  ButtonContainer,
  NextButton,
  BackButton,
  ErrorMessage,
  SectionHeading,
  LearningItemContainer,
  InputContainer,
  InputRemoveButton,
  RemoveIconButton,
  StyledAddButton,
  ImagePreviewContainer,
  ImageWrapper,
  ImagePreview,
  DeleteImageButton,
} from "./basicInformationStyles";

const BasicInformation = ({
  onNext,
  onBack,
  initialData,
  isFormSubmitted,
  onStartNewForm,
}) => {
  // Instead of useFieldArray, use a simpler approach with direct state management
  const [learningItems, setLearningItems] = useState([""]);
  const [showErrors, setShowErrors] = useState(false);

  // Use useMemo to create defaultValues to avoid recreation on each render
  const defaultValues = useMemo(
    () => ({
      title: "",
      description: "",
      image: null,
    }),
    []
  );

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    reset,
    watch,
  } = useForm({
    defaultValues: initialData || defaultValues,
    mode: "onChange",
  });

  // Reset form when initialData changes or when form is submitted
  useEffect(() => {
    if (isFormSubmitted) {
      reset(defaultValues);
      setLearningItems([""]);
      setShowErrors(false);
      if (onStartNewForm) onStartNewForm();
    } else if (initialData) {
      reset({
        title: initialData.title || defaultValues.title,
        description: initialData.description || defaultValues.description,
        image: initialData.image || defaultValues.image,
      });
      setLearningItems(initialData.learningItems || [""]);
    }
  }, [initialData, reset, isFormSubmitted, onStartNewForm, defaultValues]);

  // Watch image value to ensure consistent state
  const imageValue = watch("image");

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        setValue("image", acceptedFiles[0], { shouldValidate: true });
      }
    },
    [setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    maxSize: 2097152,
  });

  // Function to add a new learning item
  const addLearningItem = () => {
    setLearningItems([...learningItems, ""]);
  };

  // Function to remove a learning item
  const removeLearningItem = (indexToRemove) => {
    setLearningItems(
      learningItems.filter((_, index) => index !== indexToRemove)
    );
  };

  // Function to update a learning item
  const updateLearningItem = (index, value) => {
    const newItems = [...learningItems];
    newItems[index] = value;
    setLearningItems(newItems);
  };

  const onSubmit = (data) => {
    const formData = {
      ...data,
      learningItems,
    };

    // Validate learning items
    const allItemsValid = learningItems.every((item) => item.trim() !== "");

    if (isValid && allItemsValid) {
      onNext(formData);
    } else {
      setShowErrors(true);
    }
  };

  return (
    <FormContainer>
      <FormHeading>Basic Information</FormHeading>

      <FormGroup>
        <StyledLabel htmlFor="event-image">Image *</StyledLabel>
        <Controller
          name="image"
          control={control}
          rules={{ required: "Image is required" }}
          render={({ field }) => (
            <>
              {!imageValue ? (
                <ImageUploadContainer
                  {...getRootProps()}
                  $active={isDragActive.toString()}
                >
                  <input
                    {...getInputProps()}
                    id="event-image"
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        field.onChange(e.target.files[0]);
                      }
                    }}
                  />
                  <UploadIcon>
                    <FontAwesomeIcon icon={faCloudUploadAlt} />
                  </UploadIcon>
                  <UploadText>Drag & Drop Image</UploadText>
                  <UploadNote>(Image size should be less than 2mb)</UploadNote>
                </ImageUploadContainer>
              ) : (
                <ImagePreviewContainer>
                  <ImageWrapper>
                    <ImagePreview
                      src={URL.createObjectURL(imageValue)}
                      alt="Preview"
                    />
                    <DeleteImageButton
                      type="button"
                      onClick={() => {
                        field.onChange(null);
                      }}
                      aria-label="Remove image"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </DeleteImageButton>
                  </ImageWrapper>
                </ImagePreviewContainer>
              )}
            </>
          )}
        />
        {errors.image && <ErrorMessage>{errors.image.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <StyledLabel htmlFor="event-title">Title *</StyledLabel>
        <Controller
          name="title"
          control={control}
          rules={{ required: "Title is required" }}
          render={({ field }) => (
            <Input
              {...field}
              id="event-title"
              placeholder="Enter the title..."
              value={field.value || ""}
            />
          )}
        />
        {errors.title && <ErrorMessage>{errors.title.message}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <StyledLabel htmlFor="event-description">Description *</StyledLabel>
        <Controller
          name="description"
          control={control}
          rules={{ required: "Description is required" }}
          render={({ field }) => (
            <TextArea
              {...field}
              id="event-description"
              placeholder="Enter the description..."
              value={field.value || ""}
            />
          )}
        />
        {errors.description && (
          <ErrorMessage>{errors.description.message}</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <SectionHeading>What User will Learn *</SectionHeading>
        {learningItems.map((item, index) => (
          <LearningItemContainer key={index}>
            <StyledLabel htmlFor={`learning-item-${index}`}>
              List Item {index + 1} *
            </StyledLabel>
            <InputContainer>
              <Input
                id={`learning-item-${index}`}
                value={item}
                onChange={(e) => updateLearningItem(index, e.target.value)}
                placeholder="Enter what users will learn..."
              />
              {index > 0 && (
                <InputRemoveButton>
                  <RemoveIconButton
                    type="button"
                    onClick={() => removeLearningItem(index)}
                    aria-label={`Remove learning item ${index}`}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </RemoveIconButton>
                </InputRemoveButton>
              )}
            </InputContainer>
            {showErrors && !item.trim() && (
              <ErrorMessage>Learning item is required</ErrorMessage>
            )}
          </LearningItemContainer>
        ))}
        <StyledAddButton
          type="button"
          onClick={addLearningItem}
          aria-label="Add learning item"
        >
          <FontAwesomeIcon icon={faPlus} /> Add
        </StyledAddButton>
      </FormGroup>

      <ButtonContainer>
        <BackButton type="button" onClick={onBack}>
          ← Back
        </BackButton>
        <NextButton type="button" onClick={handleSubmit(onSubmit)}>
          Next →
        </NextButton>
      </ButtonContainer>
    </FormContainer>
  );
};

export default BasicInformation;
