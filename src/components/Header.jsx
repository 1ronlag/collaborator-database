import React from "react";
import logo1 from "../Assets/Img/logo1.png"



const Header = (props) => {
    return (

        <header className="">
            <div className="header" >
                <img className="logoi" src={logo1} alt="" />
            </div>
            <div className="search-container" >
                <h1 className="title">{props.title}  </h1>
            </div>
        </header>

    );
};

export default Header;