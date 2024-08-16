import React from 'react'

function ScoreBoard({ className, score  }) {
  return (
  <div className={className}>
      <div className="card bg-neutral text-neutral-content mt-6 flex justify-center mr-4 ml-4 sm:ml-0">
  <div className="card-body items-center text-center">
    <h2 className="card-title">ScoreBoard</h2>
    <h3>Score: {score}</h3>
  </div>
</div>
      
      </div>
  )
}

export default ScoreBoard