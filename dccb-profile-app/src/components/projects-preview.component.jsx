import React from "react";
import Project from "./project.component";
import styled from "styled-components";
import { ProjectsWrapper } from "../styled-components";
import { useProjectsContext } from '../context/projects_context'

/**DCCB - Portfolio version 6 - 'ProjectsPreview' 
 * Component- Features: 
 * 
 *     --> Destructuring 'projects' data from
 *         'useProjectsContext()' hook
 * 
 *     --> Replacing 'filter' method for a mapgit
 *         with a 'slice' of the 'projects' 
 *         data
 * 
 *     --> Refactoring styles 'ProjectsPreview'
 *         Component
 * 
 *     --> Destructuring 'projects' data from 
 *        the provider 'useProjectsContext' 
 * 
 * Note: Filtering 'projects' with a limit for 5
 * elements and mapping them is made in order to
 * create a preview of the whole list and displaying
 * it.
 * 
 * By the momment the 'NavContainer' Style Component 
 * will be set in each component, when the UI design 
 * get done they will renamed and live at 
 * 'styled-components.js'
 */
const ProjectsPreview = () => {

    const { projects } = useProjectsContext()
    console.log('this is projects data provided by ProjectsProvider ==> ', projects )

    return(
        <>
        <ProjectsWrapper>
        <Wrapper className="section">
        <div className="title">
            <h2>featured projects</h2>
            <div className="underline"/>    
        </div>
           <div className="section-center featured">
                {projects.slice(0,6).map((project) => {
                    return <Project key={project.id} 
                    {...project}/>
                })}
            </div>
        </Wrapper>
        </ProjectsWrapper>
        </>
    )
}

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`

export default ProjectsPreview;