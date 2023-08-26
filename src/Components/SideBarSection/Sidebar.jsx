import React from "react";
import './sidebar.css';

//Logo Image
import logo from '../../Assets/logo.png';

//Icons
import {BiSolidDashboard} from 'react-icons/bi';
import {LiaUserFriendsSolid} from 'react-icons/lia';
import {SlGameController} from 'react-icons/sl';
import {LuSettings2} from 'react-icons/lu';


const Sidebar = () => {
    return (
        <div className="sideBar grid">

            <div className="logoDiv flex">
                <img src={logo} alt="Image name"></img>
                <h2>CoLoNeL</h2>
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">
                    Profile
                </h3>

                <ul className="menuLists grid">

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <BiSolidDashboard className="icon"/>
                            <span className="smallText">
                                Dashboard
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <LiaUserFriendsSolid className="icon"/>
                            <span className="smallText">
                                Friends
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <SlGameController className="icon"/>
                            <span className="smallText">
                                Game
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <LuSettings2 className="icon"/>
                            <span className="smallText">
                                Setting
                            </span>
                        </a>
                    </li>  

                </ul>
            </div>


            <div className="menuDiv">
                <h3 className="divTitle">
                    Setting
                </h3>

                <ul className="menuLists grid">

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <BiSolidDashboard className="icon"/>
                            <span className="smallText">
                                Dashboard
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <LiaUserFriendsSolid className="icon"/>
                            <span className="smallText">
                                Friends
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <SlGameController className="icon"/>
                            <span className="smallText">
                                Game
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="#" className="menuLink flex">
                            <LuSettings2 className="icon"/>
                            <span className="smallText">
                                Setting
                            </span>
                        </a>
                    </li>  

                </ul>
            </div>

            <div className="sideBarCard">
                
            </div>

        </div>
    )
}

export default Sidebar;