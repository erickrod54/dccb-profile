import './App.css'
import { MainLayout } from './components/layout/index.layout.components'
import Hero from './components/sections/hero.section.component'

/** DCCB-rebrand - Portfolio version 1.06 - Features: 
 * 
 *      --> Adding Hero Component to MainLayout.
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
