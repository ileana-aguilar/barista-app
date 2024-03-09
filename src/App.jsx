import { useState } from 'react'
import BaristaForm from './Components/BaristaForm';
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1 className='title'>On My Grind</h1>
      <p>So you think barista? Let's put that to the test... </p>
    </div>
    <BaristaForm/>
    </>
  )
}

export default App
