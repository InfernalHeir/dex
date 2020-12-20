import React from "react";
import Appbar from "./components/Appbar";
import Web3Modal from "./components/Web3Modal";

const Layout = ({children}) => {
    return(
        <div>
            <Appbar />
            {children}
            <Web3Modal />
        </div>
    )
}

export default Layout;