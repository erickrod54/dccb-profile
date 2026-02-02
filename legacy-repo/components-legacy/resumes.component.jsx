import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppContext } from "../context/dccb_profile_context";

/** DCCB - Portfolio version 7.10 - Resumes - Features: 
 * 
 *      --> Implementing style class naming.
 * 
 * Note: this component contain information about the
 * awards
 */

const Resumes = () => {

    const { showresumes, handleShowresumes, setShowresumes } = useAppContext()

    useEffect(() => {
        setShowresumes(true)
    },[setShowresumes])

    return(
        <section id='resumes'>
            <Wrapper>
                <button className='resumes--button' onClick={handleShowresumes}>
                    Download my resumes
                </button>

                {!showresumes ?
                <div className="resumes--links">
                    <a href='https://drive.google.com/file/d/1GIhfqOMCDBTnccd_0isj4Zwzs1PQls2n/view?usp=share_link' target="_blank" rel="noreferrer">my resume ( english )</a>
                    <a href='https://drive.google.com/file/d/1l73BuuT4TmyMLv0Lg94aoHkuApMGF2kB/view?usp=share_link' target="_blank" rel="noreferrer">my resume ( spanish )</a>
                </div>    
                
                :
                null
                }
            </Wrapper>
        </section>
    )
}

const Wrapper = styled.div`
    .resumes--button {
        background: #9B0000;
        background: linear-gradient(to right, #9B0000, #FF5733);
        border: none;
        border-radius: 12px;
        color: white;
        cursor: pointer;
        font-size: 16px;
        padding: 10px 20px;
        border: 1px solid black;

        &:hover{
            background: linear-gradient(to right, #FF5733 ,#9B0000);
            transition: all var(--transition-duration) cubic-bezier(1,0,0,1) ease-in-out;
        }
    }

    a{
        text-transform: capitalize;

        &:hover{
            text-decoration: 10px underline purple;
        }
    }
`

export default Resumes;