import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/dccb_profile_context";

/** DCCB - Portfolio version 7.02 - Prisma Component- Features: 
 * 
 *      --> Wrapping the component in a 'prisma-section'.
 * 
 *      --> Changing versioning to two digits
 * 
 * Note: fter this version i will use the 'id' for the 
 * new layout.
 */

const Prisma = () => {

  const { arqpictures } = useAppContext()

  console.log('here i got the arq pitures array ==>',arqpictures)

  const arqroses = arqpictures[0].image;
  const awards = arqpictures[1].image; 

    return(
      <section id='prisma-section'>
        <Wrapper className='section-center'>
          <article className='content'>
          <h2>Greetings everyone</h2>
              <p>
                Welcome to my website i am <strong>Dilcia C. Cardenas B.</strong>,
                an accomplished <strong>architect with 25 years of experience in 
                the industry.</strong> 
              </p>

              <p>
                With a mastery of <strong>AutoCAD</strong> dating back to 1997 and
                active to the present date, and proficiency in BIM 
                design using <strong>Archicad</strong>
              </p> 
              
              <p>
                I see myself <strong>as a valuable asset to any drafting team</strong>. 
                <strong>My goal</strong> is <strong>to join a prestigious design company</strong> in 
                the <strong>United States</strong> and <strong>bring her wealth of knowledge and 
                skill to contribute to the success of new projects</strong>. 
                Take a look around and <strong>discover the portfolio of this talented 
                architect and learn why she is the right fit for your next project</strong>.
              </p>
          </article>
          <article className='img-container'>
              <img src={arqroses} alt='nice table' className='main-img'/>
              <img src={awards} alt='person working' className='accent-img'/>
          </article>
        </Wrapper>
      </section>
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
  }
`

export default Prisma;