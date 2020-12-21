import React, { Fragment } from "react";
import Stepper from "react-stepper-horizontal";
import steps from "../../json/steps";
import styled from "styled-components";
import {Text} from "@chakra-ui/react";
import Link from "next/link";
import { BiHelpCircle } from "react-icons/bi";
import json from "../../json";
import { NextButton } from "../Buttons";
import {GrFormNext} from "react-icons/gr";
import { IconContext } from "react-icons";

const CreateNewPair = styled.div`
  background: darkslateblue;
  padding: 1rem;
  border-radius: 24px;
  margin-top: 20px;
`;

const CreatePairHeading = styled.h3`
  font-size: 25px;
  font-weight: 900;
  color: white;
  text-align: left;
  margin-bottom: 8px;
`;

const Anchor = styled.a`
  font-weight: 800;
  font-size: 16px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 16px;
`;

export const Wrapper = styled.div`
max-width:450px;
width:100%;
padding:0.5rem;
margin:auto;
`;

const Spacer = styled.div`
padding: 0.5rem;
display: flex;
justify-content: flex-end;
`;

const CreatePair = () => {
    return(
        <Fragment>
            <Wrapper>
            <Stepper steps={steps} activeStep={ 1 } />
                <CreateNewPair>
                   <CreatePairHeading>Create a Pair</CreatePairHeading>
                   <Text
                   align="left"
                   color="white"
                   size="xs"
                   fontSize={16}
                   >
                   {json.createPairText}
                   </Text>
                   <Link href="/blog/new-pair">
                       <Anchor>
                          <BiHelpCircle style={{marginRight: "12px"}} />
                           Creating A New Pair
                         </Anchor> 
                   </Link>
                </CreateNewPair>
                <Spacer>
                    <NextButton colorScheme="white" rightIcon={
                    <IconContext.Provider value={{color: 'white'}}>
                        <GrFormNext/>
                    </IconContext.Provider>
                    }>
                        Next
                    </NextButton>
                </Spacer>  
                </Wrapper>
        </Fragment>
    )
}

export default CreatePair;