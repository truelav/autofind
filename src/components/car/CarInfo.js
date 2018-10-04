import React from 'react'

export default (props) => {

  const car = props.car  
  
  return (
    <div className="carInfo">
        <h2>{car.build.make}</h2>
        <h2>{car.build.model}</h2>
        <h3>Year: {car.build.year} Miles: {car.price}</h3>
    </div> 
  )
}
