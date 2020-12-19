import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Logo from "../Logo";
import logo from "../../images/logo.png";
import Item from "./Item";
import Web3Modal from "../Web3Modal";
import { IconButton, useDisclosure, Grid, GridItem } from "@chakra-ui/react";
import { AiFillSetting } from "react-icons/ai";
import { CgMoreVerticalO } from "react-icons/cg";
import Drawers from "../Drawers";
import { BiMenuAltLeft } from "react-icons/bi";

const Header = styled.header`
  max-width: 1200px;
  padding: 0.5rem;
  margin: auto;
`;

const DappBar = styled.nav`
  height: 3.5rem;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ListDropDown = styled.ul`
  list-style: none;
  ${(props) => (props.isRight ? `margin-right: auto` : `margin-left: auto`)};
  flex-direction: row;
  display: flex;
  align-items: center;
`;

const LeftListItem = styled.ul`
  margin-left: 10px;
  margin-right: 10px;
`;

const Appbar = () => {
  const Btnref = useRef();

  const [isResize, setResize] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 600) {
      setResize(true);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 600) {
        setResize(true);
      } else {
        setResize(false);
      }
    });
  }, []);

  const { onOpen, isOpen, onClose } = useDisclosure();
  const DesktopNavigation = () => {
    return (
      <Header>
        <DappBar>
          <Logo logo={logo} alt="EllaSwap" />
          <ListDropDown isRight={true}>
            <Item href="/" name="Swap" />
            <Item href="/savings" name="Savings" />
            <Item href="/advance" name="Advance Console" />
          </ListDropDown>
          <ListDropDown>
            <LeftListItem>
              <Web3Modal />
            </LeftListItem>
          </ListDropDown>
        </DappBar>
      </Header>
    );
  };

  const MobileNavigation = () => {
    return (
      <Header>
        <DappBar>
          <Grid
            style={{ alignItems: "center" }}
            templateColumns="4fr 4fr 4fr"
            gap={6}
            width="100%"
          >
            <GridItem rowSpan={1} colSpan={1}>
              <IconButton
                style={{ boxShadow: "none" }}
                aria-label="Menu"
                size="lg"
                colorScheme="white"
                icon={<BiMenuAltLeft />}
              />
            </GridItem>
            <GridItem rowSpan={1} colSpan={1}>
              <Logo logo={logo} alt="EllaSwap" />
            </GridItem>

            <GridItem rowSpan={1} colSpan={1}>
              <Web3Modal />
            </GridItem>
          </Grid>
        </DappBar>
      </Header>
    );
  };

  return <>{isResize ? <MobileNavigation /> : <DesktopNavigation />}</>;
};

export default Appbar;
