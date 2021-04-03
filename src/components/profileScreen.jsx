import React, { useState } from 'react'
import data from '../data/navData'
import Profile from './profile'
import Brand from './brand'
import Project from './project'
import Contact from './contact'
import Resume from './resume'

const navData = data

const ProfileScreen = () => {
  const [data, setData] = useState(navData)
  const [currentNavItem, setCurrentNavItem] = useState(1)
  const handleSetActive = (id) => {
    setCurrentNavItem(id)
    const filtered = data.map((d) => {
      d.isActive = false
      if (d.id === id) d.isActive = true
      return d
    })
    setData(filtered)
  }
  // top-2rem
  let showNavClasses = !data[0].isActive
    ? ' left-0 right-0 mx-auto bottom-2rem'
    : 'mt-5rem position-relative'
  return (
    <>
      <Brand data={data} />
      <div
        className={`${showNavClasses}  center  p-0  br-5px  overflow-hidden transition-all container glass`}
      >
        <Profile data={data} handleSetActive={handleSetActive} />

        <Resume currentNavItem={currentNavItem} />

        <Project currentNavItem={currentNavItem} />

        <Contact currentNavItem={currentNavItem} />
      </div>
    </>
  )
}

export default ProfileScreen
