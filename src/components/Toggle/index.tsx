import React from "react";
import styled from "styled-components";
//? Importando a biblioteca react-switch e sua 'interface' para que possamos estilizar do nosso jeito
import Switch, { ReactSwitchProps } from "react-switch";

interface IToggleProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}

const Toggle: React.FC<IToggleProps> = ({
  labelLeft,
  labelRight,
  checked,
  onChange,
}) => (
  <Container>
    <ToggleLabel>{labelLeft}</ToggleLabel>
    <ToggleSelector
      checked={checked}
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={onChange}
    />
    <ToggleLabel>{labelRight}</ToggleLabel>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ToggleLabel = styled.span`
  color: ${(props) => props.theme.colors.white};
`;

const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(({ theme }) => ({
  onColor: theme.colors.info,
  offColor: theme.colors.warning,
}))<ReactSwitchProps>`
  margin: 0 0.75rem;
`;

export default Toggle;
