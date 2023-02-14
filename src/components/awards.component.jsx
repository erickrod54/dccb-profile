import React from "react";
import { useAppContext } from "../context/dccb_profile_context";

/** DCCB - Portfolio version 7.04 - Awards - Features: 
 * 
 *      --> Building 'Awards' Component.
 * 
 * Note: this component contain information about the
 * awards
 */

const Awards = () => {

    const { publicAwards } = useAppContext()

    const award1 = publicAwards[0].award;
    const award2 = publicAwards[1].award;

    return(
        <section id='awards-section'>
            <h2>Public Awards</h2>
            <ul>
                <li>
                    <p>{award1}</p>
                </li>
                <li>
                    <p>{award2}</p>    
                </li>
            </ul>
        </section>
    )
}

export default Awards;