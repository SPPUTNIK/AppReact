import React from 'react'
import './AppContent.css'

import DounutChart from './Chart';

import {BiSearchAlt} from 'react-icons/bi';
import ProfileSection from "../Sidebar/ProfileSection";
import {IoNotificationsOutline} from 'react-icons/io5';

//image
import imgRobot from './style/robot 1.svg';
import imgUser from './style/user.svg';

//stars
import {TbTopologyStar2} from 'react-icons/tb';
import {TbTopologyStar3} from 'react-icons/tb';
import {TbTopologyStarRing2} from 'react-icons/tb';
import {TbTopologyStarRing3} from 'react-icons/tb';
import {GiStarfighter} from 'react-icons/gi';
import {PiStarOfDavidBold} from 'react-icons/pi';

//Grade
import {GiUpgrade} from 'react-icons/gi';
import {GiSwissArmyKnife} from 'react-icons/gi';
import {GiSpeedBoat} from 'react-icons/gi';
import {GiPowerRing} from 'react-icons/gi';
import {GiPirateCaptain} from 'react-icons/gi';
import {GiCapeArmor} from 'react-icons/gi';
import {GiPirateFlag} from 'react-icons/gi';

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
            <div className="chartDiv">
              <DounutChart className="donut"/>
            </div>
          </div>


          <div className="container-dashboard progress">
            <h2>Progress</h2>
            <div className='item'>
              <span>Total Matches 72</span>
              <div className="colored_div color-total"></div>
            </div>
            <div className='item'>
              <span>Get it 179 Points</span>
              <div className="colored_div color-get"></div>
            </div>
            <div className='item'>
              <span>Nedded 50 Points</span>
              <div className="colored_div color-nedded"></div>
            </div>
          </div>



          <div className="container-dashboard rank-card">
            <h2>Top Ranking</h2>

            <span className='rate'>10%</span>

            <div className="grade-player">

              <div className="grade">
                <GiUpgrade className='topo'/>
              </div>

              <div className="stars">
                <TbTopologyStar2 className='topo-logy-star'/>
              </div>

            </div>

          </div>


          <div className="container-dashboard robot">

            <div className="img-robot">
              <img src={imgRobot} alt='Robot'/>
            </div>

            <div className="button-click">
              <button>Play With Robot</button>
            </div>
            
          </div>


          <div className="container-dashboard history">
            <h2>History</h2>

            <div className="matches">

              <div className="match-one">
                <span>2</span>
                <img src={imgUser} alt='userImage'/>
                <span>VS</span>
                <img src={imgUser} alt='userImage'/>
                <span>1</span>
              </div>
              <div className="match-one">
                <span>2</span>
                <img src={imgUser} alt='userImage'/>
                <span>VS</span>
                <img src={imgUser} alt='userImage'/>
                <span>1</span>
              </div>

              <div className="match-one">
                <span>2</span>
                <img src={imgUser} alt='userImage'/>
                <span>VS</span>
                <img src={imgUser} alt='userImage'/>
                <span>1</span>
              </div>



              {/* <div className="match-one">

              </div>

              <div className="match-one">

              </div> */}

            </div>

          </div>


          <div className="container-dashboard">hello</div>
        </div>
      </div>
                {/* <TbTopologyStar2 className='topo-logy-star'/>
                <TbTopologyStar3 className='topo-logy-star'/>
                <TbTopologyStarRing2 className='topo-logy-star'/>
                <TbTopologyStarRing3 className='topo-logy-star'/>
                <GiStarfighter className='topo-logy-star'/>
                <PiStarOfDavidBold className='topo-logy-star'/>

                <GiUpgrade className='topo'/>
                <GiSwissArmyKnife className='topo'/>
                <GiSpeedBoat className='topo'/>
                <GiPowerRing className='topo'/>
                <GiPirateCaptain className='topo'/>
                <GiCapeArmor className='topo'/>
                <GiPirateFlag className='topo'/> */}
      
    </div>
  )
}

export default AppContent