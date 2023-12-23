import { useState } from 'react'

import './App.css'

function App() {

  const [cnt, setCnt] = useState(10)

  // let cnt=10

  const addValue = () =>{
    setCnt((prev)=>prev+1)
    // setCnt((prev)=>prev+1) // batching (bundelling)
    // setCnt((prev)=>prev+1)
    // setCnt((prev)=>prev+1)
    // cnt = cnt+1;
    // console.log(cnt);
  }

  const reduceValue = () => {
    setCnt(cnt-1)
  }

  return (
    <>
      <h1>React course - counter project</h1>
      <h2>counter value : {cnt}</h2>
      <button
      onClick={addValue}
      >Add value</button> {"   "}
      <button
      onClick={reduceValue}
      >remove value</button>
      <p>footer : {cnt}</p>
    </>
  )
}

export default App
