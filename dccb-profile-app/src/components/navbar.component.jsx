import React from "react";
import { links } from "../data";
import { NavLinks } from "../styled-components";
import { NavLink } from "react-router-dom";
/**
 * DCCB - Portfolio version 1 - NavBar Component- Features: 
 * 
 *          --> Building the NavBAr Component.
 * 
 * Note:Here i can handle all the routting, and other features
 * as sharedlayout, there is an issue pending to solve with it
 */

const NavBar = () => {

    return(
        <>
       
        <NavLinks >
            {links.map((link, index) => {
                
                const { url, text } = link;
                return(                                                                     
                    <ul>
                        <li>
                        <NavLink to={url} 
                              key={index} className={( { isActive } ) => ( isActive ? 'link active' : 'link')}>
                                  <p>{text}</p></NavLink>
                        </li>
                    </ul>    
                )
            })}
        </NavLinks>
        
        </>
    )

}

export default NavBar;