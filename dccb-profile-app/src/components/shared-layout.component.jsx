import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar.component";
import { SectionOutlet } from "../styled-components";
/**
 * DCCB - Portfolio version 1 - SharedLayout Component- Features: 
 * 
 *          --> 'SharedLayout' serves as outlet for the rest 
 *              of components.
 * 
 * Note:Here i can handle all the routting, and other features
 * as sharedlayout, there is an issue pending to solve with it
 */

const  SharedLayout = () => {

    return(
        <>
            <NavBar />
            <SectionOutlet>
                <Outlet />
            </SectionOutlet>
        </>
    )
}

export default SharedLayout;