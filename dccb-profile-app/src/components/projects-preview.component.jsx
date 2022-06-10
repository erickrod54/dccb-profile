import React from "react";
import SingleProject from "./single-project.component";
import { Link } from "react-router-dom";
import { projects } from '../data'
import { ProjectsWrapper } from "../styled-components";

/**DCCB - Portfolio version 5 - 'ProjectsPreview' 
 * Component- Features: 
 * 
 *     --> Filtering 'projects' with a limit for 5
 *        elements.
 * 
 *     --> Mapping for each project on 'SingleProject'
 *         Components.
 * 
 *     --> Importing and Placing 'ProjectsWrapper' Style
 *         Component to set styles to 'ProjectsPreview'.
 * 
 * Note: Filtering 'projects' with a limit for 5
 * elements and mapping them is made in order to
 * create a preview of the whole list and displaying
 * it.
 */
const ProjectsPreview = () => {

    return(
        <>
        <ProjectsWrapper>
        <h2>projects preview ( 4 of {projects.length})</h2>
            <div className="projects-grid">
                {projects.filter((project) => project.id < 5)
                .map((project) => {
                    return <SingleProject 
                    {...project} key={project.id }/>
                  })}
              <button>
               <Link to='/projects'>view more</Link>
              </button>
           </div>
        </ProjectsWrapper>
        
        
        </>
    )
}

export default ProjectsPreview;