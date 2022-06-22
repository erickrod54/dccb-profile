import React from "react";
import SingleProject from "../components/single-project.component";
import { projects } from '../data';
import { ProjectsWrapper } from '../styled-components'

/** DCCB - Portfolio version 5 - Projects Page - Features: 
 * 
 *          --> Wrapping the 'Projects' with a 
 *             'ProjectsWrapper' Style Component.
 * 
 * Note: this Style components has specific styles
 * for the 'projects-page' 
 */
const Projects = () => {
    

    return(
        <>
            <ProjectsWrapper>
            <h2>All Projects ({ projects.length })</h2>

            <div className="projects-grid">
              {projects.map((project) => {
                  console.log(project)
                  return <SingleProject 
                  {...project} key={project.id }/>
              })}      
            </div>
            </ProjectsWrapper>

           
        </>
    )
}


export default Projects;