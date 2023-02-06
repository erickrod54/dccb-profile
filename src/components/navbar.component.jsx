import React from "react";
import logo from '../assets/dccb_logo_temp.svg';
import styled from "styled-components";

import { useAppContext } from '../context/dccb_profile_context';
import { Link } from 'react-router-dom';
//Sidebar toogle
import { CgMenuGridR } from 'react-icons/cg'
import NavBarButtons from "./navbar-buttons.component";

/**DCCB - Portfolio version 7.02 - NavBar Component- 
 * Features: 
 * 
 *      --> Wrapping the component in a 'nav-section'.
 * 
 *      --> Changing versioning to two digits
 * 
 * Note: fter this version i will use the 'id' for the 
 * new layout.
 */

const NavBar = () => {

    const { links, openSidebar } = useAppContext()

    return(
      <section id='nav-section'>
        <NavContainer>
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to='/'>
                        <img src={logo} alt='dccb temporal logo'/>
                    </Link>
                    <button typeof='button' className='nav-toggle'>
                        <CgMenuGridR onClick={openSidebar}/>      
                    </button>
                </div>
                <ul className='nav-links'>
                    {links.map((link) => {
                        const { id, text, url } = link;

                        return(
                            <li key={id}>
                                <Link to={url}>{text}</Link>
                            </li>
                        )
                    })}
                </ul>
                <NavBarButtons />
            </div>
        </NavContainer>
        </section>     
    )

}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-11);
    cursor: pointer;
    svg {
      font-size: 1.5rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-13);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default NavBar;