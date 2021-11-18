import React from 'react';
import headerImg from "../../images/header img.png";
import './Header.css';

const Header = (props) => {
    return(
        <div className="head-container">
            <img src={headerImg} className={`head-image ${props.headerExpanded ? 'head-image-expanded' : 'head-image-contracted'}`} alt="headerImage" />
            <h1 className={`head-text ${props.headerExpanded ? 'head-text-expanded' : 'head-text-contracted'}`}>{props.headTitle}</h1>
        </div>
    )
}

export default Header;