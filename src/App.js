import React from "react";
import { BrowserRouter as Router,
         Routes, 
         Route } from 'react-router-dom';

import { HomePage, AboutMe, Projects, SingleProjectPage, DesignServices, Error, DccbSharedLayoutPage } from './pages/index.pages';

/** DCCB - Portfolio version 7.04 - Features: 
 * 
 *      --> Importing 'DccbSharedLayoutPage' 
 *          and wrapping the routes with it.
 * 
 * Note: This is made in order the get the 
 * 'Navbar' and 'Footer' present over the
 * navigation. 
 */

function App() {
  return (
  
      <Router>
        <Routes>
            <Route path='/' element={<DccbSharedLayoutPage />}>
              <Route index path='/home' element={<HomePage />}/> 
              <Route path='/about-me' element={<AboutMe />}/>
              <Route path='/projects' element={<Projects />}/>
              <Route path='/projects/:id' element={<SingleProjectPage />}/>
              <Route path='/design-services' element={<DesignServices />}/>
              <Route path='*' element={<Error />}/>
            </Route>
        </Routes>
      </Router>
    
  );
}

export default App;
