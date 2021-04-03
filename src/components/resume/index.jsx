import React from 'react'
import ResumeScreen from '../resumeScreen'

const Resume = ({ currentNavItem }) => {
  return (
    <div
      className={`${
        currentNavItem === 2 ? 'h-100' : 'h-0'
      } bottom-0 top-2rem w-100 bg-primary-light transition-all overflow-hidden`}
    >
      <ResumeScreen />
    </div>
  )
}

export default Resume
