import React, { useState } from 'react'
import Work from './common/work'
import Title from './common/title'
import projectData from '../data/projectData'
import Project from './project/project'
import { KeyboardBackspace } from '@material-ui/icons'

const ProjectScreen = () => {
  const [selectedProject, setSelectedProject] = useState({})
  const [isProjectedSelected, setIsProjectSelected] = useState(false)
  const handleSelectProject = (id) => {
    const project = projectData.find((data) => data.id === id)
    setSelectedProject(project)
    setIsProjectSelected(true)
  }
  // console.log(selectedProject)
  let translateLeftClass = !isProjectedSelected ? 'translateLeft' : ''
  let translateRightClass = isProjectedSelected ? 'translateRight' : ''

  return (
    <div className="mobile-size padding-4">
      <Title label="Web developer Project" />
      <div
        className={`${
          isProjectedSelected ? 'display-block' : 'display-none'
        } container my-4`}
      >
        <button
          className="back-btn"
          onClick={() => setIsProjectSelected(false)}
        >
          <KeyboardBackspace />
        </button>
      </div>
      <div className={`${translateLeftClass} container my-4 transition-all`}>
        <Project data={selectedProject} />
      </div>

      <div className={`${translateRightClass} container my-4 transition-all`}>
        <div className="row">
          {projectData.map((data) => (
            <Work
              onClick={() => handleSelectProject(data.id)}
              key={data.id}
              title={data.title}
              imageUrl={data.imageUrl}
              status={data.status}
              statusBgColor={data.statusBgColor}
              technologies={data.technologies}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectScreen
