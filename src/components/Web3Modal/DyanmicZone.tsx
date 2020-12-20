import React from "react";
import styled from "styled-components";
import { Spinner } from "@chakra-ui/react"

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



const DyanmicZone = ({activating,logo,name,isConnected}) => {
    if(activating){
        return(
             <React.Fragment>
                <Spinner style={{marginRight: "20px"}} size="md" />
                <ModalPara>Initializing Request..</ModalPara>
            </React.Fragment>
        );   
    }
    else{
         return(
         <React.Fragment>
            <ProviderLogo src={logo} alt={name} />
            <ModalPara>{name}</ModalPara>
         </React.Fragment>
         )  
    }
}

export default DyanmicZone;