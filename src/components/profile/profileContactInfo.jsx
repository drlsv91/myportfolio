import React from 'react'
import { Col } from 'react-bootstrap'

const ProfileContactInfo = () => {
  return (
    <Col sm={12} md={4} xl={4} className={`overflow-hidden seperator`}>
      <div className="d-flex align-items-center justify-content-between mobile-font seperator-p">
        <p>Name</p>
        <p>Oluwaleye Victor</p>
      </div>
      <div className="d-flex align-items-center justify-content-between seperator-p">
        <p>Email</p>
        <p>o.oluwaleye93@gmail.com</p>
      </div>
      <div className="d-flex align-items-center justify-content-between seperator-p">
        <p>Github</p>
        <p>https://github.com/drlsv91</p>
      </div>
      <div className="d-flex align-items-center justify-content-between seperator-p">
        <p>LinkedIn</p>
        <p>@oluwaleye.victor</p>
      </div>
    </Col>
  )
}

export default ProfileContactInfo
