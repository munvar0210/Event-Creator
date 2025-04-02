import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease;
`;

export const MembersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #f9f9f9;
  border-bottom: 1px solid #e0e0e0;

  div {
    display: flex;
    align-items: center;
  }
`;

export const UsersIcon = styled.span`
  margin-right: 10px;
  color: #666;
  font-size: 1.2rem;
`;

export const MembersCount = styled.span`
  font-size: 16px;
  color: rgb(116, 116, 116);
  font-weight: 500;
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: 10px;
    color: #aaa;
  }
`;

export const SearchInput = styled.input`
  padding: 8px 10px 8px 30px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  width: 220px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.tr`
  background-color: #f9f9f9;
  font-weight: 600;
  border-bottom: 1px solid #e0e0e0;
  text-align: left;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #e0e0e0;
  background-color: ${(props) => (props.$isSelected ? "#e9f5ff" : "#ffffff")};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f8ff;
    cursor: pointer;
  }

  &:active {
    animation: ${pulse} 0.3s ease;
  }
`;

export const NameCell = styled.td`
  padding: 15px;
  width: 35%;
`;

export const EmailCell = styled.td`
  padding: 15px;
  width: 35%;
  color: #555;
`;

export const PhoneCell = styled.td`
  padding: 15px;
  width: 30%;
  color: #555;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 15px;
  object-fit: cover;
  border: 2px solid #f0f0f0;
  transition: transform 0.3s ease, border-color 0.3s ease;

  ${TableRow}:hover & {
    transform: scale(1.1);
    border-color: #4a90e2;
  }
`;
