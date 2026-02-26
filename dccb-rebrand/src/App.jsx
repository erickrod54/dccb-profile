import './App.css'
import { MainLayout } from './components/layout/index.layout.components'
import { Hero } from './components/sections/index.sections'

/** DCCB-rebrand - Portfolio version 1.08 - Features: 
 * 
 *      --> Changing Hero import path again.
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

function App() {

  return (
    <>
      <MainLayout >
        <Hero />
      </MainLayout>
    </>
  )
}

export default App
