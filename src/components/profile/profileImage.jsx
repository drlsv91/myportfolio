import React from 'react'
import profileImage from '../../assets/oluwaleye_victor.png'

import { Col } from 'react-bootstrap'

const ProfileImage = () => {
  return (
    <Col sm={12} md={6} xl={6} className="mx-auto">
      <div className="w-80 br-5px overflow-hidden">
        <img
          src={profileImage}
          className="img-responsive w-100"
          alt="oluwaleye victor"
        />
      </div>
    </Col>
  )
}

export default ProfileImage
