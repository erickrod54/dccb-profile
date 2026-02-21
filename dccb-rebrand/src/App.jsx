import './App.css'
import { MainLayout } from './components/layout/index.layout.components'
import TailwindTest from './components/tailwind.test.component'
import { Button } from './components/ui/button'

/** DCCB-rebrand - Portfolio version 1.04 - Features: 
 * 
 *      --> Testing 'Button' from shadcn.
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

function App() {

  return (
    <>
      <MainLayout />
      <TailwindTest />
      <Button onClick={() => alert('shadcn click')}>
        Shadcn button 
      </Button>
    </>
  )
}

export default App
