import React, { Fragment } from "react";
import {
  NumberInput,
  InputGroup,
  NumberInputField,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import styled from "styled-components";
import { Label } from "../Inputs";
import { TokenListButton } from "../Buttons";

const AboveHeader = styled.div`
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
`;

const StyledInputFleid = styled(NumberInputField)`
  width: 100%;
  border-radius: 8px;
  &: focus{
    border: none!important;
    box-shadow: none !important;
  }
`;

const Wrapper = styled.div`
  border-radius: 24px;
  padding: 0.1rem;
  margin-top: 8px;
  margin-bottom: 8px;
  box-shadow: 0 10px 40px 0 rgba(21,55,156,.06);
`;

interface NumericalInputProps {
    title: string
}
const NumericalInput = ({title}: NumericalInputProps) => {
  return (
    <Wrapper>
      <AboveHeader>
        <Label>{title}</Label>
        <Label>available balance 0</Label>
      </AboveHeader>

      <InputGroup size="xs">
        <NumberInput
          width="100%"
          min={1}
          max={75}
          pattern="^[0-9]*[.,]?[0-9]*$"
          precision={6}
          allowMouseWheel={true}
        >
          <StyledInputFleid 
          placeholder="0.00" 
          border="none"
          fontSize="20px"
          fontWeight={900}
          padding="0.5rem"
          inputMode="decimal"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm">
              ETH
            </Button>
          </InputRightElement>
        </NumberInput>
      </InputGroup>
    </Wrapper>
  );
};

export default NumericalInput;
