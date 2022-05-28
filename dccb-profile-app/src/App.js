import React from "react";
import { BrowserRouter as Router,
         Routes, 
         Route } from 'react-router-dom';

import HomePage from "./pages/home-page";
import AboutMe from "./pages/about.me-page";
import Projects from "./pages/projects-page";
import SingleProject from "./components/single-project.component";

import SharedLayout from "./components/shared-layout.component";
import Footer from "./components/footer.component";
import Error from "./pages/error-page";

/**
 * DCCB - Portfolio version 2 - Features: 
 * 
 *          --> Removing fragments.
 * 
 * Note 'key' prop warning refers to the existence of an 'id'
 * for each child -this is applied to handle mapping a list
 * of elements this case the links that i am mapping for the 
 * NavBar-
 * 
 * Sometimes applying fragments can throw 'key' prop warnings
 */

function App() {
  return (
  
      <Router>
      
        <Routes>
            <Route path='/' element={<SharedLayout />}>
              <Route index element={<HomePage />}/> 
              <Route path='/about-me' element={<AboutMe />}/>
              <Route path='/projects' element={<Projects />}/>
              <Route path='/projects/:projectId' element={<SingleProject />}/>
              <Route path='*' element={<Error />}/>
            
            </Route>
        </Routes>
      <Footer />
      </Router>
    
  );
}

export default App;
