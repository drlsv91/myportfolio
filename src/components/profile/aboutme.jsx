import React from 'react'
import { Col } from 'react-bootstrap'
import Typewriter from 'typewriter-effect'

const AboutMe = () => {
  return (
    <Col md={6} xl={6} sm={12} className="mobile-padding">
      {/* <CustomTypingEffect /> */}
      <h1 className="font-size-25px ">
        <Typewriter
          options={{
            strings: ['Oluwaleye Victor'],
            autoStart: true,
            loop: true,
            cursor: '_',
            cursorClassName: 'cursor',
            wrapperClassName: 'typing-wrapper',
          }}
        />
      </h1>
      <h3 className="font-size-18px mobile-font bg-deep-yellow medium-title">
        Web Developer
      </h3>
      <p className="text-left noSelect">
        I am a full stack developer with a strong desire for self-improvement.
        patient, a problem solver, an optimist and have strong social values
        that will be beneficial to a team
      </p>
    </Col>
  )
}

export default AboutMe
