import { createGlobalStyle } from "styled-components";

/**DCCB - Portfolio version 7.10 - 'global.styles' js 
 * file - Features: 
 * 
 *       --> Building styles for 
 *          'prisma-section'. 
 * 
 * Note: Changes may be made in this stylesheet and more
 * styles will be added.
 * 
 *
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

  /**extra added colors for layout building -- start */
  --color-primario:#730039;
  --color-primario-light:hsla(330,100%,23%,0.85);
  --color-primario-dark:hsla(330,100%,23%,0.85);

  --color-secondario:#ffc513;
  --color-secondario-light:hsla(45,100%,54%,0.55);
  --color-secondario-dark:rgba(255,196,19,0.85);

  --color-tertiario:#ff724c;
  --color-tertiario-light:hsla(39,100%,65%,0.55);
  --color-tertiario-dark:rgba(255,115,76,0.85);

  --color-quarternario:#f6eedf;
  --color-quarternario-light:hsla(39,56%,92%,0.6);
  --color-quarternario-dark:hsla(39,56%,92%,0.85);

  --color-black-light:#000;

  /**brands-colors */
  --instagram-brand-bkg: linear-gradient(to bottom, #E4405F, #F3786C, #FFAF7C, #FFD6A3, #FFFFFF);
  --linkdn-brand-bkg:#0072b1;
  --dribbble-brand-bkg: #ea4c89;


  /* Transition duration **/

  --transition-duration: 0.3s;

  /*section title font size**/
  --font-size-title: calc( 2rem + 2vw);

  /*section Padding**/
  --padding-section: 8vh 3vw;

  /**section - font-size*/
  --links-font-size:calc(0.5rem + 1vw);
  --paragraph-font-size:calc(.6rem + 0.637vw);
  --header-font-size:calc(1rem + 0.637vw);

  /**extra added colors and props for layout building -- end */
  
  --clr-black: #222;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 620px;
  
  /*section title font size**/
  --font-size-title: calc( 2rem + 2vw);
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
  font-family: 'Architects Daughter', cursive;
  background: var(--clr-white);
  color: var(--clr-grey-1);
  line-height: 1.7;
  font-size: 62.5%;
  background-color: var(--color-quarternario);
}

.container{
  display: grid;
    
  grid-template-columns: [container-start] 1fr [center-start] repeat(8, [col-start] minmax(min-content,11rem) [col-end]) [center-end] 1fr [container-end];

}

a:link,
a:visited{
  color: var(--color-black-light);
  text-decoration: none;
  font-size: var(--links-font-size);
  padding: 1rem 2rem;
  border-radius: 0.3rem;
  position: relative;
  transition: all var(--transition-duration) cubic-bezier(1,0,0,1);
  z-index: 1;
}

p{
  font-size: var(--paragraph-font-size);
}

h2{
  font-size: var(--header-font-size);
}

li{
  list-style: none;
  margin-bottom: 4rem;
}

section#nav-section{
  grid-column: container-start / container-end;
}

.header_main-nav{
  position: fixed;
  z-index: 2;
}

/** section#prisma-section global styles - start  */
section#prisma-section{
  margin-top: 4rem;
  grid-column: center-start / center-end;
  
  
}

.prisma-section--center{
  margin-top: 6rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 4vh;
  align-items: center;
}

section#intro > h2[class*=title]{
  grid-area: title;
  font-size: var(--font-size-title);
  font-weight: 400;
 
}

section#intro > h2[class*=title],
section#about-me > h2[class*=title],
section#services > h2[class*=title],
section#awards > h2[class*=title]{
  color: #c74bb4;
}

section#intro,
section#about-me{
  padding: var(--padding-section);
  display: grid;

  grid-template-areas:
   'title'
   'para';
   grid-row-gap: 4vh;
   align-items: center;
}

section#about-me{
  grid-row-gap: 1vh;
}

section#intro > p[class*=para],
section#about-me > p[class*=para],
section#awards > ul li p[class*=para]{
  grid-area: para;
  color: black;
  font-weight: 400;
  line-height: 2.8rem;
}
/** section#prisma-section global styles - end  */

section#img-container-section{
  grid-column: col-start 8 / container-end;
}

section#about-me{
  grid-column: center-start / col-end 4;
}

section#about-me > p[class*=para]{
  font-size: 1rem;
}

section#services{
  grid-column: center-start / col-end 7;  
  margin-left: 3rem;
}

section#resumes{
  grid-column: center-start / col-end 7;
  margin-top: 1rem;
  padding: 1rem;
  padding-left: 5rem;
}

.resumes--links{
  margin-top: 2rem;
  display: grid;
}

section#awards{
  grid-column: center-start / col-end 7;

  padding: 3rem;
}

section#awards > h2[class*=title]{
  font-size: 1.5rem;
}

section#awards > ul li p[class*=para]{
  line-height: 2;
  font-size: 1rem;
}

section#social-media-section{
  grid-column: col-start 4 / col-start 7;
  height: 400px;
}

section#footer-section{
  grid-column: container-start / container-end;
  font-size: var(--links-font-size);
}


.intro{
    font-size: calc(1rem + 2vw);
    font-weight: 500;
    padding: 2vh 2rem 6vh var(--font-size-title);
  }

  .img-container{
    padding: 2vh 0.5rem;
  }

@media screen and (max-width:1000px){
    /*all hte links**/
    a:link,
    a:visited{
      font-size: calc(1rem + 1vw);
    }
}

@media screen and (max-width: 800px){
  .prisma-section--center{
    grid-column-gap: 1rem;
  }

  section#about-me{
    padding: 6rem;
  }

  section#services{
    padding: 1rem;
    grid-column: center-start / center-end;
  }

  section#services > h2[class*=title]{
    margin-left: 8rem;
    font-size: 1.5rem;
  }
}

@media screen and (max-width:700px){
  /*all hte links**/
  .content{
    font-size: 2rem;
  }

  section#img-container-section{
    display: none;
  }

  section#intro > p[class*=para]{
    padding: 2rem;
    font-size: 1rem;
  }

  section#intro > h2[class*=title]{
    margin-left: 2rem;
  }

  section#about-me{
    padding-top: 0.25rem;
  }

  section#about-me > p[class*=para]{
    font-size: 1.2rem;
  }
}

`
export default DccbGlobalStyles;