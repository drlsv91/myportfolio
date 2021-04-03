import React from 'react'
import { NavLink } from 'react-router-dom'

const Work = ({
  title,
  imageUrl,
  technologies = [],
  status,
  statusBgColor,
  onClick,
}) => {
  return (
    <div className="col-xl-6 col-lg-6 col-sm-12 mb-4" onClick={onClick}>
      <div className="w-100 br-5px overflow-hidden position-relative project__image-container">
        <div className="bg-white py-1 d-flex align-items-center justify-content-around">
          <div className="d-flex ml-2">
            <div className="bg-tomato circle-icon mx-1"></div>
            <div className="bg-yellow circle-icon mx-1"></div>
            <div className="bg-green circle-icon mx-1"></div>
          </div>
          <h3 className="font-size-16px text-grey text-center py-1 flex-2">
            {title}
          </h3>
        </div>
        <img className="w-100" src={imageUrl} alt="stanlab student" />
        {status && (
          <div className={`${statusBgColor ? statusBgColor : 'blueBg'} label`}>
            {status}
          </div>
        )}

        <div className="info position-absolute overflow-hidden">
          {technologies.map((tech, i) => (
            <span key={i} className="mx-2 badge badge-dark">
              {tech}
            </span>
          ))}
          <button className="badge badge-dark">More..</button>
        </div>
      </div>
    </div>
  )
}

export default Work
