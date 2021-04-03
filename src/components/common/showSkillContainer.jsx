import React from 'react'

const ShowSkillContainer = ({ leftText, rightComponent, styles }) => {
  return (
    <div className={`${styles ? styles : ''} d-flex justify-content-between `}>
      <div className="mr-2">{leftText}</div>

      {rightComponent}
    </div>
  )
}

export default ShowSkillContainer
