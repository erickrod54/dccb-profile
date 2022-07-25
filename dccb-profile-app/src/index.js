import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import DccbGlobalStyles from "./global.styles";
import App from './App';
import { AppProvider } from '../src/context/dccb_profile_context'
import { ProjectProvider } from '../src/context/projects_context'

/**DCCB - Portfolio version 6 - 'index' js file - 
 * Features: 
 * 
 *          --> Wrapping with the 'AppProvider' the
 *              whole application.
 * 
 *          --> Importing and placing 'ProjectProvider'
 *              to provide all concerns about projects.
 * 
 * Note: Version 6 start implementing context, and reducer to 
 * handle much better the actions implementation.
 * 
 * By this point i can start to provide values from
 * the dccb_profile_context > AppProvider to any Component
 * that i need it
 * 
 * for this version i'm going to provide a test value as
 * 'data' on 'Home' Component
 */

ReactDOM.render(
  <React.StrictMode>
    <DccbGlobalStyles />
    
    <AppProvider>
      <ProjectProvider>
        <App />
      </ProjectProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

