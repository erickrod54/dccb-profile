import React, { useEffect, useState } from "react";
import { links } from "../data";
import { NavLinks } from "../styled-components";
import { NavLink } from "react-router-dom";

/**DCCB - Portfolio version 5 - NavBar Component- 
 * Features: 
 * 
 *          --> Implementing "url-links" style class.
 * 
 *          --> Implementing "right-side" style class.
 * 
 * Note implementing this two style class i handle better
 * general and specific styles for them.
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
                        <li className="url-links">
                        <NavLink to={url} 
                                 className={( { isActive } ) => ( isActive ? 'link active' : 'link')}>
                                  <p>{text}</p></NavLink>
                        </li>
                    </ul>    
                )
            })}
            {/**here i build the button to switch betwwen 
             * one theme and another*/}
             <div className="right-side">
                <button 
                    className="btn btn-toggle" 
                    onClick={toggleTheme}>
                    toogle
                </button> 
             </div>
        </NavLinks>
        </>     
    )

}

export default NavBar;