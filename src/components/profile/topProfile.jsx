import React from 'react'
import { Col, Row } from 'react-bootstrap'
import AboutMe from './aboutme'
import ProfileContactInfo from './profileContactInfo'
import ProfileImage from './profileImage'

const TopProfile = ({ data }) => {
  return (
    <Row
      className={`c-bg-primary-dark-gradient overflow-hidden transition-all ${
        data[0].isActive ? 'h-100 p-5' : 'h-0'
      }`}
      // style={{
      //   border: '1px solid red',
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      // }}
    >
      <Col sm={12} md={8} xl={8}>
        <Row className={`overflow-hidden `}>
          <ProfileImage />
          <AboutMe />
        </Row>
      </Col>
      <ProfileContactInfo />
    </Row>
  )
}

export default TopProfile
