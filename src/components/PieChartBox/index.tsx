import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import styled, { keyframes } from "styled-components";

interface ILegendProps {
  color: string;
}

interface IPieChartBoxProps {
  data: {
    name: string;
    value: number;
    percent: number;
    color: string;
  }[];
}

const PieChartBox: React.FC<IPieChartBoxProps> = ({ data }) => (
  <Container>
    <SideLeft>
      <Legends>
        <h1>Relação</h1>
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
        <PieChart>
          <Pie data={data} dataKey="percent">
            {data.map((indicator) => (
              <Cell key={indicator.name} fill={indicator.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);

const animate = keyframes`
  0% {
    transform: translateX(100px);
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

  padding: 1rem;
  margin: 2rem 0;

  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${animate} 0.5s;

  @media screen and (max-width: 1000px) {
    width: 100%;

    margin: 0;
  }
`;

const SideLeft = styled.aside``;

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

const SideRight = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 424px) {
    width: 56%;
  }
`;

export default PieChartBox;
