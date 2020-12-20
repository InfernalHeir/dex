import React from "react";
import {SwapSystem ,Label,Input} from "../Inputs";
import {MaxButton} from "../Buttons";

const Swaping = () => {
    return(
        <SwapSystem> 
                <Label>trade amount</Label>
                    <div style={{position: 'relative'}}>
                        <Input type="number" placeholder="0.00 ETH" />
                        <MaxButton>Max</MaxButton>
                    </div>   
        </SwapSystem>
    )
}

export default Swaping;