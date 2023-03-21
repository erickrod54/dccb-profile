import React from "react";

/** DCCB - Portfolio version 7.11 - PrismaContent - Features: 
 * 
 *      --> Refactoring title.
 * 
 *      --> Modififying reference to BIM Archicad.
 * 
 *      --> Adding 'Important Message' about english
 *          speaker.
 * 
 * Note: This index is built in order to rearrange 
 * the components
 */

const PrismaContent = () => {

    return(
        <section id='intro'>
          <h2 className="intro--title">I'm Dilcia! Welcome to my Website</h2>
              <p className="intro--para">

                Welcome to my website i am <strong>Dilcia C. Cardenas B.</strong>,
                an accomplished <strong>architect with 25 years of experience in 
                the industry.</strong> 
              
                With a mastery of <strong>AutoCAD</strong> dating back to 1997 and
                active to the present date
              
                I see myself <strong>as a valuable asset to any drafting team </strong>. 
                and <strong>My goal</strong> is <strong> to join a prestigious design company</strong> in 
                the <strong>United States</strong> and <strong>bring her wealth of knowledge and 
                skill to contribute to the success of new projects</strong>. 
                Take a look around and <strong>discover the portfolio of this talented 
                architect and learn why she is the right fit for your next project</strong>.
              
              </p>

              <p className="intro--important"><span className="intro--important-color">Important:</span> I do not speak english, but i have no problem to write and take
                projects via text, email or any other written media.
              </p>

          </section>
    )
}

export default PrismaContent;