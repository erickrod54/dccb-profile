import React from "react";
import ProjectsPreview from "../components/projects-preview.component";
/**
 * DCCB - Portfolio version 5 - Home Page - Features: 
 * 
 *          --> Importing and Placing 'ProjectsPreview' 
 *              Component.
 * 
 *      
 * 
 * Note: This will render the 'Projects' Component on
 * 'HomePage' component.
 * 
 */

const  HomePage = () => {

    return(
        <>
            <h2>The Home Page</h2>
            <ProjectsPreview />
        </>
    )
}

export default HomePage;