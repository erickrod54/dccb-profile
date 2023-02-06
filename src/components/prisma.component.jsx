import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { prismabcg1, prismabcg2 } from '../assets/houses-images/index' 

/**
 * DCCB - Portfolio version 6 - Prisma Component- Features: 
 * 
 *          --> Building Prisma Component.
 * 
 *          --> Importing and Placing two 
 *              presentation images 'prismabcg1'
 *              and ' prismabcg2'.
 * 
 *          --> Building a 'Link' Component with
 *              btn btn-hero style to redirect to 
 *              the store.
 * 
 *          --> Setting a Presentation message.
 * 
 * Note:This Component will have presentation features for the
 * portfolio.
 * 
 * By the momment the 'NavContainer' Style Component 
 * will be set in each component, when the UI design 
 * get done they will renamed and live at 
 * 'styled-components.js'
 */

const Prisma = () => {

    return(
        <Wrapper className='section-center'>
          <article className='content'>
            <h1>design your <br />
              space with proffesional ends
            </h1>
            <p>
            augue lacus viverra vitae congue eu consequat
            ac felis donec et odio pellentesque diam volutpat 
            commodo sed egestas egestas fringilla
            </p>
              <Link to='/projects' className='btn hero-btn'>
                shop now
              </Link>
          </article>
              <article className='img-container'>
              <img src={prismabcg1} alt='nice table' className='main-img'/>
              <img src={prismabcg2} alt='person working' className='accent-img'/>
              </article>
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
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
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
  }
`

export default Prisma;