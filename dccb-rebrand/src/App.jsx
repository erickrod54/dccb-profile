import './App.css'
import { MainLayout } from './components/layout/index.layout.components'
import { Hero, Services } from './components/sections/index.sections'

/** DCCB-rebrand - Portfolio version 1.19 - Features: 
 * 
 *      --> Adding Services section.
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
      </MainLayout>
    </>
  )
}

export default App
