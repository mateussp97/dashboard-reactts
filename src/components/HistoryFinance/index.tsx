import React from "react";
import { Container, Tag } from "./styles";

interface IHistoryFinanceProps {
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

const HistoryFinance: React.FC<IHistoryFinanceProps> = ({
  tagColor,
  title,
  subtitle,
  amount,
}) => {
  return (
    <Container>
      <Tag color={tagColor} />
      <div>
        <span>
          {title}
          <small>{subtitle}</small>
        </span>
      </div>
      <h3>{amount}</h3>
    </Container>
  );
};

export default HistoryFinance;
