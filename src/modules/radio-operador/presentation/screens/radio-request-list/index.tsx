import React from "react";
import useSWR from "swr";
import { Button, Date, Item, List, Name, Table } from "./styles";
import { RadioRequestUseCase } from "../../../domain/usecases";
import { useHistory } from "react-router-dom";

type Props = {
  useRequest: RadioRequestUseCase;
};

export const RadioRequestListScreen: React.FC<Props> = ({ useRequest }) => {
  const { data } = useSWR("radio-requests", () => useRequest.get(), {
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
