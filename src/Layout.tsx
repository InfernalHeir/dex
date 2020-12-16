import React from "react";
import Appbar from "./components/Appbar";

const Layout = ({children}) => {
    return(
        <div>
            <Appbar />
            {children}
        </div>
    )
}

export default Layout;