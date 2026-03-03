import './App.css'
import { MainLayout } from './components/layout/index.layout.components'
import { Hero, ProjectGallery, Services } from './components/sections/index.sections'

/** DCCB-rebrand - Portfolio version 2.07 - Features: 
 * 
 *      --> Adding ProjectGallery section.
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

function App() {

  return (
    <>
      <MainLayout >
        <Hero />
        <Services />
        <ProjectGallery />
      </MainLayout>
    </>
  )
}

export default App
