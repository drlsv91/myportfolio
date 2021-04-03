import React from 'react'
import ListItem from './common/listItem'

const BottomNavMenus = ({ handleSetActive, data }) => {
  return (
    <div
      className={`${
        !data[0].isActive ? '' : 'br-bottom-5px'
      } c-bg-primary-light w-100   h-500px mobile-padding`}
    >
      {/*  */}
      <ul
        className={`${
          !data[0].isActive ? 'top-0 ' : ''
        } d-flex p-0 list align-items-center position-absolute justify-content-around `}
      >
        {data.map((data, index) => {
          return (
            <ListItem
              key={index}
              isActive={data.isActive}
              onClick={() => handleSetActive(data.id)}
            >
              {data.icon}
              <p>{data.name}</p>
            </ListItem>
          )
        })}
      </ul>
    </div>
  )
}

export default BottomNavMenus
