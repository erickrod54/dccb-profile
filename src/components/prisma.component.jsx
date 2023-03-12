import React from "react";
import styled from "styled-components";
import { PrismaContent, PrismaImages } from './index.components'

/** DCCB - Portfolio version 7.09 - Prisma Component- Features: 
 * 
 *      --> Implemenmting Style Component as Parent.
 * 
 *      --> Applying style naming convention.
 * 
 * Note: the style naming convention has been applied to 
 *'prisma-section--center'.
 */

const Prisma = () => {

    return(
      <Wrapper id='prisma-section'>
        <div className="prisma-section--center">
          <PrismaContent />
          <PrismaImages />
        </div>
      </Wrapper>
      )

}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    
  }

  .img-container {
      display: block;
      position: relative;
    }

    .main-img {
      width: 100%;
      height:600px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
  
    .accent-img {
      position: absolute;
      bottom: 1;
      left: 0;
      width: 350px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }

    .img-container::before {
      content: '';
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-grey-4);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
`

export default Prisma;

