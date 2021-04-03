import React from 'react'

const LeftTitle = ({ data }) => {
  return (
    <div className={`${data[0].isActive ? 'hide' : ''} mobile-heading`}>
      <h1 className="font-size-25px font-weight-bold text-dark-grey ">
        OLUWALEYE VICTOR
      </h1>
      <h3 className="font-size-18px text-dark-grey">DEVELOPER</h3>
    </div>
  )
}

export default LeftTitle
