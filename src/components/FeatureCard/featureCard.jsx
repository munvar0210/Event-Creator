import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  CardContainer,
  IconContainer,
  CardTitle,
  CardDescription,
} from "./featureCardStyles";

const FeatureCard = ({ icon, title, description, color, index = 0 }) => {
  return (
    <CardContainer color={color} $index={index}>
      <IconContainer color={color}>
        <FontAwesomeIcon icon={icon} />
      </IconContainer>
      <CardTitle color={color}>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default FeatureCard;
