import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import DccbGlobalStyles from "./global.styles";
import App from './App';

/**DCCB - Portfolio version 3 - 'index' js file - 
 * Features: 
 *    
 *          --> Commenting 'index.css' file
 *              to start to clean css code.
 * 
 *          --> Importing and setting 
 *              'DccbGlobalStyles'.
 * 
 * Note: By this point i can start to clean the code
 * for the css sheet.
 */

ReactDOM.render(
  <React.StrictMode>
    <DccbGlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

