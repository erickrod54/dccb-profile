import React from "react";
import SingleProject from "../components/single-project.component";
import { projects } from '../data'
/**
 * DCCB - Portfolio version 4 - Projects Page - Features: 
 * 
 *          --> Mapping 'SingleProject' Component.
 * 
 *          --> Spreading 'project' and setting 'id'
 *              for every 'SingleProject'
 * 
 *          --> Wrapping the 'Projects' with a 
 *             'projects' class Style.
 * 
 * Note: this component is getting render in 'home-page'
 * so will display the projects in the main page.
 */
const Projects = () => {

    return(
        <>
            <h2>Projects Page</h2>
            <article className='projects'>

              {projects.map((project) => {
                  console.log(project)
                  return <SingleProject 
                  {...project} key={project.id}/>
              })}      

            </article>
        </>
    )
}


export default Projects;