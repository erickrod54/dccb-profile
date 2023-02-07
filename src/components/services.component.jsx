import React from "react";
import { useAppContext } from "../context/dccb_profile_context";

/**DCCB - Portfolio version 7.02 - 'ServicesComponent' 
 * Component- Features: 
 * 
 *     --> Destructuring 'brands' from the context
 * 
 *     --> Placing icons and changing the title.
 * 
 * Note: fter this version i will use the 'id' for the 
 * new layout.
 */
const ServicesComponent = () => {

    const { brands } = useAppContext()

    console.log('brands ==>', brands)   
    
    const autocad = brands[0].image;
    const archicad = brands[1].image;

    return(
        <section id='services-component-section'>
            <h2>I Design in </h2>
            <img src={autocad} alt='autocad'></img>
            <img src={archicad} alt='archicad'></img>
        </section>
    )
}

export default ServicesComponent;