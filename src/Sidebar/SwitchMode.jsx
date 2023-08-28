import React from 'react'

import {CiLight} from 'react-icons/ci';

import './styles/SwitchMode.css';

function SwitchMode() {
  return (
    <div className='sidebar-switch'>
      <span>Light</span>
      <div className="switch-toggler">
        <CiLight className='icon'/>
      </div>
      <span>Dark</span>
    </div>
  )
}

export default SwitchMode