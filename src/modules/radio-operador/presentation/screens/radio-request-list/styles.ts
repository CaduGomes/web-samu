import styled from "styled-components";

export const List = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  border-radius: 2px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  table-layout: fixed;

  th {
    position: sticky;
    top: 2px;
  }

  th,
  td {
    padding: 16px;
    text-align: left;
  }
  th {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }

  th:nth-child(1) {
    width: 45%;
  }
  th:nth-child(2) {
    width: 30%;
  }
  th:nth-child(3) {
    width: 20%;
  }

  td {
    margin: 0px;
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 900px) {
    td {
      font-size: 12px;
    }
    th {
      font-size: 13px;
    }

    th:nth-child(1) {
      width: 30%;
    }
    th:nth-child(2) {
      width: 25%;
    }
    th:nth-child(3) {
      width: 25%;
    }
    th:nth-child(4) {
      width: 20%;
    }
  }

  @media (max-width: 900px) {
    td {
      font-size: 10px;
    }
    th {
      font-size: 11px;
    }
  }
`;

export const Item = styled.tr`
  width: 100%;
  background-color: #fcfcfc;
  height: 50px;
  margin-bottom: 20px;
`;

export const Name = styled.td`
  padding-right: 10%;
`;

export const Date = styled.td``;

export const Button = styled.td`
  cursor: pointer;
  padding: 0 !important;
  text-align: center !important;
  transition: 0.4s ease-in-out;

  :hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;
