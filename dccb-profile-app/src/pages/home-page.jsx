import React from "react";
import Projects from "./projects-page";
/**
 * DCCB - Portfolio version 4 - Home Page - Features: 
 * 
 *          --> Importing and Placing 'Projects' 
 *              Component.
 * 
 * Note: This will render the 'Projects' Component on
 * 'HomePage' component.
 * 
 */

const  HomePage = () => {

    return(
        <>
            <h2>The Home Page</h2>
            <Projects />
        </>
    )
}

export default HomePage;