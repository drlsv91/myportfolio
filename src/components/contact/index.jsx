import React from 'react'
import ContactScreen from '../contactScreen'

const Contact = ({ currentNavItem }) => {
  return (
    <div
      className={`${
        currentNavItem === 4 ? 'h-100' : 'h-0'
      } bottom-0 top-2rem w-100 bg-primary-light transition-all overflow-hidden`}
    >
      <ContactScreen />
    </div>
  )
}

export default Contact
