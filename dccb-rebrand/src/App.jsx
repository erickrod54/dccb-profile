import './App.css'
import { MainLayout } from './components/layout/index.layout.components'
import { AboutMeDCCB, Hero, ProjectGallery, Services, TechnicalAuthority } from './components/sections/index.sections'

/** DCCB-rebrand - Portfolio version 3.03 - Features: 
 * 
 *      --> Adding AboutMeDCCB section.
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
        <AboutMeDCCB />
      </MainLayout>
    </>
  )
}

export default App
