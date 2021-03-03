import React, { useMemo, useState } from "react";
import styled from "styled-components";
//? Importando o Aray de objetos que serão listados
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import listOfMonths from "../../utils/months";
import WalletBox from "../../components/WalletBox";
import MessageBox from "./../../components/MessageBox/index";
import happy from "../../assets/happy.svg";
import sad from "../../assets/sad.svg";
import PieChartBox from "../../components/PieChartBox";

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

  //! Valores de saída
  const totalExepense = useMemo(() => {
    let total: number = 0;

    expenses.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (
        month.toString() === monthSelected &&
        year.toString() === yearSelected
      ) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error("Invalid amount.");
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  //! Valores de entrada
  const totalGains = useMemo(() => {
    let total: number = 0;

    gains.forEach((item) => {
      const date = new Date(item.date);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      if (
        month.toString() === monthSelected &&
        year.toString() === yearSelected
      ) {
        try {
          total += Number(item.amount);
        } catch {
          throw new Error("Invalid amount.");
        }
      }
    });

    return total;
  }, [monthSelected, yearSelected]);

  //! Saldo
  const totalBalance = useMemo(() => {
    return totalGains - totalExepense;
  }, [totalGains, totalExepense]);

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: "Que triste!",
        description: "Neste mês você gastou mais do que deveria.",
        icon: sad,
        footerText:
          "Verifique seus gastos e tente cortar algumas coisas desnecessárias.",
      };
    } else {
      return {
        title: "Muito bem!",
        description: "Sua carteira está positiva!",
        icon: happy,
        footerText: "Continue assim, considere investir o seu saldo.",
      };
    }
  }, [totalBalance]);

  const relationExpensesVersusGains = useMemo(() => {
    const total = totalGains + totalExepense;
    const percentGains = ((totalGains / total) * 100).toFixed(1);
    const percentExpenses = ((totalExepense / total) * 100).toFixed(1);

    const data = [
      {
        name: "Entradas",
        value: totalGains,
        percent: Number(percentGains),
        color: "#f7931b",
      },
      {
        name: "Saídas",
        value: totalExepense,
        percent: Number(percentExpenses),
        color: "#e44c4e",
      },
    ];

    return data;
  }, [totalGains, totalExepense]);

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
          amount={totalBalance}
          footerLabel="Atualizado com base na entradas e saídas"
          icon="dollar"
          color="#4e41f0"
        />

        <WalletBox
          title="Entradas"
          amount={totalGains}
          footerLabel="Atualizado com base na entradas e saídas"
          icon="arrowUp"
          color="#f7931b"
        />

        <WalletBox
          title="Saídas"
          amount={totalExepense}
          footerLabel="Atualizado com base na entradas e saídas"
          icon="arrowDown"
          color="#e44c4e"
        />
        <MessageBox
          title={message.title}
          description={message.description}
          icon={message.icon}
          footerText={message.footerText}
        />
        <PieChartBox data={relationExpensesVersusGains} />
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default Dashboard;
