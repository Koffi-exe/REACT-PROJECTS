import { useState } from 'react'
import './App.css'
import Slider from './component/Slider'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Slider url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}/>
   </>
  )
}

export default App
