import { useState } from 'react'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    console.log("Project is running");
  }

  return (
    <>
      <Home />
      <h1>Swadeep</h1>
      <button onClick={handleClick}>Click me</button>
    </>
  )
}

export default App
