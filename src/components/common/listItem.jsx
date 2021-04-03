import React from 'react'

const ListItem = ({ children, isActive, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`${
        isActive ? 'active' : ''
      } d-flex flex-column align-items-center list-item`}
    >
      {children}
    </li>
  )
}

export default ListItem
