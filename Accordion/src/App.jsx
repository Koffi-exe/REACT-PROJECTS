import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordion from './components/Accordion/Accordion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Accordion />
    </>
  )
}

export default App
