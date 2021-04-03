import React from 'react'

const Rate = ({ isRated }) => {
  return (
    <div className={`${isRated ? 'high-rate' : 'low-rate'} rate mx-1`}></div>
  )
}

export default Rate
