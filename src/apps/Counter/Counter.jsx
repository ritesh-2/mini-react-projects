import React, { useState } from 'react'
import ResetIcon from "../../assets/reset.svg"
import "./Counter.css"

const Count = ({ count }) => {
  return (
    <>
      <div className='circle-box'>
        <span>{count}</span>
      </div>
    </>
  )
}


const Counter = () => {

  const [count, setCount] = useState(0);

  const hanldeIncreaseCounter = () => {
    setCount(state => state += 1)
  }

  const handleDecreaseCounter = () => {
    if (count > 0) {
      setCount(state => state -= 1)
    }
  }

  return (
    <div className='container'>
      <div className='wrapper'>

        <button onClick={() => setCount(0)} className='resetButton'>
          <img src={ResetIcon} alt="Reset" />
        </button>
        <Count count={count} />
        <div className='counter-btns'>
          <button onClick={hanldeIncreaseCounter} className='add-btn'>+</button>
          <button onClick={handleDecreaseCounter} className='subtract-btn'>-</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
