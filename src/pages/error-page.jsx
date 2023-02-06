import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
/**
 * DCCB - Portfolio version 6 - Error Component- Features: 
 * 
 *          --> Placing an '404' title.
 *  
 *          --> Building a button to go
 *              'Back Home' with 'btn 
 *              btn-error' style class
 * 
 * Note: Refactoring the Error Component and 
 * setting up a style Wrapper.
 * 
 * By the momment the 'NavContainer' Style Component 
 * will be set in each component, when the UI design 
 * get done they will renamed and live at 
 * 'styled-components.js'
 */
const Error = () => {

    return(
    <Wrapper className="page-100">

        <h1>404</h1>
        <h3 className="page-100-msg"> 
        <span className="span-cap">page</span>
         does not exist...</h3>

        <Link to='/' className="btn btn-error">
          Back Home
        </Link>
    </Wrapper>
    )
}

const Wrapper = styled.main`
  background: var(--clr-primary-20);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    text-transform: none;
    margin-bottom: 2rem;
  }

  .btn-error{
    margin: 2rem;
  }

  .page-100-msg{
    margin: 1rem;
    color: var(--light-shadow);
    
    .span-cap{
      text-transform: capitalize;
    }
  }
`


export default Error;