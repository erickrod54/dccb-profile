import { image1,
         image2,
         image3,
         image4,
         image5,
         image6,
         image7,
         image8, 
         image9,
         image10 } from './assets/houses-images/index'

import { archicad, arqrosespic, autocad, awards } from './assets/index.assets'
import { faInstagram, faDribbble, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * DCCB - Portfolio version 7.08 - data js - Features: 
 * 
 *          --> Adding a field 'name' for 'SocialIcons'.
 * 
 * Note: this is made in order to have access to 
 * 'DccbSharedLayoutPage' 
 */

 export const instagram = <FontAwesomeIcon icon={faInstagram} />
 export const linkedin = <FontAwesomeIcon icon={faLinkedin} />
 export const dribble = <FontAwesomeIcon icon={faDribbble} />

 export const SocialIcons = [
   {
        id:1,
        name:'instagram',
        icon:instagram,
        url:'#'
    },
    {
        id:2,
        name:'linkedin',
        icon:linkedin,
        url:'#'
    },{
        id:3,
        name:'dribble',
        icon:dribble,
        url:'#'
    }
]

export const publicAwards = [
    {
        id:1,
        award:'Recognition by the Municipal Chamber of the Mayor\'s Office of the San Cristobal municipality for outstanding performance as a professional, awarded by the President of the Municipal Chamber, Mr. Gustavo Delgado.'
    },
    {
        id:2,
        award:'Recognition by the Municipal Chamber of the Mayor\'s Office of the San Cristobal municipality for outstanding performance as a distinguished professional, presented by council member Alexis Vivas.'
    }
]

export const arqpictures = [
    {
      id:1,
      image:arqrosespic  
    },
    {
      id:2,
      image:awards
    },
]

export const brands = [
    {
      id:1,
      image:autocad  
    },
    {
      id:2,
      image:archicad
    },
]

export const links = [
    {
        id: 1,
        url:'/home',
        text:'home'
    },
    {
        id: 2,
        url:'/projects',
        text:'projects'
    },
    {
        id: 3,
        url:'/design-services',
        text:'design services'
    },
    {
        id: 4,
        url:'/about-me',
        text:'about me'
    },
]

/**test data for projects */
export const projects = [
    {
        id:1,
        title:'luna dorada',
        owner:'dilcia cardenas',
        image: image1,
        price: 25999,
        location:'cruz roja',
        builtarea:255,
        buildingType:'casa familiar'
    },
    {
        id:2,
        title:'galpones mack',
        owner:'henry parra',
        image: image2,
        price: 109999,
        location:'avenida rotaria',
        builtarea:255,
        buildingType:'galpones'
    },
    {
        id:3,
        title:'Locales Comerciales Terminal de pasajeros',
        owner:'Familia Pena',
        image: image3,
        price: 309999,
        location:'Terminal de Pasajeros',
        builtarea:255,
        buildingType:'Locales Comerciales'
    },
    {
        id:4,
        title:'las palmas',
        owner:'manuel zambrano',
        image: image4,
        price: 12599,
        location:'las palmas',
        builtarea:255,
        buildingType:'casa bi familiar'
    },
    {
        id:5,
        title:'clinica santa cruz',
        owner:'maite delgado',
        image: image5,
        price: 4099,
        location:'barrio obrero',
        builtarea:255,
        buildingType:'salud'
    },
    {
        id:6,
        title:'edificios santo tomas de aquino',
        owner:'juan torres',
        image: image6,
        price: 42999,
        location:'santa teresa',
        builtarea:255,
        buildingType:'residencial'
    },
    {
        id:7,
        title:'funeraria los olivos',
        owner:'fatima zambrano',
        image:image7,
        price: 23999,
        location:'gimnasio cubierto',
        builtarea:255,
        buildingType:'servicios funerarios'
    },
    {
        id:8,
        title:'centro comercial la trinidad',
        owner:'oscar parra',
        image:image8,
        price: 59999,
        location:'los sauces',
        builtarea:255,
        buildingType:'comercial'
    },
    {
        id:9,
        title:'planta ozono',
        owner:'oscar parra',
        image:image9,
        price:39999,
        location:'centro',
        builtarea:255,
        buildingType:'industrial'
    },
    {
        id:10,
        title:'panaderia carabobo',
        owner:'jose electricista',
        image:image10,
        price: 20099,
        location:'gran avenida',
        builtarea:255,
        buildingType:'comercial'
    }
]

