import React from "react";
import { useAppContext } from "../context/dccb_profile_context";

/** DCCB - Portfolio version 7.10 - Awards - Features: 
 * 
 *      --> Implementing style class naming.
 * 
 * Note: this component contain information about the
 * awards
 */

const Awards = () => {

    const { publicAwards } = useAppContext()

    const award1 = publicAwards[0].award;
    const award2 = publicAwards[1].award;

    return(
        <section id='awards'>
            <h2 className="awards--title">Public Awards</h2>
            <ul>
                <li>
                    <p className="awards--para">{award1}</p>
                </li>
                <li>
                    <p className="awards--para">{award2}</p>    
                </li>
            </ul>
        </section>
    )
}

export default Awards;