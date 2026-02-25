import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/theme.context'

/** DCCB-rebrand - Portfolio version 1.05 - Features: 
 * 
 *      --> Wrapping using 'ThemeProvider'.
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
