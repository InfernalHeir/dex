import React, { useEffect, useState } from "react";
import { Modal, ModalOverlay ,ModalBody,ModalHeader, ModalContent, ModalFooter, ModalCloseButton,Button, useDisclosure,Center } from "@chakra-ui/react";
import styled from "styled-components";
import Logo from "../Logo";
import providers from "../../providers";
import {useWeb3React, UnsupportedChainIdError} from "@web3-react/core";
import {NoEthereumProviderError,UserRejectedRequestError as InjectedReject } from "@web3-react/injected-connector";
import {useEagerConnect,useInactiveListener} from "../../hook";
import DyanmicZone from "./DyanmicZone";
import {useSelector,useDispatch
} from "react-redux";
import {BiHelpCircle} from "react-icons/bi"



const StyledModal = styled(Modal)`
border-radius: 24px !important;
`;

const StyledChakraBody = styled(ModalBody)`
background: #f9f9f9 !important;
`;

const SpanWrapper = styled.button`
padding: 12px;
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
color: darkslateblue;
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

const StyledModalHeader = styled(ModalHeader)`
font-size: 16px !important;
color: darkslateblue !important;
padding-top:15px !important;
padding-bottom:15px !important;
`;

const Tag = styled.div`
padding: 0.5rem;
padding: 0.5rem;
font-size: 16px;
font-weight: 800;
color: darkslateblue;
display:flex;
align-items:center;
`;

const Footer = styled(ModalFooter)`
padding-top:0 !important;
justify-content: left !important;
`;

const Web3Modal = () => {
    
    const { connector, library, chainId, account, activate, deactivate, active, error } = useWeb3React();

    const [activatingConnector,setActivatingConnector] = useState<any>();
    
    React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined)
    }
  }, [activatingConnector, connector]);

  const modalSelector = useSelector(({modal})=> {
        return modal;
  })
  
  const modalDispatcher = useDispatch();
  
  const onClose = () => {
    modalDispatcher({
        type: "CLOSE",
        payload:{
            isOpen: false
        }
    })
  }
    return(
        <React.Fragment>
            <Modal 
            closeOnOverlayClick={false} 
            isOpen={modalSelector.isOpen} 
            onClose={onClose} 
            size="xs">
                <ModalOverlay />
                    <ModalContent>
                        <StyledModalHeader>
                            Select wallet to continue this App
                            </StyledModalHeader>   
                        <CloseButton />
                            <StyledChakraBody>
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
                                        activating={activating}
                                        logo={value.logo}
                                        isConnected={connected}
                                        />
                                    </SpanWrapper>
                                       )
                                   })}    
                            </StyledChakraBody>
          <Footer>
              <Tag>
              <BiHelpCircle style={{marginRight: '8px'}} /> <a href="https://ethereum.org/en/wallets/" target="_blank">What is Ethereum Wallet ? </a></Tag> 
          </Footer>
        </ModalContent>
      </Modal>

                            
      </React.Fragment>
    )
}

export default Web3Modal;