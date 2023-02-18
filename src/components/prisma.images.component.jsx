import React from "react";
import { useAppContext } from "../context/dccb_profile_context";

/** DCCB - Portfolio version 7.07 - PrismaImages - Features: 
 * 
 *      --> Building 'PrismaImages'
 * 
 * Note: This index is built in order to rearrange 
 * the components
 */

const PrismaImages = () => {

    const { arqpictures } = useAppContext()

  console.log('here i got the arq pitures array ==>',arqpictures)

  const arqroses = arqpictures[0].image;
  const awards = arqpictures[1].image; 

    return(
        <section id='img-container-section'>
          <article className='img-container'>
              <img src={arqroses} alt='nice table' className='main-img'/>
              <img src={awards} alt='person working' className='accent-img'/>
          </article>
          </section>
    )
}

export default PrismaImages;