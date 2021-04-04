import React from 'react'
import ExperienceInfo from './common/experienceInfo'
import Title from './common/title'
import MailTo from './common/mailTo'

const ContactScreen = () => {
  // const [subject, message, ] = useState('')
  return (
    <div className="mobile-size padding-4 flex flex-bwtween">
      <div className="width-50">
        <Title label="Contact Info" />
        <ExperienceInfo companyName="  " year="" position="Presently In Lagos">
          <div className="font-size-14px paragraphs">
            <p>Email: o.oluwaleye93@gmail.com</p>
            <p>Phone: +2347038871903</p>
          </div>
          {/* <MailTo
            email="o.oluwaleye93@gmail.com"
            subject="Hello Victor"
            message="Lets chat"
            className="mailBtn"
          >
            Send Me Message
          </MailTo> */}
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
