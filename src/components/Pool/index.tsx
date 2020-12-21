import React from "react";
import { SwapSystem, Label } from "../Inputs";
import {Wrapper} from "../CreatePair";
import {SwapButton}
 from "../Buttons";
const Pool = () => {
        return(
            <SwapSystem>
                <Wrapper>
                    <SwapButton
                    isFullWidth={true}
                    size="md"
                    >
                       Join a Pool 
                    </SwapButton>    
                </Wrapper>
            </SwapSystem>
        )
}

export default Pool; 