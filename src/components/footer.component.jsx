import React from "react";
import styled from "styled-components";
/**
 * DCCB - Portfolio version 6 - Footer Component- Features: 
 * 
 *          --> Building 'Footer' Component.
 * 
 *          --> Styling the 'Footer' Component
 *              using the wrapper.
 * 
 * Note: The '&copy' get the copyright symbol and the
 * 'new Date().getFullYear()' the JavaScript ES6 that 
 * gets me the Year. 
 * 
 * This component will have social in next versions
 * , site map, and related links.
 * 
 * By the momment the Wrapper Style Component will 
 * be set in each component, when the UI design get
 * done they will renamed and live at 
 * 'styled-components.js'
 */
const Footer = () => {

    return(
        <Wrapper>
            <h5>&copy; { new Date().getFullYear()}</h5>
            <span> DCCB  |  Arquitecture and Design </span>
            <h5>  All Rights reserved</h5>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--clr-black);
  text-align: center;
  span {
    color: var(--clr-primary-13);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.5rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer;