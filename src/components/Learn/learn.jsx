import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  LearnContainer,
  LearnHeader,
  TopicsList,
  TopicItem,
  CheckIcon,
  TopicText,
  TopicTitle,
} from "./learnStyles";
import { learningTopics } from "../../data/eventDetailsData";

const LearnComponent = () => {
  return (
    <LearnContainer>
      <LearnHeader>What You Will Learn</LearnHeader>
      <TopicsList>
        {learningTopics.map((topic, i) => (
          <TopicItem key={i}>
            <CheckIcon>
              <FontAwesomeIcon icon={faCheck} />
            </CheckIcon>
            <TopicText>
              <TopicTitle>{topic.title}</TopicTitle>
            </TopicText>
          </TopicItem>
        ))}
      </TopicsList>
    </LearnContainer>
  );
};

export default LearnComponent;
