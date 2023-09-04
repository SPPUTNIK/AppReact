import React from 'react'
import { Link } from 'react-router-dom';

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
                <Link to="/Dashboard" className="menu-link flex">
                    <BiSolidDashboard className="icon"/>
                    <span className="small-text">
                        Dashboard
                    </span>
                </Link>
            </li>

            <li className="list-item">
                <Link to="/Friends" className="menu-link flex">
                    <LiaUserFriendsSolid className="icon"/>
                    <span className="small-text">
                        Friends
                    </span>
                </Link>
            </li>

            <li className="list-item">
                <Link to="/Chat" className="menu-link flex">
                    <BsChatText className="icon"/>
                    <span className="small-text">
                        Chat
                    </span>
                </Link>
            </li>

            <li className="list-item">
                <Link to="/Game" className="menu-link flex">
                    <IoGameControllerOutline className="icon"/>
                    <span className="small-text">
                        Game
                    </span>
                </Link>
            </li>

            <li className="list-item">
                <Link to="/Setting" className="menu-link flex">
                    <VscSettings className="icon"/>
                    <span className="small-text">
                        Setting
                    </span>
                </Link>
            </li>

        </ul>
  )
}

export default MenuSection