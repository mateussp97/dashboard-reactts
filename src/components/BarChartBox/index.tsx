import React from "react";
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from "recharts";
import styled, { keyframes } from "styled-components";
import formatCurrency from "./../../utils/formatCurrency";

interface IBarChartBoxProps {
  title: string;
  data: {
    name: string;
    amount: number;
    percent: number;
    color: string;
  }[];
}

interface ILegendProps {
  color: string;
}

const BarChartBox: React.FC<IBarChartBoxProps> = ({ data, title }) => (
  <Container>
    <SideLeft>
      <Legends>
        <h1>{title}</h1>
        {data.map((indicator) => (
          <Legend key={indicator.name} color={indicator.color}>
            <div>{indicator.percent}%</div>
            <span>{indicator.name}</span>
          </Legend>
        ))}
      </Legends>
    </SideLeft>
    <SideRight>
      <ResponsiveContainer>
        <BarChart data={data}>
          <Bar dataKey="amount" name="Valor">
            {data.map((indicator) => (
              <Cell fill={indicator.color} key={indicator.name} />
            ))}
          </Bar>
          <Tooltip
            cursor={{ fill: "none" }}
            formatter={(value: Number) => formatCurrency(Number(value))}
          />
        </BarChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);

const animate = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 48%;
  height: 280px;

  background: ${(props) => props.theme.colors.tertiary};
  color: ${(props) => props.theme.colors.white};

  border-radius: 0.25rem;

  padding: 1rem;
  margin: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  animation: ${animate} 0.5s;

  @media screen and (max-width: 1000px) {
    width: 100%;

    margin: 0 0 2rem;
  }
`;

const SideLeft = styled.div``;

const Legends = styled.ul`
  height: 200px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.secondary};
    border: 0.5rem;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.tertiary};
  }

  h1 {
    margin-bottom: 1rem;
  }
`;

const Legend = styled.li<ILegendProps>`
  display: flex;
  align-items: center;
  justify-content: start;

  margin-bottom: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 56px;
    height: 56px;

    font-size: 1.125rem;
    font-weight: 600;
    border-radius: 0.25rem;
    background: ${(props) => props.color};
    margin-right: 0.5rem;

    @media screen and (max-width: 424px) {
      width: 40px;
      height: 40px;

      font-size: 0.875rem;
    }
  }
`;

const SideRight = styled.div`
  flex: 1;
  width: 80%;
  height: 200px;

  padding: 0 4rem;

  @media screen and (max-width: 767px) {
    padding: 0 2rem;
  }
`;

export default BarChartBox;
