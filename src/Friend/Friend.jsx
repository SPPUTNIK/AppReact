import React from 'react'

import './Style/Friend.css';
import imgUser from './Style/userImg.jpeg'

// AiOutlineUserDelete
// AiOutlineUserAdd

const users = [
    {
        img: imgUser,
        id: "21549",
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
        id: "90879",
        nickName: "Hal-frkil",
        firstName: "Haland",
        lastName: "frkily",
        email: "haland32@student.1337.ma",
    }
];

function Friends(){

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
                    <span className="add-friend"></span>
                    </div>
                {users.map((user => {
                    // console.log(user.nickName);
                    return (
                        <div class="user-profile">
                            <span className="profil-img"><img src={user.img}></img></span>
                            <span className="profil-id">{user.id}</span>
                            <span className="profil-nick">{user.nickName}</span>
                            <span className="profil-first">{user.firstName}</span>
                            <span className="profil-last">{user.lastName}</span>
                            <span className="profil-email">{user.email}</span>
                            <span className="add-friend">ADD</span>
                        </div>)
                }))}
                        
                </div>
            }
        </div>
    )
}

export default Friends