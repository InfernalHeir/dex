import React from "react";
import { Modal, ModalOverlay ,ModalBody,ModalHeader, ModalContent, ModalFooter, ModalCloseButton,Button, useDisclosure,Center } from "@chakra-ui/react";
import styled from "styled-components";
import Logo from "../Logo";
import providers from "../../providers";

const ConnectStyledButton = styled(Button)`
font-size:16px!important;
color: white;
&: focus{
    box-shadow: none !important;
}
`;


const ModalPara = styled.h3`
font-size: 18px;
color: #222831;
font-weight: 500;
text-transform: capitalize;
`;

const SpanWrapper = styled.div`
padding: 12px;
margin-top: 14px;
border-radius: 4%;
cursor: pointer;
align-items: center;
border: 1px solid #4c464633;
display:flex;
flex-direction:row;
&: hover{
    border: 1px solid #222831;
}
`;



const ProviderLogo = styled.img`
width: 40px;
margin-right: 10px;
height: 40px;
`;

const CloseButton = styled(ModalCloseButton)`
font-size:20px;
color: #222831;
background: rgba(0, 0, 0, 0.06);
&: focus{
    box-shadow: none !important;
}
`;


const Web3Modal = () => {
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
                            <ModalPara>Select wallet to continue Ellaswap</ModalPara>
                            </ModalHeader>   
                        <CloseButton />
                            <ModalBody>
                                   {providers.map((value,index) => {
                                       return(
                                        <SpanWrapper key={index}>
                                        <ProviderLogo src={value.logo} alt={value.name} />
                                        <ModalPara>{value.name}</ModalPara>
                                    </SpanWrapper>
                                       )
                                   })}
                                   
                            </ModalBody>
                        

          <ModalFooter>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>
    )
}

export default Web3Modal;