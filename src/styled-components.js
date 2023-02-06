import styled from 'styled-components';

/**DCCB - Portfolio version 5 - 'styled-components' js
 * file - Features: 
 * 
 *          --> Building Global Styles for 
 *            'NavLinks' Style Component.
 * 
 *          --> Building 'url-links' 
 *              and 'right-side' style 
 *              classes on 'NavLinks' 
 *              Style Component.
 * 
 *           -->Building 'ProjectsWrapper'.
 *  
 *           -->Building 'ProjectWrapper'. 
 * 
 * 
 * Note: this modifications and the two style
 * Components added made better the responsive
 * experience 
 */

export const NavLinks = styled.div`
/**when it comes to 'Theming' this will have the same
* styles that hipsterButton but wil colors of this app*/

/**these are styles applied to  'url-links' 
* and 'right-side' style classes */
display: flex;
justify-content: space-between;
max-width: var(--max-width);
padding: 4rem;
margin-bottom: 4rem;
background: var(--crimson-red);
border-radius: 1rem;
margin:  0 auto;
flex-wrap: wrap;

/**first element in 'Navliks' */

/**this is where the navigation links are */
    .url-links{
      font-size: 1.5rem;
      
      
      text-transform: capitalize;
      p{
        color: var(--clr-font-white);
        &:hover{
          color: var(--blanched-almond);
          text-decoration: underline;
        }
        
      }
    }
    
    /**second element in 'Navliks' */

    /**the elements in the right side as 
    toogle and authentication */
    .right-side{
      
      .btn-toggle{
        margin-left: 15rem;
        background-color: var(--blanched-almond);
        color: var(--crimson-red);
        font-weight: 700;

        &:hover{
          background-color: var(--dark-blood-red);
          color: var(--blanched-almond);
        }
      }     
    }
    
  `


export const Container = styled.div`
    width: 100vw;
    margin: 0 auto;
    max-width: var(--max-width);
    background: var(--clr-primary-1);
  
`

export const SectionOutlet = styled.div`
    /* section */
    
    .section,
    .container {
      width: 90vw;
      margin: 0 auto;
      max-width: var(--max-width);
    }
    
    @media screen and (min-width: 992px) {
      .section {
        width: 95vw;
  }
}
`

export const HeaderButton = styled.button`
  background-color: var(--clr-font-white);

  
`
/**------new styled Components------- */

export const ProjectsWrapper = styled.div`
  /**this are props for the h2 and '.projects-grid' 
  style class */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2rem;

  h2{
    width: 100%;
    text-align: center;
  }

  .projects-grid{
    
    width: 90vw;
    max-width: var(--max-width);
    margin: 0 auto;
    margin-bottom: 5rem;
    display: grid;
    /**this is the grid for '--max-width'*/  
    grid-template-columns: repeat(3, 1fr);
    
    /**---these make the grid responsive---*/
    @media screen and (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media screen and (max-width: 900px) {
      grid-template-columns: repeat(1, 1fr);
    }
    gap: 2rem;
  }
`

export const ProjectWrapper = styled.div`
  background: var(--clr-font-white);
  border-radius: var(--radius);
  padding: 1rem 2rem;

  /**style set for the pricing button */
  .btn-primary{
      text-transform: capitalize;
      margin-left: 15rem;
      padding: 0.25rem;
      border-radius: 0.25rem;
      background-color: var(--blanched-almond);
      color: var(--crimson-red);
      font-weight: 700;

        &:hover{
          background-color: var(--dark-blood-red);
          color: var(--blanched-almond);
        }
    }

    span{
      font-weight: 700;
    }
  
  h1,
  h2,
  h3,
  h4 {
    color: var(--blood-red);
  }
`