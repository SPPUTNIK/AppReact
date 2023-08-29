import React from 'react'
import './AppContent.css'

import DounutChart from './Chart';

import {BiSearchAlt} from 'react-icons/bi';
import ProfileSection from "../Sidebar/ProfileSection";
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
          <div className="container-dashboard chart">
          Chart
          <DounutChart className="donut"/>
          <div className="detailsDiv">
            <ul>
              <li>Total Of Won Matches <span>44 Matches</span></li>
              <li>Total Of Lost Matches <span>12 Matches</span></li>
              <li>Total Canceled Matches <span>06 Matches</span></li>
            </ul>
          </div>
          </div>
          <div className="container-dashboard progress">
            <h2>Progress</h2>
          </div>
          <div className="container-dashboard">hello</div>
          <div className="container-dashboard">hello</div>
          <div className="container-dashboard">hello</div>
          <div className="container-dashboard">hello</div>
        </div>
      </div>
      
    </div>
  )
}

export default AppContent