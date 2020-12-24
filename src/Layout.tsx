import React from "react";
import Appbar from "./components/Appbar";
import Drawers from "./components/Drawers";

const Layout = ({children}) => {
    return(
        <div>
            <Appbar />
            <Drawers 
            drawerHeading={`Choose Wallet`}
            />
            {children}
        </div>
    )
}

export default Layout;