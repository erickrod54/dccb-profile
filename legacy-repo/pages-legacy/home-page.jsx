import React from "react";
import { Awards, Prisma, Resumes, ServicesComponent, SocialMedia } from '../components/index.components';
import AboutMe from "./about.me-page";

/** DCCB - Portfolio version 7.07 - Home Page - Features: 
 * 
 *          --> Adding 'SocialMedia' section.  
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
            <SocialMedia />
            
        </section>
       
    )
}

export default HomePage;