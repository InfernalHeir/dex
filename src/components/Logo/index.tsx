import React from "react";
import styled from "styled-components";


const LogoWrapper = styled.div`
padding: 4px;
`;

const DappRegisteredLogo = styled.img`
width: 46px;
padding: 4px;
margin-right: 20px;
@media(max-width:600px){
    width:50px;
}
`; 

const Logo = ({logo,alt}: {logo: string,alt: string}) => {
    return(
        <LogoWrapper>
            <DappRegisteredLogo src={logo} alt={alt} />
        </LogoWrapper>
    ) 
}

export default Logo;