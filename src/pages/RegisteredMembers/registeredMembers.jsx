import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUsers } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  SearchContainer,
  SearchInput,
  MembersHeader,
  UsersIcon,
  MembersCount,
  Table,
  TableHeader,
  TableRow,
  NameCell,
  EmailCell,
  PhoneCell,
  UserAvatar,
  UserInfo,
} from "./registeredMembersStyles";
import { membersData } from "../../data/registeredMembersData";

const RegisteredMembers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);

  const filteredMembers = membersData.filter((member) => {
    return (
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.phone.includes(searchTerm)
    );
  });

  return (
    <Container>
      <MembersHeader>
        <div>
          <UsersIcon>
            <FontAwesomeIcon icon={faUsers} />
          </UsersIcon>
          <MembersCount>
            {membersData.length} Members Registered for the Course
          </MembersCount>
        </div>
        <SearchContainer>
          <FontAwesomeIcon icon={faSearch} />
          <SearchInput
            type="text"
            placeholder="Search User"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>
      </MembersHeader>

      <Table>
        <thead>
          <TableHeader>
            <NameCell>Name</NameCell>
            <EmailCell>Email ID</EmailCell>
            <PhoneCell>Phone Number</PhoneCell>
          </TableHeader>
        </thead>
        <tbody>
          {filteredMembers.map((member, index) => (
            <TableRow
              key={index}
              $isSelected={selectedRow === index}
              onClick={() => setSelectedRow(index)}
            >
              <NameCell>
                <UserInfo>
                  <UserAvatar src={member.avatar} alt={member.name} />
                  {member.name}
                </UserInfo>
              </NameCell>
              <EmailCell>{member.email}</EmailCell>
              <PhoneCell>{member.phone}</PhoneCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default RegisteredMembers;
