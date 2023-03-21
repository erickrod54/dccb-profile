import React from "react";
import logo from '../assets/dccb_logo_temp.svg';
import styled from "styled-components";

import { useAppContext } from '../context/dccb_profile_context';
import { Link } from 'react-router-dom';
//Sidebar toogle
//import { CgMenuGridR } from 'react-icons/cg'
import NavBarButtons from "./navbar-buttons.component";
import { useState } from "react";
import { useEffect } from "react";


/**DCCB - Portfolio version 7.11 - NavBar Component- 
 * Features: 
 * 
 *      --> Taking out OpenSidebar to get in production.
 * 
 * Note: the code for 'nav-toggle' is:
 * 
 *   <button typeof='button' className='nav-toggle'>
 *   <CgMenuGridR onClick={openSidebar}/>      
 *   </button>
 * .
 */

const NavBar = () => {
  
  const { links } = useAppContext()
  
  const [background, setBackground] = useState('nav-links');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setBackground('nav-links nav-links--scroll-down');
      } else {
        setBackground('nav-links');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
   

    return(
      <section id='nav-section'>
        <NavContainer>
          <nav className="header_main-nav">
            <div className='nav-center'>
                <div className='nav-header'>
                    <Link to='/'>
                        <img src={logo} alt='dccb temporal logo'/>
                    </Link>
                </div>
                <ul className={background}>
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
          </nav>
        </NavContainer>
        </section>     
    )

}

const NavContainer = styled.nav`


  .nav-center {
    width: 90vw;
    margin: 0 auto;
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
    padding: 1rem;
    font-size: calc(0.5rem + 0.5vw);
    align-items: center;
  }

  .nav-links--scroll-down {
      background-color: var(--raisin-black);
      border-radius: 1rem;
      border: 2px solid tomato;
      a{
        color: var(--blanched-almond);
      }
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
      
    }
    .cart-btn-wrapper {
      display: grid;
    }
  }
`

export default NavBar;