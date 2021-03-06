import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import styled from "styled-components";

import formatCurrency from "./../../utils/formatCurrency";

interface IHistoryBoxProps {
  data: {
    month: string;
    amountEntry: number;
    amountOutput: number;
  }[];
  lineColorAmountEntry: string;
  lineColorAmountOutput: string;
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
  data,
  lineColorAmountEntry,
  lineColorAmountOutput,
}) => (
  <Container>
    <h1>Histórico de Saldo</h1>
    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#cccccc" />
        <XAxis dataKey="month" stroke="#cccccc" />
        <Tooltip formatter={(value: Number) => formatCurrency(Number(value))} />
        <Line
          type="monotone"
          dataKey="amountEntry"
          name="Entradas"
          stroke={lineColorAmountEntry}
          strokeWidth={4}
          dot={{ r: 2 }}
          activeDot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="amountOutput"
          name="Saídas"
          stroke={lineColorAmountOutput}
          strokeWidth={4}
          dot={{ r: 2 }}
          activeDot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </Container>
);

const Container = styled.div`
  width: 100%;
  height: 340px;

  border-radius: 0.25rem;

  background: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};

  padding: 1rem 1rem 2rem 1rem;

  @media screen and (max-width: 1000px) {
    margin: 2rem 0;
  }
`;

export default HistoryBox;
