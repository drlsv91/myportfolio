import React from 'react'
import LeftTitle from './leftTitle'
import RightIcons from './rightIcons'

const Brand = ({ data }) => {
  return (
    <div
      className={`${
        data[0].isActive ? 'nav-detail ' : ' bottom-1rem'
      } flex flex-between  position-relative  w-100 px-3 transition-all mobile-padding-bottom`}
    >
      <LeftTitle data={data} />
      <RightIcons />
    </div>
  )
}

export default Brand
