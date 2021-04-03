import React from 'react'
import { Col } from 'react-bootstrap'
import Typewriter from 'typewriter-effect'

const AboutMe = () => {
  return (
    <Col md={6} xl={6} sm={12} className="mobile-padding">
      <h1 className="font-size-25px">
        <Typewriter
          options={{
            strings: ['Oluwaleye Victor'],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <h3 className="font-size-18px mobile-font">Developer</h3>
      <p>
        I am a full stack developer with strong desire for self-improvement.
        patient, a problem solver, an optimist and have strong social values
        that will be beneficial to a team
      </p>
    </Col>
  )
}

export default AboutMe
