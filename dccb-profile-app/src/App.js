import React from 'react';
import NavBar from './components/navbar/navbar.component';
import Prisma from './components/prisma/prisma.component';
import Projects from './components/projects/projects.component';

/**I have to install sass library*/
function App() {
  return (
    <div className="App">
      <NavBar />
      <Prisma />
      <Projects />
    </div>
  );
}

export default App;
