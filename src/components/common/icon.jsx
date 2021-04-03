import React from 'react'

const Icon = ({ icon, link }) => {
  return (
    <span
      className={`d-flex justify-content-center align-items-center mx-1 bg-dark text-white py-1 px-2 text-center ${
        link ? 'cursor-pointer' : ''
      }`}
    >
      {link ? (
        <a href={link} className="text-white" rel="noreferrer" target="_blank">
          {icon}
        </a>
      ) : (
        icon
      )}
    </span>
  )
}

export default Icon
