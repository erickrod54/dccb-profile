import React from "react";
import { Awards, Prisma, Resumes, ServicesComponent } from '../components/index.components';
import AboutMe from "./about.me-page";

/** DCCB - Portfolio version 7.04 - Home Page - Features: 
 * 
 *          --> Removing 'Footer' and 'NavBar' to add them
 *              to 'DccbSharedLayoutPage'.  
 *     
 * Note: This re arrange is made in order to change the layout from
 * 'flexbox' to 'grid'
 */

const  HomePage = () => {

    return(
        <section className="container">
            
            <Prisma />
            <AboutMe />                      
            <ServicesComponent />
            <Resumes />
            <Awards /> 
            
        </section>
       
    )
}

export default HomePage;