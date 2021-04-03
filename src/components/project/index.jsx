import React from 'react'
import ProjectScreen from '../projectScreen'

const Project = ({ currentNavItem }) => {
  return (
    <div
      className={`${
        currentNavItem === 3 ? 'h-100' : 'h-0'
      } bottom-0 top-2rem w-100 bg-primary-light transition-all overflow-hidden`}
    >
      <ProjectScreen />
    </div>
  )
}

export default Project
