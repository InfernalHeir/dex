import React from "react";
import styled from "styled-components";
import { Spinner } from "@chakra-ui/react"
import {useWeb3React} from "@web3-react/core";
import {TryAgain} from "../Buttons";

const ProviderLogo = styled.img`
width: 40px;
margin-right: 20px;
height: 40px;
`;

const ModalPara = styled.h3`
font-size: 18px;
color: #222831;
font-weight: 800;
text-transform: capitalize;
`;



const DyanmicZone = ({activated,logo,name,isConnected}) => {

    const {error} = useWeb3React();

    if(activated){
        return(
        <>
        {!!error ? (
             <>
             <ProviderLogo src={logo} alt={name} />
            <TryAgain>Try Again</TryAgain>
             </>   
        ) : (
            <>
            {  isConnected ? (
                <>
                <ProviderLogo src={logo} alt={name} />
                <TryAgain>Connected</TryAgain>
                </>
            ) : (
                <>
                <Spinner style={{marginRight: "20px"}} size="md" />
                <ModalPara>Initializing Request..</ModalPara>
                </>
            )
            }
            </>
        ) }
        
        </>
        );   
    }
    else{
         return(
         <>
         <ProviderLogo src={logo} alt={name} />
         <ModalPara>{name}</ModalPara>
         </>
         )  
    }
}

export default DyanmicZone;