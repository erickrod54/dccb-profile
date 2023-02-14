import React from "react";
import { useState } from "react";
import styled from "styled-components";

/** DCCB - Portfolio version 7.04 - Resumes - Features: 
 * 
 *      --> Building 'Resumes' Component.
 * 
 * Note: this component contain information about the
 * awards
 */

const Resumes = () => {

    const [ showresumes, setShowresumes ] = useState(false);

    const handleShowresumes = () => {
        setShowresumes(!showresumes)
    }

    return(
        <section id='resumes-buttons'>
            <Wrapper>
                <button className='resume-button' onClick={handleShowresumes}>
                    Download my resumes
                </button>

                {!showresumes ?
                <>
                    <a href='https://drive.google.com/file/d/1GIhfqOMCDBTnccd_0isj4Zwzs1PQls2n/view?usp=share_link' target="_blank" rel="noreferrer">my resume ( english )</a>
                    <a href='https://drive.google.com/file/d/1l73BuuT4TmyMLv0Lg94aoHkuApMGF2kB/view?usp=share_link' target="_blank" rel="noreferrer">my resume ( spanish )</a>
                </>
                :
                null
                }
            </Wrapper>
        </section>
    )
}

const Wrapper = styled.div`
    .resume-button {
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