import React from 'react'
import ExperienceInfo from './common/experienceInfo'
import Title from './common/title'

const ContactScreen = () => {
  return (
    <div className="mobile-size padding-4 flex flex-bwtween">
      <div className="width-50">
        <Title label="Contact Info" />
        <ExperienceInfo companyName="  " year="" position="Presently In Lagos">
          <div className="font-size-14px paragraphs">
            <p>Email: o.oluwaleye93@gmail.com</p>
            <p>Phone: +2347038871903</p>
          </div>
        </ExperienceInfo>
      </div>

      <div className="width-40 mt-4">
        {/* <Title label="DevTools and Other Skills" />
        <div className="mt-4">hello</div> */}
      </div>
    </div>
  )
}

export default ContactScreen
