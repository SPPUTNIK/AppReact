import React from 'react'
import './AppContent.css'

import {BiSearchAlt} from 'react-icons/bi';
import ProfileSection from "./Sidebar/ProfileSection";
import {IoNotificationsOutline} from 'react-icons/io5';

function AppContent() {
  return (
    <div className='app-content'>
      <header className="app-header">
        <div className="containers app-header__container">

          <h2>Statistics</h2>


          <div className="header-user-notifi">
            <div className="search-area">
              <input type='text' placeholder='Search Friend By ID ...'/>
              <BiSearchAlt className='search-icon'/>
            </div>
            
            <div className="notification-area">
              <IoNotificationsOutline className='notification-icon'/>
            </div>

            <div className="user-area">
              <ProfileSection />
            </div>
          </div>

        </div>

      </header>

      <div className='app-main'>
        <div className="containers app-main__containers">
          <div className="se">hello</div>
          <div className="se">hello</div>
          <div className="se">hello</div>
          <div className="se">hello</div>
          <div className="se">hello</div>
          <div className="se">hello</div>
        </div>
      </div>
      
    </div>
  )
}

export default AppContent