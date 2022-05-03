import styled from 'styled-components';

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
        color: white;
        &:hover{
          color: blanchedalmond;
          text-decoration: underline;
        }
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