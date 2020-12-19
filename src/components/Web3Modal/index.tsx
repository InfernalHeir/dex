import React, { useState } from "react";
import { Modal, ModalOverlay ,ModalBody,ModalHeader, ModalContent, ModalFooter, ModalCloseButton,Button, useDisclosure,Center } from "@chakra-ui/react";
import styled from "styled-components";
import Logo from "../Logo";
import providers from "../../providers";
import {useWeb3React, UnsupportedChainIdError} from "@web3-react/core";
import {NoEthereumProviderError,UserRejectedRequestError as InjectedReject } from "@web3-react/injected-connector";
import {useEagerConnect,useInactiveListener} from "../../hook";
import DyanmicZone from "./DyanmicZone";


const ConnectStyledButton = styled(Button)`
font-size:16px!important;
color: white;
&: focus{
    box-shadow: none !important;
}
`;


const SpanWrapper = styled.button`
padding: 8px;
margin-top: 14px;
border-radius: 24px;
width: 100%;
cursor: pointer;
align-items: center;
border: 1px solid #4c464633;
display:flex;
flex-direction:row;
&: hover{
    border: 1px solid #222831;
}
&: focus{
    outline: none;
    background: #f2f2f2;
    border: 1px solid #4c464633;
}
`;

const CloseButton = styled(ModalCloseButton)`
font-size:20px;
color: #222831;
background: rgba(0, 0, 0, 0.06);
&: focus{
    box-shadow: none !important;
}
`;


const ShowError = styled.span`
color: #e62a2a;
font-weight: 800;
line-height: 2;
font-size: 16px;
`;


const Web3Modal = () => {
    
    const { connector, library, chainId, account, activate, deactivate, active, error } = useWeb3React();

    const [activatingConnector,setActivatingConnector] = useState<any>();
    
    React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector])

    const {isOpen,onOpen,onClose} = useDisclosure();
    
    
    return(
        <>
        <ConnectStyledButton size="sm" colorScheme="green" onClick={onOpen}>
            Connect
        </ConnectStyledButton>
            <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size="xs">
                <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>
                            Select wallet to continue this App
                            </ModalHeader>   
                        <CloseButton />
                            <ModalBody>
                                   {providers.map((value,index) => {
                                    const currentConnector = value.connector;
                                    const activating = currentConnector === activatingConnector;
                                    const connected = currentConnector === connector;
                                       return(
                                        <SpanWrapper key={index} onClick={
                                            () => {
                                                return(
                                                    activate(value.connector),
                                                    setActivatingConnector(value.connector)
                                                )
                                            }
                                        }>    
                                        <DyanmicZone 
                                        name={value.name}
                                        activated={activating}
                                        logo={value.logo}
                                        isConnected={connected}
                                        />
                                    </SpanWrapper>
                                       )
                                   })}

                               {error &&  (
                                           <ShowError>
                                              {error.message}  
                                            </ShowError>
                             )}     
                            </ModalBody>
                        

          <ModalFooter>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
    )
}

export default Web3Modal;