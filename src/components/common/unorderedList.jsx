import React from 'react'

const UnorderedList = ({ data }) => {
  return (
    <ul className="tech-list">
      {data && data.map((tech, i) => <li key={tech + i}>{tech}</li>)}
    </ul>
  )
}

export default UnorderedList
