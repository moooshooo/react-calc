import { useState } from 'react'
import './App.css'

function App() {
  const [nyNum1, setValue1] = useState("")
  const [nyNum2, setValue2] = useState("")
  const [funOp, setFunOp] = useState("")
  const [showResults, setshowResults] = useState("")

  const input1 = (e) => {
    setValue1(e.target.value)
  }
  const input2 = (e) => {
    setValue2(e.target.value)
  }

  const btnOp = (e) => {
    setFunOp(e.target.textContent)
    setshowResults(nyNum1+funOp+nyNum2)
  }
  const clearBtn = () => {
    setshowResults("")
    console.log("Cleared showResults")
  }

  return (
    <>
      <div id="main">
        <div>
          <input type='number' onChange={input1} />
        </div>
        <div>
          <input type='number' onChange={input2} /> 
        </div>
        <div>
         <h1>Här: {showResults}</h1>
        </div>
        
        <div>
          <button onClick={btnOp} >+</button>
          <button onClick={btnOp} >-</button>
          <button onClick={btnOp} >*</button>
          <button onClick={btnOp} >/</button>
        </div>

        <div >
          <button onClick={clearBtn} >C</button>
        </div>
      </div>
    </>
  )
}

export default App

