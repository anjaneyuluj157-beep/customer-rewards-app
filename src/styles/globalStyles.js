import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const SectionCard = styled.div`
  background-color: white;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Heading = styled.h1`
  margin-bottom: 20px;
`;

export const SubHeading = styled.h2`
  margin-bottom: 15px;
`;

export const StyledButton = styled.button`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) =>
    props.active ? "#d3d3d3" : "#fff"};

  &:hover {
    background-color: #e6e6e6;
  }
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }
`;