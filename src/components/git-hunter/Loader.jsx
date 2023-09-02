import React from 'react'
import spinner from "../../assets/spinner.gif"
const Loader = () => {
  return (
    <div>
      <img className='spinner' src={spinner} alt="Loading.." />
    </div>
  )
}

export default Loader
