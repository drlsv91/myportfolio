import React from 'react'
import { Col } from 'react-bootstrap'

const ProfileContactInfo = () => {
  return (
    <Col sm={12} md={4} xl={4} className={`overflow-hidden`}>
      <div className="d-flex align-items-center justify-content-between mobile-font">
        <p>Name</p>
        <p>Oluwaleye Victor</p>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <p>Email</p>
        <p>o.oluwaleye93@gmail.com</p>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <p>Github</p>
        <p>https://github.com/drlsv91</p>
      </div>
      <div className="d-flex align-items-center justify-content-between">
        <p>LinkedIn</p>
        <p>@oluwaleye.victor</p>
      </div>
    </Col>
  )
}

export default ProfileContactInfo
