import React from 'react'

import './styles/MenuSection.css';

//Icons
import {BiSolidDashboard} from 'react-icons/bi';
import {LiaUserFriendsSolid} from 'react-icons/lia';
import {IoGameControllerOutline} from 'react-icons/io5';
import {VscSettings} from 'react-icons/vsc';
import {BsChatText} from 'react-icons/bs';


function MenuSection() {
  return (
          <ul className="menu-lists">
            <li className="list-item">
                <a href="#" className="active menu-link flex">
                    <BiSolidDashboard className="icon"/>
                    <span className="small-text">
                        Dashboard
                    </span>
                </a>
            </li>

            <li className="list-item">
                <a href="#" className="menu-link flex">
                    <LiaUserFriendsSolid className="icon"/>
                    <span className="small-text">
                        Friends
                    </span>
                </a>
            </li>

            <li className="list-item">
                <a href="#" className="menu-link flex">
                    <BsChatText className="icon"/>
                    <span className="small-text">
                        Chat
                    </span>
                </a>
            </li>

            <li className="list-item">
                <a href="#" className="menu-link flex">
                    <IoGameControllerOutline className="icon"/>
                    <span className="small-text">
                        Game
                    </span>
                </a>
            </li>

            <li className="list-item">
                <a href="#" className="menu-link flex">
                    <VscSettings className="icon"/>
                    <span className="small-text">
                        Setting
                    </span>
                </a>
            </li>

            </ul>
  )
}

export default MenuSection