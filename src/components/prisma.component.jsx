import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/dccb_profile_context";

/** DCCB - Portfolio version 7.02 - Prisma Component- Features: 
 * 
 *      --> Destructuring 'arqpictures' from the context.
 * 
 *      --> Writing an introduction message.
 * 
 *      --> Adding 'img-container-section' to set grid styles.
 * 
 *      --> clearing media queries.
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
                I see myself <strong>as a valuable asset to any drafting team </strong>. 
                and <strong>My goal</strong> is <strong> to join a prestigious design company</strong> in 
                the <strong>United States</strong> and <strong>bring her wealth of knowledge and 
                skill to contribute to the success of new projects</strong>. 
                Take a look around and <strong>discover the portfolio of this talented 
                architect and learn why she is the right fit for your next project</strong>.
              </p>
          </article>
          <section id='img-container-section'>
          <article className='img-container'>
              <img src={arqroses} alt='nice table' className='main-img'/>
              <img src={awards} alt='person working' className='accent-img'/>
          </article>
          </section>
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

