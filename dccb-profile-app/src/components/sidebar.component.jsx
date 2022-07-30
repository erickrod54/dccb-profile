import React from "react";
import Logo from '../assets/dccb_logo_temp.svg';
import { Link } from "react-router-dom";
import { useAppContext } from "../context/dccb_profile_context";
import { FaTimes } from 'react-icons/fa';
import { links } from "../data";
import styled from "styled-components";
import NavBarButtons from "./navbar-buttons.component";

/**DCCB - Portfolio version 6 - 'Sidebar' 
 * Component- Features: 
 * 
 *     --> Buuilding SideBar Component.
 *    
 *     --> Destructuring 'closeSidebar' feature
 *         and 'isSidebarOpen' state value. 
 * 
 *     --> Styling SideBar Component using
 *         'SidebarContainer' 
 * 
 * Note: This Component implement active class depending
 * on the 'isSidebarOpen' state value to toggle the
 * sidebar beetween close and open.
 * 
 * By the momment the 'NavContainer' Style Component 
 * will be set in each component, when the UI design 
 * get done they will renamed and live at 
 * 'styled-components.js'
 */

const SideBar = () => {

    const { closeSidebar, isSidebarOpen } = useAppContext()

    return(
        <SidebarContainer>
          <aside className={`${isSidebarOpen ? 
            'sidebar show-sidebar' : 'sidebar'}`}>
              <div className='sidebar-header'>
                <img 
                  src={Logo} 
                  className='logo' 
                  alt='comfy sloth'/>
              {/**this is the 'x' button, i place the 'closeSidebar'*/}
              <button 
                  className='close-btn' 
                  type='button' 
                  onClick={closeSidebar}>
                <FaTimes />
              </button>
              </div>
              {/**clicking on each link mapped will trigger
               * the 'closeSidebar'*/}
              <ul className='links'>
                {links.map((link) => {
                  const { id, text, url } = link;
  
                  return(
                    <li key={id}>
                      <Link to={url} 
                            onClick={closeSidebar}>
                        {text}
                      </Link>
                    </li>
                  )
                })}
                {/**clicking on 'checkout' link will trigger
               * the 'closeSidebar'*/}
                 <li>
                      <Link 
                        to='/checkout' 
                        onClick={closeSidebar}>
                      checkout
                      </Link>
                    </li>
              </ul>
              <NavBarButtons />
          </aside>
        </SidebarContainer>
      )
  }
  
  const SidebarContainer = styled.div`
    text-align: center;
    .sidebar-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 1.5rem;
    }
    .close-btn {
      font-size: 2rem;
      background: transparent;
      border-color: transparent;
      color: var(--clr-primary-5);
      transition: var(--transition);
      cursor: pointer;
      color: var(--clr-red-dark);
      margin-top: 0.2rem;
    }
    .close-btn:hover {
      color: var(--clr-red-light);
    }
    .logo {
      justify-self: center;
      height: 45px;
    }
    .links {
      margin-bottom: 2rem;
    }
    .links a {
      display: block;
      text-align: left;
      font-size: 1rem;
      text-transform: capitalize;
      padding: 1rem 1.5rem;
      color: var(--clr-grey-3);
      transition: var(--transition);
      letter-spacing: var(--spacing);
    }
  
    .links a:hover {
      padding: 1rem 1.5rem;
      padding-left: 2rem;
      background: var(--clr-grey-10);
      color: var(--clr-grey-2);
    }
  
    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--clr-white);
      transition: var(--transition);
      transform: translate(-100%);
      z-index: -1;
    }
    .show-sidebar {
      transform: translate(0);
      z-index: 999;
    }
    .cart-btn-wrapper {
      margin: 2rem auto;
    }
    @media screen and (min-width: 992px) {
      .sidebar {
        display: none;
      }
    }
  `

export default SideBar;