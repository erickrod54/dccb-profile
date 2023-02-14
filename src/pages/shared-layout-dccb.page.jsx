import React from "react";
import { Outlet } from 'react-router-dom';
import NavBar from "../components/navbar.component";
import Footer from "../components/footer.component";

/**
 * DCCB - Portfolio version 7.04 - 'DccbSharedLayoutPage' 
 * - Features: 
 * 
 *          --> Building 'DccbSharedLayoutPage'
 * 
 * Note: this is made in order to have access to 
 * 'DccbSharedLayoutPage' 
 */


const DccbSharedLayoutPage = () => {

    return(
        <>
        <NavBar />
            <Outlet />
        <Footer />
        </>
    )
}

export default DccbSharedLayoutPage;