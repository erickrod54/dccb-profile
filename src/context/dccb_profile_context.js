import React, { useContext, useState, useEffect, useReducer } from "react";
import reducer from '../reducers/dccb_profile_reducers';
import { arqpictures, brands, links, publicAwards } from '../data'
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "../utils/actions";

/**DCCB - Portfolio version 7.03 - 'dccb_profile_context' file - 
 * Features: 
 * 
 *          --> Importing and providing 'publicAwards'
 * 
 * Note: pending to modify context name
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
                closeSidebar,
                arqpictures,
                brands,
                publicAwards
                }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext)
}


