import React from 'react'
import Rate from './rate'

const Rating = ({ numberOfDivs, numberOfStrength }) => {
  const divs = []
  if (numberOfDivs || numberOfStrength) {
    for (let i = 0; i < numberOfDivs; i++) {
      divs.push(<Rate />)
    }

    for (let i = 0; i < numberOfStrength; i++) {
      divs[i] = <Rate isRated={true} />
    }
  }
  return (
    <div className="d-flex justify-content-center align-items-center">
      {divs.map((div, i) => {
        return <div key={i}>{div}</div>
      })}
    </div>
  )
}

export default Rating
