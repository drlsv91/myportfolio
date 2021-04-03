import React from 'react'
import BottomNavMenus from '../bottomNavMenus'
import TopProfile from './topProfile'

const Profile = ({ data, handleSetActive }) => {
  return (
    <div className={`glass`}>
      <TopProfile data={data} />

      <BottomNavMenus handleSetActive={handleSetActive} data={data} />
    </div>
  )
}

export default Profile
