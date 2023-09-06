import React from "react";

import './style/Stream.css';
import imgUser from './style/userImg.jpeg';

import {VscDebugStart} from 'react-icons/vsc';

const streams = [
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

function ListStream(props){
    return (
        <div className="stream" key={props.key}>
            <div className="live">
                <div className="user">
                    <img src={props.user.img} alt='userImage'/>
                    <span>{props.user.nickName}</span>
                </div>
                <div className="streamDiv">

                    <div className="stream-score">
                        <span> 1 </span>
                        <span> - </span>
                        <span> 3 </span>
                    </div>
                    <div className="stream-round">
                        <span>Round 3</span>
                    </div>

                </div>

                <div className="user">
                    <img src={props.user.img} alt='userImage'/>
                    <span>{props.user.nickName}</span>
                </div>
                
              </div>
        </div>
    );
}

function Stream(){
    return (
        <div className="show-streams">
            <h1>All Streams</h1>
            {streams.map(stream => {
                return (
                    <ListStream key={stream.id} user={stream}/>
                );
            })}
        </div>
    );
}

export default Stream;