import React from "react";
import { useAppContext } from "../context/dccb_profile_context";
import { Link } from 'react-router-dom'
import styled from "styled-components";

/** DCCB - Portfolio version 7.08 - Features: 
 * 
 *      --> Building 'IconsWrapper' style Component.
 * 
 * Note: This index is built in order to rearrange 
 * the components
 */


const SocialMedia = () => {
    
    const { SocialIcons } = useAppContext()

    console.log('these are the social icons ==> ',SocialIcons)

    return(
        <section id='social-media-section'>
            <div className='social-media-section--icons'>
                <IconsWrapper>
                    {SocialIcons.map((icons) => {
                        const { id, icon, name } = icons;

                        return(
                            <Link to='#' key={id} className={`social-media-section--icons--${name}`}>
                                {icon}
                            </Link>
                        )
                    })}
                </IconsWrapper>
            </div>
        </section>
    )
}

const IconsWrapper = styled.div`

    svg{
        font-size: calc(4rem + 0.666667vw);
    }
    
    a{
        list-style-type: none;
        /**20px => 2rem => (1rem + [10/1500] + 100 -0.666667-)
        * Dynamic value for an aspect ratio oof 1500px */
        color: purple;
        
        /***make the transition smooth */
        transition: color 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        padding-bottom: calc(4rem + 0.666667vw);
    }

.social-media-section--icons--instagram{

       &:hover{
        color: var(--color-tertiario) ;
       }
}

.social-media-section--icons--linkedin{

    
    &:hover{
    color: var(--linkdn-brand-bkg) ;
        }

}

.social-media-section--icons--dribble{

       &:hover{
        color: var(--dribbble-brand-bkg) ;
       }
}


`

export default SocialMedia;



