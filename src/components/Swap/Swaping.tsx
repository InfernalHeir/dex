import React from "react";
import { SwapSystem, Label } from "../Inputs";
import { MaxButton, SwapButton } from "../Buttons";
import styled from "styled-components";
import NumericalInput from "./NumericalInput";
import { BsArrowDown } from "react-icons/bs";

export const SwapIconShow = styled.div`
  display: flex;
  height: 1rem;
  justify-content: center;
  align-items: center;
`;

const Swaping = () => {
  return (
    <SwapSystem>
      <NumericalInput title="from" />
        <SwapIconShow>
            <BsArrowDown />
        </SwapIconShow>
      <NumericalInput title="to" />
      <SwapButton size="md" isFullWidth>
        Swap
      </SwapButton>
    </SwapSystem>
  );
};

export default Swaping;
