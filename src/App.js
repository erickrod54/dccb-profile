import React from "react";
import { BrowserRouter as Router,
         Routes, 
         Route } from 'react-router-dom';

import { HomePage, AboutMe, Projects, SingleProjectPage, DesignServices, Error } from './pages/index.pages';

/** DCCB - Portfolio version 7.01 - Features: 
 * 
 *          --> Importing components from their
 *              indexes.
 * 
 * Note: Re arranging components in 'HomePage'
 * to change layout. 
 */

function App() {
  return (
  
      <Router>
        <Routes>
            <Route path='/' element={<HomePage />}/> 
            <Route path='/about-me' element={<AboutMe />}/>
            <Route path='/projects' element={<Projects />}/>
            <Route path='/projects/:id' element={<SingleProjectPage />}/>
            <Route path='/design-services' element={<DesignServices />}/>
            <Route path='*' element={<Error />}/>
        </Routes>
      </Router>
    
  );
}

export default App;
