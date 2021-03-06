import React from "react";
import styled from "styled-components";

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
  defaultValue?: string | undefined;
}

const SelectInput: React.FC<ISelectInputProps> = ({
  options,
  onChange,
  defaultValue,
}) => (
  <Container>
    <select onChange={onChange} defaultValue={defaultValue}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </Container>
);

const Container = styled.div`
  > select {
    padding: 0.5rem 0.75rem;
    border: 0.25rem;
    outline: none;
  }

  &:first-child {
    margin-right: 1rem;
  }
`;

export default SelectInput;
