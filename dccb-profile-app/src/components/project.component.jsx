import React from "react";
import { Link } from 'react-router-dom';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import { formatPrice } from '../utils/helpers';
import styled from "styled-components";

/**DCCB - Portfolio version 6 - Project Component- 
 * Features: 
 * 
 *     --> Destructuring 'image', 'buildingType', 
 *        'price', 'id' - comes from previusly
 *         destructured on 'ProjectPreview' 
 *         Component -.
 * 
 *     --> Setting a 'Link' Component
 *         with a url dynamicly using 'id'
 *         prop
 * 
 *      --> Importing and Placing 'formatPrice'
 *          to give decimal format for 'price'
 * 
 *      --> Styling 'Project' Component using 
 *          the 'Wrapper' Style Component.
 * 
 * Note: the 'price' prop is cents format because 
 * payments processors need it in cents to make
 * calculations, 'formatPrice' don't make a convertion
 * is only a format to end-user.
 * 
 * By the momment the 'NavContainer' Style Component 
 * will be set in each component, when the UI design 
 * get done they will renamed and live at 
 * 'styled-components.js'
 */

/**test for the image successfull */
const Project = ({ image, buildingType, price, id }) => {

    return(
        <Wrapper>
        <div className='container'>
          <img src={image} alt={buildingType}/>
          <Link to={`/projects/${id}`} className='link'>
            <BsArrowUpRightSquare />
          </Link>
        </div>
        <footer>
          <h5>{buildingType}</h5>
          <p>{ formatPrice(price) }</p>
        </footer>
      </Wrapper>      
    )
}

const Wrapper = styled.article`
  .container {
    position: relative;
    background: var(--clr-black);
    border-radius: var(--radius);
  }
  img {
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: var(--radius);
    transition: var(--transition);
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-14);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover img {
    opacity: 0.5;
  }
  .container:hover .link {
    opacity: 1;
  }
  footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer h5,
  footer p {
    margin-bottom: 0;
    font-weight: 400;
  }

  footer p {
    color: var(--clr-green-dark);
    letter-spacing: var(--spacing);
  }
`

export default Project;