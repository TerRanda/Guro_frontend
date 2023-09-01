import React from 'react'

function Timeinfo({ currentTime, duration }) {
  return (
    <div className="timeInfo">
      <p>
        {currentTime.toFixed(1)}초 / {duration.toFixed(1)}초
      </p>
      <progress
        style={{ width: '100%' }}
        min="0"
        max="100"
        value={currentTime * 100 / duration}
      ></progress>
    </div>
  )
}

export default Timeinfo