import React, { useEffect, useState } from "react";
import { links } from "../data";
import { NavLinks } from "../styled-components";
import { NavLink } from "react-router-dom";

/**
 * DCCB - Portfolio version 3 - NavBar Component- Features: 
 * 
 *          --> Building state to handle 'theme'.
 * 
 *          --> Building useEffect to set 'theme'   
 *              using the 'documentElement' object.
 * 
 *          --> Building 'toggleTheme' feature to
 *              trigger the switch between 'dark-theme'
 *              and 'light-theme'
 * 
 * Note 'key' prop warning refers to the existence of an 'id'
 * for each child -this is applied to handle mapping a list
 * of elements this case the links that i am mapping for the 
 * NavBar-
 * 
 * Sometimes applying fragments can throw 'key' prop warnings
 */

const NavBar = () => {
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
        <>
        <NavLinks >
            {links.map((link) => {
                
                const { url, text, id } = link;
                return(                                                                     
                    <ul key={id}> 
                        <li >
                        <NavLink to={url} 
                                 className={( { isActive } ) => ( isActive ? 'link active' : 'link')}>
                                  <p>{text}</p></NavLink>
                        </li>
                    </ul>    
                )
            })}
            {/**here i build the button to switch betwwen 
             * one theme and another*/}
            <button 
                className="btn btn-toggle" 
                onClick={toggleTheme}>
                toogle
            </button>
        </NavLinks>
        </>     
    )

}

export default NavBar;