import React from "react";
import styled from "styled-components";
import {Button} from "@chakra-ui/react";

export const MaxButton = styled.button`
position: absolute;
top: 55px;
right: 20px;
background: #197bc2;
color: white;
padding: 0.2rem;
width: 50px;
font-size: 14px;
border-radius: 24px;
`;

export const TryAgain = styled.button`
background: #197bc2;
color: white;
padding: 6px;
font-size: 12px;
font-weight: 800;
margin-left: auto;
margin-right: 10px;
border-radius: 24px;
`;

export const NextButton = styled(Button)`
float: right;
color:white;
font-weight: 800;
border-radius: 24px;
background: #197bc2 !important;
`;

export const Connect = styled(Button)`
font-size:16px!important;
color: white;
&: focus{
    box-shadow: none !important;
}
`;