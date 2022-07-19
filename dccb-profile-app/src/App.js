import React from "react";
import { BrowserRouter as Router,
         Routes, 
         Route } from 'react-router-dom';

import HomePage from "./pages/home-page";
import AboutMe from "./pages/about.me-page";
import Projects from "./pages/projects-page";
import Project from "./components/project.component";
import DesignServices from "./pages/services-page";


import NavBar from './components/navbar.component';
import SideBar from "./components/sidebar.component";
import Footer from "./components/footer.component";
import Error from "./pages/error-page";

/** DCCB - Portfolio version 6 - Features: 
 * 
 *          --> Adding the '/design-services'
 *              new route.
 *  
 *          --> Renaming 'SingleProject' as 
 *              'Project' Component.
 * 
 *          --> Removing 'SharedLayout' 
 *              Route and set in up the
 *              route at 'HomePage'
 * 
 *          --> Importing and Placing 
 *              'SideBar' Component.
 * 
 * Note: SideBar will have a navigation acroos
 * the site as NavBar and Footer.
 */

function App() {
  return (
  
      <Router>
        <NavBar />
        <SideBar />
        <Routes>
      
              <Route path='/' element={<HomePage />}/> 
              <Route path='/about-me' element={<AboutMe />}/>
              <Route path='/projects' element={<Projects />}/>
              <Route path='/projects/:id' element={<Project />}/>
              <Route path='/design-services' element={<DesignServices />}/>
              <Route path='*' element={<Error />}/>
              
        </Routes>
      <Footer />
      </Router>
    
  );
}

export default App;
