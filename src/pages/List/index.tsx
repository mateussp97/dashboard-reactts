import React, { useMemo, useState, useEffect } from "react";
import styled from "styled-components";
//? Importando os components
import SelectInput from "./../../components/SelectInput/index";
import ContentHeader from "./../../components/ContentHeader/index";
import HistoryFinance from "./../../components/HistoryFinance/index";
//? Importando o Aray de objetos que serão listados
import gains from "../../repositories/gains";
import expenses from "../../repositories/expenses";
//? Importação das funções que formata o valor de string recebido para a moeda Real e a Data
import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";
import listOfMonths from "../../utils/months";
//? Importando a biblioteca do react UUID
import nextId from "react-id-generator";

interface IRoutParams {
  match: {
    params: {
      type: string;
    };
  };
}

interface IData {
  id: string;
  description: string;
  amountFormatted: string;
  frequency: string;
  dateFormatted: string;
  tagColor: string;
}

const List: React.FC<IRoutParams> = ({ match }) => {
  const [data, setData] = useState<IData[]>([]);
  const [monthSelected, setMonthSelected] = useState<String>(
    String(new Date().getMonth() + 1)
  );
  const [yearSelected, setYearSelected] = useState<String>(
    String(new Date().getFullYear())
  );
  const [selectedFrequency, setSelectedFrequency] = useState([
    "recorrente",
    "eventual",
  ]);

  //! Desestruturação
  const { type } = match.params;

  //! Mudança do 'title' de acordo com o path
  const params = useMemo(() => {
    return type === "entry-balance"
      ? { title: "Entradas", lineColor: "#f7931b" }
      : { title: "Saídas", lineColor: "#e44c4e" };
  }, [type]);

  //! O hook é usado para a verificação do type da lista que irá retornar
  const listData = useMemo(() => {
    return type === "entry-balance" ? gains : expenses;
  }, [type]);

  //! Só vai dar a opção de ano no filtro, de acordo com os anos encontrados na lista
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

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = selectedFrequency.findIndex(
      (item) => item === frequency
    );

    if (alreadySelected >= 0) {
      const filtered = selectedFrequency.filter((item) => item !== frequency);
      setSelectedFrequency(filtered);
    } else {
      setSelectedFrequency((prev) => [...prev, frequency]);
    }
  };

  useEffect(() => {
    const filteredDate = listData.filter((item) => {
      const date = new Date(item.date);
      const month = (date.getMonth() + 1).toString();
      const year = date.getFullYear().toString();

      return (
        month === monthSelected &&
        year === yearSelected &&
        selectedFrequency.includes(item.frequency)
      );
    });

    const formattedData = filteredDate.map((item) => {
      return {
        id: String(nextId()),
        description: item.description,
        amountFormatted: formatCurrency(Number(item.amount)),
        frequency: item.frequency,
        dateFormatted: formatDate(item.date),
        tagColor: item.frequency === "recorrente" ? "#4e41f0" : "#e44c4e",
      };
    });

    setData(formattedData);
  }, [monthSelected, yearSelected, listData, selectedFrequency]);

  return (
    <Container>
      <ContentHeader title={params.title} lineColor={params.lineColor}>
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
      <Filters>
        <button
          className={`tag-filter reccurrent ${
            selectedFrequency.includes("recorrente") && "tag-actived"
          }`}
          type="button"
          onClick={() => handleFrequencyClick("recorrente")}
        >
          Recorrentes
        </button>
        <button
          className={`tag-filter eventual ${
            selectedFrequency.includes("eventual") && "tag-actived"
          }`}
          type="button"
          onClick={() => handleFrequencyClick("eventual")}
        >
          Eventual
        </button>
      </Filters>
      <Content>
        {data.map((item) => (
          <HistoryFinance
            key={item.id}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.dateFormatted}
            amount={item.amountFormatted}
          />
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div``;

const Content = styled.div``;

const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;

  .tag-filter {
    border: none;
    background: none;
    color: ${(props) => props.theme.colors.white};
    padding: 0 1rem;
    font-size: 1.25rem;
    line-height: 1.8;
    font-weight: 300;
    opacity: 0.25;

    transition: all 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  .tag-filter.eventual {
    &::after {
      content: "";
      display: block;
      border-radius: 0.25rem;
      width: 4rem;
      margin: 0 auto;
      border-bottom: 1rem solid ${(props) => props.theme.colors.warning};
    }
  }

  .tag-actived {
    opacity: 1;
  }

  .tag-filter.reccurrent {
    &::after {
      content: "";
      display: block;
      border-radius: 0.25rem;
      width: 4rem;
      margin: 0 auto;
      border-bottom: 1rem solid ${(props) => props.theme.colors.success};
    }
  }
`;

export default List;
