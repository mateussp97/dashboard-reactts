import React, { useMemo } from "react";
import styled from "styled-components";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import HistoryFinance from "./../../components/HistoryFinance/index";

interface IRoutParams {
  match: {
    params: {
      type: string;
    };
  };
}

const List: React.FC<IRoutParams> = ({ match }) => {
  //! Desestruturação
  const { type } = match.params;

  //! Mudança do 'title' de acordo com o path
  const params = useMemo(() => {
    return type === "entry-balance"
      ? { title: "Entradas", lineColor: "#f7931b" }
      : { title: "Saídas", lineColor: "#e44c4e" };
  }, [type]);

  const months = [
    {
      value: 7,
      label: "Julho",
    },
    {
      value: 8,
      label: "Agosto",
    },
    {
      value: 9,
      label: "Setembro",
    },
  ];
  const years = [
    {
      value: 2020,
      label: 2020,
    },
    {
      value: 2021,
      label: 2021,
    },
    {
      value: 2022,
      label: 2022,
    },
  ];

  return (
    <Container>
      <ContentHeader title={params.title} lineColor={params.lineColor}>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>
      <Filters>
        <button className="tag-filter reccurrent" type="button">
          Recorrentes
        </button>
        <button className="tag-filter eventual" type="button">
          Eventual
        </button>
      </Filters>
      <Content>
        <HistoryFinance
          tagColor="#e44c4e"
          title="Conta de luz"
          subtitle="27/07/2020"
          amount="R$ 130,00"
        />
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
      border-bottom: 1rem solid ${(props) => props.theme.colors.success};
    }
  }

  .tag-filter.reccurrent {
    &::after {
      content: "";
      display: block;
      border-radius: 0.25rem;
      width: 4rem;
      margin: 0 auto;
      border-bottom: 1rem solid ${(props) => props.theme.colors.warning};
    }
  }
`;

export default List;
