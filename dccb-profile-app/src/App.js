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
 * DCCB - Portfolio version 1 - Features: 
 * 
 *          --> Implementing Routing
 *          --> Importing Components
 *          --> Creating an 'Error' Page
 *          --> Installing styled and router-dom 
 *              libraries.
 *          --> Making global.styles to clear styles
 *          --> restructuring the whole application
 * 
 * Note:Here i can handle all the routting, and other features
 * as sharedlayout, there is an issue pending to solve with it
 */

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
