import React from "react";
import styled from 'styled-components';
import { useParams } from 'react-router-dom'
import ProjectImages from '../components/project-images.component';
import Stars from "../components/stars.component";
import AddToCart from "../components/add-to-cart.component";
import { useProjectsContext } from "../context/projects_context";

/**DCCB - Portfolio version 7 - Projects Page - 
 * Features: 
 * 
 *          --> Building 'SingleProjectPage'.
 * 
 *          --> Destructuring the 'id' from
 *              'useParams'.
 *  
 *          --> Destructuring 'projects' from
 *              'useProjectsContext()'.
 * 
 *          --> Filtering and Mapping the single
 *              Projects -by this version testing
 *              it-
 * 
 * Note: still pending to add to the data new 
 * props:
 * 
 *     --> ProjectImages > images
 * 
 *     --> Stars > stars > reviews
 * 
 *     --> AddToCart > project
 * 
 * and this props will be drilled to build
 * each Component
 */

const SingleProjectPage = () => {

    const { id } = useParams()

    const ParamId = Number(id);

    console.log('these are my params ==>', id)

    const { projects } = useProjectsContext();
    
   // console.log('from the projects context ==>', project)

    
    return(
      <Wrapper>
        <h2>Single project Page</h2>
        <h4>project #: {id}</h4>
        {projects.filter((project) => project.id === ParamId ).map((project) => {
      const { 
          buildingType, 
          builtarea, 
          price, 
          title
      } = project;
          return(
            <div key={id}>
              <h5>{title}</h5>
            </div>
          )
        })}
    </Wrapper>
    
    )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProjectPage;