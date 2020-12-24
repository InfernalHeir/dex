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

export const SwapButton = styled(Button)`
background: darkslateblue !important; 
color:white;
font-weight:600 !important; 
margin-top:1rem   
`;

export const Connect = styled.button`
font-size: 16px;
color: white;
padding: 10px;
font-weight: 800;
width: 125px;
border-radius: 8px;
border: 2px solid #fff;
transition: background 0.5s ease;
&: focus{
    outline: none;
}

`;

export const TokenListButton = styled.button`
padding: 0.5rem;
color: white;
font-weight:700;
position: relative;
`;