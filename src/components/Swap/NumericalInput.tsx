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
  border: 0.5px solid darkslateblue;
  border-right: 0;
`;

const Wrapper = styled.div`
  border-radius: 24px;
  background: #edf2f7a6;
  padding: 0.5rem;
  margin-top: 8px;
  margin-bottom: 8px;
`;

interface NumericalInputProps {
    title: string
}
const NumericalInput = ({title}: NumericalInputProps) => {
  return (
    <Wrapper>
      <AboveHeader>
        <Label>{title}</Label>
        <Label>balance 0</Label>
      </AboveHeader>

      <InputGroup size="md">
        <NumberInput
          width="100%"
          min={1}
          max={75}
          pattern="^[0-9]*[.,]?[0-9]*$"
          precision={6}
          allowMouseWheel={true}
        >
          <StyledInputFleid placeholder="Enter Amount" />
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
