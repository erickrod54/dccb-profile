import React from "react";
import { links } from "../data";
import { NavLinks } from "../styled-components";
import { NavLink } from "react-router-dom";
/**
 * DCCB - Portfolio version 2 - NavBar Component- Features: 
 * 
 *          --> Fixing 'key' prop warning.
 * 
 * Note 'key' prop warning refers to the existence of an 'id'
 * for each child -this is applied to handle mapping a list
 * of elements this case the links that i am mapping for the 
 * NavBar-
 * 
 * Sometimes applying fragments can throw 'key' prop warnings
 */

const NavBar = () => {

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
        </NavLinks>
        </>     
    )

}

export default NavBar;