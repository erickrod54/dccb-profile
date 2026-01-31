import React from "react";
import styled from "styled-components";

//import { CgShoppingCart } from 'react-icons/cg'
//import { BsToggleOn } from 'react-icons/bs'
//import { BsToggleOff } from 'react-icons/bs'

//To Login
import { BsPersonCircle } from 'react-icons/bs'

//Already login
//import { FaUserCircle } from 'react-icons/fa'

/**DCCB - Portfolio version 7.02 - NavBar Component- 
 * Features: 
 * 
 *   --> Changing 'h2' tag to get styles.
 * 
 *   --> Changing versioning to two digits. 
 * 
 * Note: This Component will keep the buttons
 * for the navBar as login by the moment -later
 * will be added more-
 */

const NavBarButtons = () => {

    //const { toggleTheme } = useAppContext()

    //console.log('toggle theme value ==> ', toggleTheme)

    return(
        <Wrapper className='cart-btn-wrapper'>
          <div className="sign-in-up">
            <h2>sign in / sign up</h2>
          </div>
            <button type="button" className="auth-btn">
              <BsPersonCircle/> 
            </button>
            {/**<button type="button" onClick={toggleTheme}>
                toggle
            </button> */}
        </Wrapper>
    )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .sign-in-up{
    display: flex;
    flex-direction: row;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.50rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 1px;
    }
    &:hover{
      color: var(--clr-primary-16);
    }
  }
`

export default NavBarButtons;