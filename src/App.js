import React from "react";
import './app.css';
import Sidebar from "./Components/SideBarSection/Sidebar";
import Body from "./Components/BodySection/Body";



const App = () => {
    return (
        <div className="container">
        <Sidebar></Sidebar>
        <Body></Body>
        </div>
    )
}

export default App;
