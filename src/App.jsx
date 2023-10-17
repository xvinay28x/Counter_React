import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const add = () => {
    setCount(count + 1)
  }
  const sub = () => {
    setCount(count-1)
  }
  return (
    <>
      <h1>{count}</h1>
      <button id="add" onClick={add}> + </button>
      <button id="sub" onClick={sub}> - </button>
    </>
  )
}

export default App
