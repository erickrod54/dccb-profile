import React from "react";
import { Footer, NavBar, Prisma, ServicesComponent } from '../components/index.components';
import AboutMe from "./about.me-page";

/** DCCB - Portfolio version 7.01 - Home Page - Features: 
 * 
 *          --> Importing Components from their indexes.
 *      
 *          --> Changing versioning to two digits.
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
            <Footer />
        </section>
       
    )
}

export default HomePage;