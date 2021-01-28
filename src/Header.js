import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import logo from '../src/'
function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <img className='header__icon'
                    src="https://i.pinimg.com/originals/fb/b4/49/fbb4495459aaa277f8d4c9b9e8e16223.png"
                    alt="" />
            </Link>
            
            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header 
