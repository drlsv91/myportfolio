import React from 'react'

const ExperienceInfo = ({ children, companyName, position, year }) => {
  return (
    <div className="bl-primary-dark px-3 mx-2 mt-4">
      <div className="d-flex justify-content-between">
        <div>
          <h1 className="font-size-18px font-weight-bold">{companyName}</h1>
          <h3 className="font-size-16px text-grey">{position}</h3>
        </div>
        <div>
          <p className="c-text-primary-dark font-weight-bold">{year}</p>
        </div>
      </div>
      {children}
    </div>
  )
}

export default ExperienceInfo
