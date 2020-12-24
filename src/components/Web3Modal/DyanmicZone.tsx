import React from "react";
import styled from "styled-components";
import { Spinner } from "@chakra-ui/react"




const DyanmicZone = ({activating,logo,name,isConnected}) => {
    if(activating){
        return(
             <React.Fragment>
                <Spinner style={{marginRight: "20px"}} size="md" />
                <h3 className="modal-para">Initializing Request..</h3>
            </React.Fragment>
        );   
    }
    else{
         return(
         <React.Fragment>
            <img className="provider-logo" src={logo} alt={name} />
            <h3 className="modal-para">{name}</h3>
         </React.Fragment>
         )  
    }
}

export default DyanmicZone;