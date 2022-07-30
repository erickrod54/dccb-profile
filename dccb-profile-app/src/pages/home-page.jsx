import React from "react";
import Prisma from '../components/prisma.component';
import ProjectsPreview from "../components/projects-preview.component";
import ServicesComponent from "../components/services.component";

/** DCCB - Portfolio version 6 - Home Page - Features: 
 * 
 *          --> Importing and Placing 'Prisma', 
 *             'ProjectsPreview' and 
 *             'ServicesComponent'
 *     
 * Note: By the momment this Components build the 'HomePage'
 * but later in next versions is going to be added services 
 * and team Components
 */

const  HomePage = () => {

    return(
        <>
            <Prisma />
            <ProjectsPreview />
            <ServicesComponent />
        </>
    )
}

export default HomePage;