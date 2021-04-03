import React, { useState } from 'react'
import CustomCarousel from '../common/customCarousel'
import { OpenInNew } from '@material-ui/icons'
import UnorderedList from '../common/unorderedList'

const Project = ({ data }) => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }

  const images = data.details && data.details.images
  const imageUrls = data.details && [...images, data.imageUrl]
  const moreTech = data.details && data.details.moreTech
  const technologies = data.details && [...moreTech, ...data.technologies]
  const description = data.details && data.details.description
  const link = data.details && data.details.link
  const status = data.details && data.details.status
  const githubUrl = data.details && data.details.githubUrl
  const title = data.details && data.title

  let statusText
  if (status) {
    if (status === 'development') {
      statusText = 'Under Development'
    } else if (status === 'production') statusText = 'In Production'
    else statusText = status
  }

  return (
    <div className="">
      <div className="position-relative mobile-setting">
        <h1 className="p-title">{title}</h1>
        <span className="badge badge-info position-absolute status-title">
          {statusText}
        </span>
        <p className="my-4">{description}</p>

        <a
          href={link}
          className="link-btn blueBg text-white py-3 d-flex justify-content-center align-items-center px-2 rounded"
          target="_blank"
          rel="noreferrer"
        >
          <OpenInNew />
          <span className="mx-2 ">Visit the website</span>
        </a>
      </div>

      {/* carousel */}
      <CustomCarousel
        imageUrls={imageUrls}
        index={index}
        handleSelect={handleSelect}
      />

      <div className="pt-4">
        <h1 className="p-title">Technologies</h1>
        <p className="my-4">
          Code Technologies and SKills I got Involved while working on this
          project
        </p>

        <UnorderedList data={technologies} />
      </div>

      <div>
        {githubUrl && (
          <p className="font-weight-bold">
            Github :
            <a
              className="link-btn blueBg text-white mx-2 px-3 py-1 rounded"
              rel="noreferrer"
              href={githubUrl}
            >
              See Code
            </a>
          </p>
        )}
      </div>
    </div>
  )
}

export default Project
