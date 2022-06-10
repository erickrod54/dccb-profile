import React from "react";
import { ProjectWrapper } from '../styled-components'
/**
 * DCCB - Portfolio version 5 - SingleProject Component- 
 * Features: 
 * 
 *     --> Destructuring 'projects' data props.
 * 
 *     --> Wrapping the 'SingleProject' with a 
 *         'ProjectWrapper' Style Component.
 *     
 *     --> Placing 'Pricing' button -pending
 *         functionaility-
 * 
 * Note: this data was previously imported and mapped
 * by 'Projects' Component on 'projects-page.jsx'. 
 * 
 * Pricing button is pending by functionality, is
 * placed in this version for style porpouses.
 */

const SingleProject = ({ title, owner, location }) => {

    return(
     <ProjectWrapper>
         <h3>{title}</h3>
         <h4>owner: {owner}</h4>
         <p><span> location: </span> {location}</p>
         <button className="btn-primary">pricing</button>
     </ProjectWrapper>      
    )
}

export default SingleProject;