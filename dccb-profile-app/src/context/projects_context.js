import React, { useContext } from "react";
import { projects } from '../data'

/**DCCB - Portfolio version 6 - projects_context 
 * file - Features:
 * 
 *     --> Building 'ProjectsContext' 
 * 
 *     --> Building and testing 'ProjectProvider'.
 * 
 *     --> Building 'useProjectsContext' hook.  
 * 
 *     --> Importing 'projects' data and providing
 *          it througt the provider. 
 * 
 * Note: This Provider will be in charge of
 * all concerns about the projects
 */

export const ProjectsContext = React.createContext()

export const ProjectProvider = ({ children }) => {
    return(
    <ProjectsContext.Provider value={{
        projects
    }}>
        {children}
    </ProjectsContext.Provider>
    )
}

export const useProjectsContext = () => {
    return useContext(ProjectsContext)
}