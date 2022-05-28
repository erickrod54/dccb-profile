import styled from 'styled-components';

/**DCCB - Portfolio version 3 - 'styled-components' js
 * file - Features: 
 * 
 *          --> Replacing hex colors code by 
 *              --variables, so they can change 
 *              once 'theme' is set.
 * 
 * Note: By this point i can start to clean the code
 * for the css sheet.
 */

export const NavLinks = styled.div`
/**when it comes to 'Theming' this will have the same
* styles that hipsterButton but wil colors of this app*/
    max-width: var(--max-width);
    display: flex;
    padding: 4rem;
    list-style-type: none;
    margin:  0 auto;
    margin-bottom: 4rem;
    background: var(--crimson-red);
    border-radius: 1rem;

    
    li{
      width: 10rem;
      display: flex;
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
    
    @media screen and (max-width: 500px) {
      display: grid;
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