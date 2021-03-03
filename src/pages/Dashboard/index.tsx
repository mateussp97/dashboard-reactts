import React, { useMemo, useState } from "react";
import styled from "styled-components";
//? Importando o Aray de objetos que serão listados
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import listOfMonths from "../../utils/months";
import WalletBox from "../../components/WalletBox";

interface IRoutParams {
  match: {
    params: {
      type: string;
    };
  };
}

const Dashboard: React.FC<IRoutParams> = ({ match }) => {
  const [monthSelected, setMonthSelected] = useState<String>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<String>(
    String(new Date().getFullYear())
  );

  //! Desestruturação
  const { type } = match.params;

  //! Mudança do 'title' de acordo com o path
  const params = useMemo(() => {
    return type === "entry-balance"
      ? { title: "Entradas", lineColor: "#f7931b" }
      : { title: "Saídas", lineColor: "#e44c4e" };
  }, [type]);

  const listData = useMemo(() => {
    return type === "entry-balance" ? gains : expenses;
  }, [type]);

  const years = useMemo(() => {
    let uniqueYears: number[] = [];

    listData.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year);
      }
    });

    return uniqueYears.map((year) => {
      return {
        value: year,
        label: year,
      };
    });
  }, [listData]);

  const months = useMemo(() => {
    return listOfMonths.map((month, index) => {
      return {
        value: index + 1,
        label: month,
      };
    });
  }, []);

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput
          options={months}
          onChange={(e) => setMonthSelected(e.target.value)}
          defaultValue={monthSelected.toString()}
        />
        <SelectInput
          options={years}
          onChange={(e) => setYearSelected(e.target.value)}
          defaultValue={yearSelected.toString()}
        />
      </ContentHeader>
      <Content>
        <WalletBox
          title="Saldo"
          amount={150.0}
          footerLabel="Atualizado com base na entradas e saídas"
          icon="dollar"
          color="#4e41f0"
        />

        <WalletBox
          title="Entradas"
          amount={5000.0}
          footerLabel="Atualizado com base na entradas e saídas"
          icon="arrowUp"
          color="#f7931b"
        />

        <WalletBox
          title="Saídas"
          amount={485.0}
          footerLabel="Atualizado com base na entradas e saídas"
          icon="arrowDown"
          color="#e44c4e"
        />
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Dashboard;
