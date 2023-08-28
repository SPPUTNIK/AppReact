import React from 'react'

import './styles/ProfileSection.css'
import avatar from "./styles/default-avatar-photo-placeholder-profile-icon-vector.jpeg"

function ProfileSection() {
  return (
    <div className='profile-section'>
      <img src={avatar} alt="Image User" />
    </div>
  )
}

export default ProfileSection