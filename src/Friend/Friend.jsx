import React from 'react'
import { useState } from 'react';

import './Style/Friend.css';
import imgUser from './Style/userImg.jpeg';

import {AiOutlineUserDelete} from 'react-icons/ai';
import {AiOutlineUserAdd} from 'react-icons/ai';
import {IoGameControllerOutline} from 'react-icons/io5';
import {FiSend} from 'react-icons/fi';
import {GoVerified} from 'react-icons/go';

// AiOutlineUserDelete
// AiOutlineUserAdd

function List(props){
    console.log(props);
    return (
        <div className="user-profile" key={props.user.id}>
            <span className="profil-img"><img src={props.user.img}></img></span>
            <span className="profil-id">{props.user.id}</span>
            <span className="profil-nick">{props.user.nickName}</span>
            <span className="profil-first">{props.user.firstName}</span>
            <span className="profil-last">{props.user.lastName}</span>
            <span className="profil-email">{props.user.email}</span>
            <span className="icons"><IoGameControllerOutline/></span>
            <span className="icons"><FiSend/></span>
            {
                props.check ? (
                    <span className="icons"><AiOutlineUserAdd/></span>
                ) : (
                    <span className="icons"><AiOutlineUserDelete/></span>
                )
            }
        </div>
    )
}

const users = [
    {
        img: imgUser,
        id: "00000",
        nickName: "Am-klon",
        firstName: "amin",
        lastName: "klonop",
        email: "amin22@student.1337.ma",
    },
    {
        img: imgUser,
        id: "145632",
        nickName: "Ana-fdry",
        firstName: "Anas",
        lastName: "fdrykil",
        email: "anas@student.1337.ma",
    },
    {
        img: imgUser,
        id: "90879",
        nickName: "Hal-frkil",
        firstName: "Haland",
        lastName: "frkily",
        email: "haland32@student.1337.ma",
    },
    {
        img: imgUser,
        id: "00001",
        nickName: "Am-klon",
        firstName: "amin",
        lastName: "klonop",
        email: "amin22@student.1337.ma",
    },
    {
        img: imgUser,
        id: "14577",
        nickName: "Ana-fdry",
        firstName: "Anas",
        lastName: "fdrykil",
        email: "anas@student.1337.ma",
    },
    {
        img: imgUser,
        id: "110202",
        nickName: "Hal-frkil",
        firstName: "Haland",
        lastName: "frkily",
        email: "haland32@student.1337.ma",
    },
    {
        img: imgUser,
        id: "00002",
        nickName: "Am-klon",
        firstName: "amin",
        lastName: "klonop",
        email: "amin22@student.1337.ma",
    },
    {
        img: imgUser,
        id: "5544778",
        nickName: "Ana-fdry",
        firstName: "Anas",
        lastName: "fdrykil",
        email: "anas@student.1337.ma",
    },
    {
        img: imgUser,
        id: "6589",
        nickName: "Hal-frkil",
        firstName: "Haland",
        lastName: "frkily",
        email: "haland32@student.1337.ma",
    },
    {
        img: imgUser,
        id: "00003",
        nickName: "Am-klon",
        firstName: "amin",
        lastName: "klonop",
        email: "amin22@student.1337.ma",
    },
    {
        img: imgUser,
        id: "14568",
        nickName: "Ana-fdry",
        firstName: "Anas",
        lastName: "fdrykil",
        email: "anas@student.1337.ma",
    },
    {
        img: imgUser,
        id: "998765",
        nickName: "Hal-frkil",
        firstName: "Haland",
        lastName: "frkily",
        email: "haland32@student.1337.ma",
    },
    {
        img: imgUser,
        id: "00004",
        nickName: "Am-klon",
        firstName: "amin",
        lastName: "klonop",
        email: "amin22@student.1337.ma",
    },
    {
        img: imgUser,
        id: "445566",
        nickName: "Ana-fdry",
        firstName: "Anas",
        lastName: "fdrykil",
        email: "anas@student.1337.ma",
    },
    {
        img: imgUser,
        id: "25896",
        nickName: "Hal-frkil",
        firstName: "Haland",
        lastName: "frkily",
        email: "haland32@student.1337.ma",
    }
];

function Friends(){

    const [checked, setChecked] = useState(false);
    function handleChange(elem){
        setChecked(elem.target.checked);
        if (elem.target.checked)
            console.log(`============= ${elem.target.checked} ${checked}`);
        else
            console.log(`*********** ${elem.target.checked} ${checked}`);
    }
    return(
        <div className="friendDiv">
            {
                <div className='data-tables'>
                    <div className="headerTable">
                        <span className="profil-img">img</span>
                        <span className="profil-id">id</span>
                        <span className="profil-nick">nickName</span>
                        <span className="profil-first">firstName</span>
                        <span className="profil-last">lastName</span>
                        <span className="profil-email">email</span>
                        <span>Following</span>
                        <label className="switch">
                            <input type="checkbox" onChange={handleChange}/>
                            <span className='slider'></span>
                        </label>
                        <span>Users</span>
                    </div>
                {users.map((user => {
                    return (
                        <List key={user.id} user={user} check={checked}/>    
                    )
                }))}
                        
                </div>
            }
        </div>
    )
}

export default Friends