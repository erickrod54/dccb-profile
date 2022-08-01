import React from "react";
import { BrowserRouter as Router,
         Routes, 
         Route } from 'react-router-dom';

import HomePage from "./pages/home-page";
import AboutMe from "./pages/about.me-page";
import Projects from "./pages/projects-page";
import SingleProjectPage from './pages/single.project-page'
//import Project from "./components/project.component";
import DesignServices from "./pages/services-page";


import NavBar from './components/navbar.component';
import SideBar from "./components/sidebar.component";
import Footer from "./components/footer.component";
import Error from "./pages/error-page";

/** DCCB - Portfolio version 7 - Features: 
 * 
 *          --> Replacing 'Project' element
 *              in '/projects/:id' path for 
 *              'SingleProjectPage' Component 
 *               in order to render it.
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
              <Route path='/projects/:id' element={<SingleProjectPage />}/>
              <Route path='/design-services' element={<DesignServices />}/>
              <Route path='*' element={<Error />}/>
              
        </Routes>
      <Footer />
      </Router>
    
  );
}

export default App;
