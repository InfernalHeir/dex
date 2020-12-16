import React from "react";
import styled from "styled-components";


const LogoWrapper = styled.div`
padding: 4px;
`;

const DappRegisteredLogo = styled.img`
width: 64px;
padding:4px;
`; 

const Logo = ({logo,alt}: {logo: string,alt: string}) => {
    return(
        <LogoWrapper>
            <DappRegisteredLogo src={logo} alt={alt} />
        </LogoWrapper>
    ) 
}

export default Logo;