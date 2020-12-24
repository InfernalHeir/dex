import React,{Fragment, useState} from "react";
import {useWeb3React} from "@web3-react/core";
import styled from "styled-components";
import providers from "../../providers";
import DyanmicZone from "../Web3Modal/DyanmicZone";

const ProviderWrapper = styled.button`
padding: 12px;
margin-top: 14px;
border-radius: 24px;
width: 100%;
cursor: pointer;
align-items: center;
border: 1px solid #4c464633;
display:flex;
flex-direction:row;
`;




const WalletModal = () => {
      
    const { connector, library, chainId, account, activate, deactivate, active, error } = useWeb3React();

    const [activatingConnector,setActivatingConnector] = useState<any>();
    
    React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
   }, [activatingConnector, connector]);

     return(
        <Fragment>
        {providers.map((value,index) => {
         const currentConnector = value.connector;
         const activating = currentConnector === activatingConnector;
         const connected = currentConnector === connector;
            return(
             <ProviderWrapper key={index} onClick={
                 () => {
                     return(
                         activate(value.connector),
                         setActivatingConnector(value.connector)
                     )
                 }
             }>    
             <DyanmicZone 
             name={value.name}
             activating={activating}
             logo={value.logo}
             isConnected={connected}
             />
         </ProviderWrapper>
            )
        })}    
 </Fragment>
    )  
}

export default WalletModal;
