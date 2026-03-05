import './App.css'
import { MainLayout } from './components/layout/index.layout.components'
import { Hero, ProjectGallery, Services, TechnicalAuthority } from './components/sections/index.sections'

/** DCCB-rebrand - Portfolio version 2.16 - Features: 
 * 
 *      --> Adding TechnicalAuthority section.
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
        <TechnicalAuthority />
      </MainLayout>
    </>
  )
}

export default App
