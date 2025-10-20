import { useState } from 'react'
import './App.css'

console.log("Powered by MoS\n==========")

function App() {
  const [value1, setValue1] = useState("")
  const [value2, setValue2] = useState("")
  const [funOp, setFunOp] = useState("")
  const [showResults, setShowResults] = useState("")

/*   //Denna ska visa display
  const [display, showOnDisplay] = useState("") */

  const input1 = (e) => setValue1(e.target.value)
  const input2 = (e) => setValue2(e.target.value)

  // Funktion som gör själva beräkningen
  const calc = (value1, value2, funOp) => {
    const n1 = Number(value1)
    const n2 = Number(value2)

    switch (funOp) {
      case '+':
        return n1 + n2
      case '-':
        return n1 - n2
      case '*':
        return n1 * n2
      case '/':
        return n2 !== 0 ? n1 / n2 : "Fel: /0"
      default:
        return "Ingen operator"
    }
  }

  const btnOp = (e) => {
    setFunOp(e.target.textContent)
  }

  const evaluate = () => {
    const result = calc(value1, value2, funOp)
    setShowResults(result)
    console.log("Du borde se resultat!")
  }

  const clearBtn = () => {
    setValue1("")
    setValue2("")
    setFunOp("")
    setShowResults("")
    console.log("Cleared showResults")
  }

  return (
    <>
      <div id="calcH">
        <div>
          <input type='number' value={value1} onChange={input1} />
        </div>

        <div>
          <button onClick={btnOp}>+</button>
          <button onClick={btnOp}>-</button>
          <button onClick={btnOp}>*</button>
          <button onClick={btnOp}>/</button>
        </div>
        <div>
          <input type='number' value={value2} onChange={input2} /> 
        </div>

        <div>
          <button onClick={clearBtn}>C</button>
          <button onClick={evaluate}>=</button>
        </div>
        <div>
         <h1>Här: {showResults}</h1>
        </div>
      </div>
    </>
  )
}

export default App