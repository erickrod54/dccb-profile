import React from "react";
import { Awards, Footer, NavBar, Prisma, Resumes, ServicesComponent } from '../components/index.components';
import AboutMe from "./about.me-page";

/** DCCB - Portfolio version 7.03 - Home Page - Features: 
 * 
 *          --> Importing and palcing 'Resumes' section
 *              and 'Awards'.  
 *     
 * Note: This re arrange is made in order to change the layout from
 * 'flexbox' to 'grid'
 */

const  HomePage = () => {

    return(
        <section className="container">
            <NavBar />
            <Prisma />
            <AboutMe />                      
            <ServicesComponent />
            <Resumes />
            <Awards /> 
            <Footer />
        </section>
       
    )
}

export default HomePage;