import React from "react";
import { useHistory } from "react-router-dom";
import useSWR from "swr";

import { TARMRequestUseCase } from "../../../domain/usecases";
import { Button, Item, List, Name, Date, Table } from "./styles";

type Props = {
  useRequest: TARMRequestUseCase;
};

export const TARMRequestListScreen: React.FC<Props> = ({ useRequest }) => {
  const { data } = useSWR("tarm-requests", () => useRequest.get(), {
    refreshInterval: 5000,
  });

  const history = useHistory();

  if (!data) {
    return null;
  }

  if (data?.length === 0) {
    return null;
  }

  return (
    <List>
      <Table>
        <thead>
          <tr>
            <th>Identificador</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((request, index) => (
            <Item key={`request-${index}`}>
              <Name>{request.id}</Name>
              <Date>{request.createAt.toLocaleString()}</Date>
              <Button onClick={() => history.push("/request/" + request.id)}>
                Mais detalhes
              </Button>
            </Item>
          ))}
        </tbody>
      </Table>
    </List>
  );
};
