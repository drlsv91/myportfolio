import React from 'react'
import Icon from '../common/icon'
import { Facebook, Twitter, Instagram } from '@material-ui/icons'

const RightIcons = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Icon icon="Social Profiles" />
      <Icon
        icon={<Facebook />}
        link="https://web.facebook.com/victor.oluwaleye.1/"
      />
      <Icon icon={<Twitter />} link="https://twitter.com/leye_victor" />
      <Icon
        icon={<Instagram />}
        link="https://www.instagram.com/oluwaleye.victor/"
      />
    </div>
  )
}

export default RightIcons
