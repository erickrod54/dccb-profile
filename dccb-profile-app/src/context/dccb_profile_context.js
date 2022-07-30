import React, { useContext, useState, useEffect, useReducer } from "react";
import reducer from '../reducers/dccb_profile_reducers';
import { links } from '../data'
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../utils/actions";

/**DCCB - Portfolio version 6 - 'dccb_profile_context' file - 
 * Features: 
 * 
 *          --> Building context for 'dccb_profile_context'.
 * 
 *          --> Migrating 'toggleTheme' from 'Navbar'
 *              Component to provide it throught
 *              the context.
 *          
 *          --> Building 'initialState' with a  
 *              'isSidebarOpen' state value.
 * 
 *          --> Building 'openSidebar' feature and
 *              providing it using the 'AppProvider'
 * 
 *          --> Building 'closeSidebar' feature and
 *              providing it using the 'AppProvider'
 * 
 * Note: the 'dccb_profile_context' will the context
 * for the whole app.
 * 
 * the 'isSidebarOpen' state value will change in order
 * to toggle the SideBar.
 * */

/**here i build the initial state*/
const initialState = {
    /**initial state for 'Sidebar' */
    isSidebarOpen: true,
}

export const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer( reducer, initialState);

    const openSidebar = () => {
        dispatch({ type: SIDEBAR_OPEN})
    }

    const closeSidebar = () => {
        dispatch({ type: SIDEBAR_CLOSE})
    }

    /**pending to dispatch and build an action to handle 
     * the toggle theme*/
    
    /**here i build the state for the theme */
    const [ theme, setTheme ] = useState('light-theme');

    /**here i build the 'useEffect' to set theme*/
    useEffect(() => {
        document.documentElement.className = theme
    }, [theme])

    const toggleTheme = () => {
        if (theme === 'dark-theme') {
            setTheme('light-theme')
        }else{
            setTheme('dark-theme')
        }
    }

    return(
        <AppContext.Provider 
            value={{
                ...state, 
                links,
                theme,
                toggleTheme,
                openSidebar,
                closeSidebar
                }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}


