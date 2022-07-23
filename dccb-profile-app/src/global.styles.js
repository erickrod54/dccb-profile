import { createGlobalStyle } from "styled-components";

/**DCCB - Portfolio version 6 - 'global.styles' js 
 * file - Features: 
 * 
 *          --> Continue css 'DccbGlobalStyles' to 
 *              start clean css sheet.
 * 
 *          --> Adding new stylesheet css.
 * 
 * Note: Pending to decide if these classes will be
 * become in styled component.
 */
const DccbGlobalStyles = createGlobalStyle`
.dark-theme{
  --crimson-red: #9B0000;
  --blood-red: #6D0000;
  --dark-blood-red: #580000;
  --dark-chocolate: #430000;

  --clr-bcg-black:#1A1110;
  --clr-font-white: #fff;
  --blanched-almond:#ffebcd;
  --complement-almond-1:#cde1ff;
  --complement-almond-2:#faffcd;

  /**container-section size */
  --max-width: 1170px;

  h1,
  h2,
  h3,
  h4 {
    color: var(--clr-font-white);
  }

}

.light-theme{
  --crimson-red: #9B0000;
  --blood-red: #6D0000;
  --dark-blood-red: #580000;
  --dark-chocolate: #430000;
  --raisin-black: #242124;
  

  --clr-bcg-black:#f2f4f8;
  --clr-font-white: #fff;
  --blanched-almond:#ffebcd;
  --complement-almond-1:#cde1ff;
  --complement-almond-2:#faffcd;

  /**container-section size */
  --max-width: 1170px;
}

/*
=============== 
Variables
===============
*/

:root {
  /* dark shades of primary color*/
  --clr-primary-1: hsl(22, 28%, 21%);
  --clr-primary-2: hsl(22, 28%, 29%);
  --clr-primary-3: hsl(22, 28%, 37%);
  --clr-primary-4: hsl(22, 28%, 45%);
  /* primary/main color */
  --clr-primary-5: hsl(22, 31%, 52%);
  /* lighter shades of primary color */
  --clr-primary-6: hsl(22, 31%, 60%);
  --clr-primary-7: hsl(22, 31%, 67%);
  --clr-primary-8: hsl(20, 31%, 74%);
  --clr-primary-9: hsl(22, 31%, 81%);
  --clr-primary-10: hsl(22, 31%, 88%);
  /**dccb colors - crimsom red shades */
  --clr-primary-11:  hsla(2, 100%, 21%, 1);
  --clr-primary-12:  hsla(2, 100%, 29%, 1);
  --clr-primary-13:  hsla(2, 100%, 37%, 1);
  --clr-primary-14:  hsla(2, 100%, 45%, 1);
  /* primary/main color */
  --clr-primary-15:  hsla(2, 100%, 52%, 1);
  /* lighter shades of primary color */
  --clr-primary-16:  hsla(2, 100%, 61%, 1);
  --clr-primary-17:  hsla(2, 100%, 67%, 1);
  --clr-primary-18:  hsla(2, 100%, 74%, 1);
  --clr-primary-19:  hsla(2, 100%, 81%, 1);
  --clr-primary-20: hsla(2, 100%, 88%, 1);
  /* darkest grey - used for headings */
  --clr-grey-1: hsl(209, 61%, 16%);
  --clr-grey-2: hsl(211, 39%, 23%);
  --clr-grey-3: hsl(209, 34%, 30%);
  --clr-grey-4: hsl(209, 28%, 39%);
  /* grey used for paragraphs */
  --clr-grey-5: hsl(210, 22%, 49%);
  --clr-grey-6: hsl(209, 23%, 60%);
  --clr-grey-7: hsl(211, 27%, 70%);
  --clr-grey-8: hsl(210, 31%, 80%);
  --clr-grey-9: hsl(212, 33%, 89%);
  --clr-grey-10: hsl(210, 36%, 96%);
  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  
  --clr-black: #222;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 620px;
}
/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: var(--clr-white);
  color: var(--clr-grey-1);
  line-height: 1.5;
  font-size: 0.875rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
hr {
  border: none;
  border-top: 1px solid var(--clr-grey-8);
}
h1,
h2,
h3,
h4,
h5 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}
h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.5rem;
}
h4 {
  font-size: 1.25rem;
}
h5 {
  font-size: 0.875rem;
}
p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-3);
}
@media screen and (min-width: 800px) {
  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
}
/*  global classes */

/* section */
.section {
  padding: 5rem 0;
}
.section-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}

@media screen and (min-width: 992px) {
  .section-center {
    width: 95vw;
  }
}
.text-center {
  text-align: center;
}
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.loading {
  width: 6rem;
  height: 6rem;
  margin: 0 auto;
  margin-top: 10rem;
  border-radius: 50%;
  border: 4px solid #ccc;
  border-top-color: var(--clr-primary-5);
  animation: spinner 0.6s linear infinite;
}

.btn {
  text-transform: uppercase;
  background: var(--clr-primary-14);
  color: var(--clr-primary-10);
  padding: 0.375rem 0.75rem;
  letter-spacing: var(--spacing);
  display: inline-block;
  font-weight: 400;
  transition: var(--transition);
  font-size: 0.875rem;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border-radius: var(--radius);
  border-color: transparent;
}
.btn:hover {
  color: var(--clr-primary-1);
  background: var(--clr-primary-16);
}
.title {
  text-align: center;
}
.title .underline {
  width: 6rem;
  height: 0.25rem;
  background: #49a6e9;
  background: var(--clr-primary-13);
  margin-left: auto;
  margin-right: auto;
}
.page-100 {
  min-height: calc(100vh - 10rem);
  padding: 5rem 0;
}
.page {
  min-height: calc(100vh - (20vh + 10rem));
}

`
export default DccbGlobalStyles;