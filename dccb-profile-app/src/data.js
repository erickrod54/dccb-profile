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
/**
 * DCCB - Portfolio version 6 - data js - Features: 
 * 
 *          --> Adding to 'links' data the 
 *             'design services' link prop.
 * 
 *          --> Adding 'image' and 'price'
 *              props to 'projects test data' 
 * 
 * Note: 'projects' test data is a sample data, pending
 * shape a complete data.
 * 
 * By the momment the for 'projects' data i'll handle
 * local images until i get done the definitive data
 * shape
 */

export const links = [
    {
        id: 1,
        url:'/',
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

