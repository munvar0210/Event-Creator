import React from "react";
import {
  CardContainer,
  CardImage,
  StatusBadge,
  CardContent,
  EventTitle,
  EventDetails,
  EventInfo,
  DateLabel,
  EventDateText,
  RegistrationInfo,
  PriceTag,
  RegisterButton,
  SoldOutButton,
} from "./eventCardStyles";

const EventCard = ({ event }) => {
  const {
    id,
    title,
    date,
    time,
    endTime,
    price,
    status,
    seatsRemaining,
    imageUrl,
  } = event;

  const isSoldOut = seatsRemaining === 0;
  const isFree = price === null;
  const isPaid = price !== null;

  // Set badge status
  let badgeStatus = status;
  if (isPaid && !status) {
    badgeStatus = "paid";
  }

  // Truncate long titles
  const truncatedTitle =
    title.length > 40 ? `${title.substring(0, 40)}...` : title;

  return (
    <CardContainer>
      <CardImage $imageUrl={imageUrl}>
        <StatusBadge $status={badgeStatus} $isFree={isFree && !badgeStatus}>
          {badgeStatus === "paid"
            ? "Paid"
            : badgeStatus
            ? badgeStatus.charAt(0).toUpperCase() + badgeStatus.slice(1)
            : "Free"}
        </StatusBadge>
      </CardImage>

      <CardContent>
        <EventTitle>{truncatedTitle}</EventTitle>

        <EventDetails>
          <EventInfo>
            <DateLabel>Start Time :</DateLabel>
            <EventDateText>
              {date.split(",")[0]} {time} (IST)
            </EventDateText>
          </EventInfo>
          <EventInfo>
            <DateLabel>End Time :</DateLabel>
            <EventDateText>
              {date.split(",")[0]} {endTime} (IST)
            </EventDateText>
          </EventInfo>
        </EventDetails>

        <RegistrationInfo>
          <span>
            {isSoldOut
              ? "Event is full"
              : seatsRemaining === 0
              ? "0 people have registered"
              : `${seatsRemaining} people have registered`}
          </span>
          {isPaid && <PriceTag>Rs {price}/-</PriceTag>}
        </RegistrationInfo>

        {isSoldOut ? (
          <SoldOutButton to={`/event/${id}`} disabled>
            Sold Out
          </SoldOutButton>
        ) : (
          <RegisterButton to={`/event/${id}`}>Register Now</RegisterButton>
        )}
      </CardContent>
    </CardContainer>
  );
};

export default EventCard;
