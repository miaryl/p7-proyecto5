import React from 'react'
import "./ShuffleButton.scss";

function ShuffleButton({onClick}) {
  return (
    <button className="shuffle-btn" onClick={onClick}>Shuffle</button>
  )
}

export default ShuffleButton