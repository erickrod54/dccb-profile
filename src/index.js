import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import DccbGlobalStyles from "./global.styles";
import App from './App';
import { AppProvider } from '../src/context/dccb_profile_context'
import { ProjectProvider } from '../src/context/projects_context'
import { Helmet } from 'react-helmet';

/**DCCB - Portfolio version 7.10 - 'index' js file - 
 * Features: 
 * 
 *          --> Importing 'Helmet' to set a 'title'
 *              to dccb portfolio, nad meta tag.
 * 
 *          --> Changing versioning to two digits.
 * 
 * Note: Implementing Helmet to set some initial SEO.
 */

ReactDOM.render(
  <>
  <Helmet>
    <meta charSet="utf-8" />
      <title>DCCB - ARQ Portfolio</title>
      <link rel="canonical" href="https://dccb57.netlify.app" />
    <meta name="description" content="DCCB Portfolio with my job background information and current work and projects on arquitecture design also Project Management | AutoCAD Drafter | Strategic Planning | Urban Planning | Urban Design | Sustainable Design | Commercial Design | Residential Design | Product Development | Project Planning"></meta>
  </Helmet>
  <React.StrictMode>
    <DccbGlobalStyles />
    
    <AppProvider>
      <ProjectProvider>
        <App />
      </ProjectProvider>
    </AppProvider>
  </React.StrictMode>
  </>,
  document.getElementById('root')
);

