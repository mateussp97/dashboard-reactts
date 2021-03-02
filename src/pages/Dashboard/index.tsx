import React from "react";
import styled from "styled-components";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";

const Dashboard: React.FC = () => {
  const options = [
    {
      value: "Mateus",
      label: "Mateus",
    },
    {
      value: "Ana",
      label: "Ana",
    },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#f7931b">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

const Container = styled.div``;

export default Dashboard;
