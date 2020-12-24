import React , {useRef } from "react";
import { useDisclosure } from "@chakra-ui/react"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button
  } from "@chakra-ui/react";
import WalletModal from "../WalletModal";
import {useSelector,useDispatch
} from "react-redux";
import styled from "styled-components"
import {BiHelpCircle} from "react-icons/bi"
import {IoMdWallet} from "react-icons/io"
import { Divider } from "@material-ui/core";

  interface DrawersProps {
      drawerHeading: string
  }

const Tag = styled.div`
padding: 0.5rem;
padding: 0.5rem;
font-size: 24px;
font-weight: 800;
color: darkslateblue;
display:flex;
justify-content:start;
align-items:center;
`;

const StyledModalHeader = styled(DrawerHeader)`
font-size: 24px !important;
color: darkslateblue !important;
padding-top:15px !important;
padding-bottom:15px !important;
display:flex;
align-items:center;
`;

  const Drawers = (props: DrawersProps) =>  {
    
    const drawerDispatch = useDispatch();

    const onClose = () => {
      drawerDispatch({
          type: "CLOSE",
          payload:{
              isOpen: false
          }
      })
    }

    const modalSelector = useSelector(({modal})=> {
      return modal;
 })

    return (
      <>
        <Drawer
          isOpen={modalSelector.isOpen}
          placement="right"
          onClose={onClose}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <StyledModalHeader>
                <IoMdWallet
                 style={{marginRight:"10px"}}
                 />
                      {props.drawerHeading}
                </StyledModalHeader>
  
              <DrawerBody>
                <WalletModal />
              </DrawerBody>
  
              <DrawerFooter
              justifyContent="left"
              >
              <Divider />
              <Tag>
              <BiHelpCircle style={{marginRight: '8px'}} /> <a href="https://ethereum.org/en/wallets/" target="_blank">What is Ethereum Wallet ? </a></Tag>
              </DrawerFooter>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    )
  }

  export default Drawers;