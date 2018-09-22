import React from 'react'

export default () => {
  return (
    <div className="defaultPage">
      <div className="iKnowPage">
        <h2>I know exactly what I want</h2>
        <button className="iKnowButton">Find the best deal!</button>
      </div>
      <div className="notYetPage">
        <h2>Help me find my dream car</h2>
        <button className="notYetButton">Suggest a good choice</button>
      </div>
    </div>
  )
}
