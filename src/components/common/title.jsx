import React from 'react'

const Title = ({ label, underlineStyle = 'bt-normal' }) => {
  return (
    <div
      className={`${underlineStyle} font-size-18px bb-after__normal position-relative pb-2 font-weight-bold`}
    >
      {label}
    </div>
  )
}

export default Title
