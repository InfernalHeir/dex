import styled from "styled-components";

export const TabWrapper = styled.div`
padding: 10px;
justify-content:center;
display: flex;
flex-direction:row;
align-items:center;    
`;

export const TabList = styled.button`
background: ${props => props.active ? 'darkslateblue' : 'transparent'};
padding: 10px 15px;
color:${props => props.active ? 'white' : '#222831'};
font-weight: 800;
display: flex;
border-radius: 24px;
cursor: pointer;
align-items: center;
font-size: 18px;
margin-right: 5px;
margin-left: 5px;
&: focus{
    outline: none;
}
`; 