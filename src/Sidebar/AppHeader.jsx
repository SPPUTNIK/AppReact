import React from 'react'

import './styles/AppHeader.css'

import ProfileSection from "./ProfileSection";
import {BiSearchAlt} from 'react-icons/bi';
import {IoNotificationsOutline} from 'react-icons/io5';


function AppHeader(){
    return(
        <header className="app-header">
            <div className="containers app-header__container">

                <h2>Welcome, Abdessamad!</h2>


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
    )
}

export default AppHeader;