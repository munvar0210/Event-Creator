// import styled, { keyframes } from "styled-components";

// const breakpoints = {
//   mobile: "480px",
//   tablet: "768px",
//   laptop: "1024px",
// };

// const slideIn = keyframes`
//   from {
//     width: 0;
//   }
//   to {
//     width: 100%;
//   }
// `;

// export const TabContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 40px;
//   width: 100%;
//   box-sizing: border-box;

//   @media (max-width: ${breakpoints.tablet}) and (min-width: ${breakpoints.mobile}) {
//     flex-wrap: wrap;
//     justify-content: flex-start;
//     margin-bottom: 30px;
//   }

//   @media (max-width: ${breakpoints.mobile}) {
//     margin-bottom: 20px;
//   }
// `;

// export const TabItem = styled.div`
//   flex: 1;
//   text-align: left;
//   position: relative;
//   padding: 0 5px;
//   box-sizing: border-box;

//   @media (max-width: ${breakpoints.tablet}) and (min-width: ${breakpoints.mobile}) {
//     flex: 0 0 50%;
//     margin-bottom: 15px;
//     padding: 0 10px;
//   }

//   @media (max-width: ${breakpoints.mobile}) {
//     flex: 1;
//     margin-bottom: 12px;
//     padding: 0 2px;
//   }
// `;

// export const TabLabel = styled.div`
//   font-size: 16px;
//   font-weight: ${(props) =>
//     props.$active === "true" || props.$completed === "true"
//       ? "bold"
//       : "normal"};
//   color: ${(props) => {
//     if (props.$active === "true") return "#333";
//     if (props.$completed === "true") return "#333";
//     return "#999";
//   }};
//   margin-bottom: 10px;
//   transition: all 0.3s ease;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;

//   @media (max-width: ${breakpoints.tablet}) {
//     font-size: 15px;
//     white-space: wrap;
//   }

//   @media (max-width: ${breakpoints.mobile}) {
//     font-size: 12px;
//     margin-bottom: 8px;
//     white-space: pre-wrap;
//     overflow: visible;
//     text-overflow: clip;
//     padding: 0;
//     word-break: normal;
//     line-height: 1.2;
//   }
// `;

// export const TabLine = styled.div`
//   height: 4px;
//   background-color: #e0e0e0;
//   position: relative;
//   border-radius: 2px;
//   overflow: hidden;

//   @media (max-width: ${breakpoints.mobile}) {
//     height: 3px;
//   }
// `;

// export const ActiveTabLine = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
//   background-color: ${(props) =>
//     props.$completed === "true" ? "#ff3a5c" : "#ff3a5c"};
//   animation: ${slideIn} 0.5s ease;
//   border-radius: 2px;
// `;

import styled, { keyframes } from "styled-components";

// Define breakpoints for responsive design
const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  laptop: "1024px",
};

export const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: nowrap;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 30px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 20px;
  }
`;

export const TabItem = styled.div`
  flex: 1;
  text-align: left;
  position: relative;
  padding: 0 5px;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 4px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 12px;
    padding: 0 2px;
  }
`;

export const TabLabel = styled.div`
  font-size: 16px;
  font-weight: ${(props) =>
    props.$active === "true" || props.$completed === "true"
      ? "bold"
      : "normal"};
  color: ${(props) => {
    if (props.$active === "true") return "#333";
    if (props.$completed === "true") return "#333";
    return "#999";
  }};
  margin-bottom: 10px;
  transition: all 0.3s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 15px;
    white-space: normal;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
    margin-bottom: 8px;
    white-space: pre-wrap;
    overflow: visible;
    text-overflow: clip;
    padding: 0;
    word-break: normal;
    line-height: 1.2;
  }
`;

export const TabLine = styled.div`
  height: 4px;
  background-color: #e0e0e0;
  position: relative;
  border-radius: 2px;
  overflow: hidden;

  @media (max-width: ${breakpoints.mobile}) {
    height: 3px;
  }
`;

const slideIn = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

export const ActiveTabLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: ${(props) =>
    props.$completed === "true" ? "#ff3a5c" : "#ff3a5c"};
  animation: ${slideIn} 0.5s ease;
  border-radius: 2px;
`;
