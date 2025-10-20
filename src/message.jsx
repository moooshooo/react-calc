import { useState } from 'react'
import './App.css'

function App() {
  const [nyNum, setValue] = useState("")

  const onDisplay= (e) => {
    const operatorsMos = ["x","+","*","/","-"]
    const calcOperators = operatorsMos
    
    if(nyNum !== ""){
      /* setValue(nyNum + e.target.textContent) */
    }else if(nyNum === calcOperators){
      setValue(nyNum + calcOperators)
    }
    else{
      setValue(e.target.textContent)
    }
  }

  const clearBtn = () => {
    setValue("")
  }

  return (
    <>
      <div id="main">
        <div id="display">
          {/* //Testar lyssna från en annan Inputfält
          <input id="inputDisplay" type="text" value={nyNum} /> */}
          <input id="onDisplay" type="text" onChange={onDisplay} value={nyNum} readOnly />
        </div>
        <div id="buttons">
          <button className='btn' onClick={onDisplay}>1</button>
          <button className='btn' onClick={onDisplay}>2</button>
          <button className='btn' onClick={onDisplay}>3</button>
          <button className='btn' onClick={onDisplay}>4</button>
          <button className='btn' onClick={onDisplay}>5</button>
          <button className='btn' onClick={onDisplay}>6</button>
          <button className='btn' onClick={onDisplay}>7</button>
          <button className='btn' onClick={onDisplay}>8</button>
          <button className='btn' onClick={onDisplay}>9</button>
        </div>
        <div id="operators">
          <button className='btnO' onClick={onDisplay}>+</button>
          <button className='btnO' onClick={onDisplay}>-</button>
          <button className='btnO' onClick={onDisplay}>*</button>
          <button className='btnO' onClick={onDisplay}>/</button>
          <button className='btnO' onClick={Result}>=</button>
          <button className='btnC' onClick={clearBtn}>C</button>
        </div>
      </div>
    </>
  )
}

export default App

