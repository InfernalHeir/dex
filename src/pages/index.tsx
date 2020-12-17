import React,{useEffect} from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Swap from "../components/Swap";
import {RiExchangeFundsLine} from "react-icons/ri";
import {BsFillDropletFill,BsPlusCircleFill} from "react-icons/bs";
import styled from "styled-components";
import {Input,Label,SwapSystem} from "../components/Inputs";
import {MaxButton} from "../components/Buttons";
import { fetchMarkets} from "../redux/actions/markets";

const StyledTab = styled(Tab)`
color: #222831 !important;
font-weight:700 !important;
font-size: 18px !important;
&: focus{
    box-shadow: none !important;
}
`;




const App = () => {
  useEffect(() => { 
    fetchMarkets();
  },[])
  return (
    <Swap>
      <Tabs variant="soft-rounded" align="center" colorScheme="green">
        <TabList>
          <StyledTab><RiExchangeFundsLine style={{marginRight:'5px'}}/>Swap</StyledTab>
          <StyledTab><BsFillDropletFill style={{marginRight:'5px'}} />Pool</StyledTab>
          <StyledTab><BsPlusCircleFill style={{marginRight:'5px'}} />Create Pair</StyledTab>
        </TabList>
        <TabPanels>
          <TabPanel>
                <SwapSystem>
                <Label>trade amount</Label>
                <div style={{position: 'relative'}}>
                <Input type="number" placeholder="0.00 ETH" />
                 <MaxButton>Max</MaxButton>
                 </div>   
                </SwapSystem>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Swap>
  );
};

export default App;