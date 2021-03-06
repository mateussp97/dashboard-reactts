import React from "react";
import styled from "styled-components";
import arrowDown from "../../assets/arrow-down.svg";
import arrowUp from "../../assets/arrow-up.svg";
import dollar from "../../assets/dollar.svg";
import CountUp from "react-countup";

interface IWalletBoxProps {
  title: string;
  amount: number;
  footerLabel: string;
  icon: "arrowDown" | "arrowUp" | "dollar";
  color: string;
}

interface IContainerProps {
  color: string;
}

const WalletBox: React.FC<IWalletBoxProps> = ({
  title,
  amount,
  footerLabel,
  icon,
  color,
}) => {
  const iconSelected = () => {
    switch (icon) {
      case "dollar":
        return dollar;
      case "arrowUp":
        return arrowUp;
      case "arrowDown":
        return arrowDown;
      default:
        return undefined;
    }
  };

  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>
        <CountUp
          end={amount}
          prefix={"R$ "}
          separator="."
          decimal=","
          decimals={2}
          preserveValue={true}
        />
      </h1>
      <small>{footerLabel}</small>
      <img src={iconSelected()} alt={title} />
    </Container>
  );
};

const Container = styled.div<IContainerProps>`
  width: 32%;
  height: 176px;

  background: ${(props) => props.color};
  color: ${(props) => props.theme.colors.white};
  border-radius: 0.25rem;
  padding: 1rem;
  overflow: hidden;

  position: relative;

  > img {
    position: absolute;
    bottom: -1.5rem;
    right: -1.5rem;
    opacity: 0.3;
    height: 110%;
  }

  > span {
    font-size: 1.125rem;
    font-weight: 500;
  }

  > small {
    font-size: 0.675rem;
    position: absolute;
    bottom: 1rem;
  }

  @media screen and (max-width: 1000px) {
    h1 {
      font-size: 1.25rem;
    }
  }

  @media screen and (max-width: 767px) {
    h1 {
      font-size: 1.75rem;
    }

    width: 100%;

    &:nth-child(2) {
      margin: 2rem 0;
    }
  }
`;

export default WalletBox;
