import React from 'react';
import "./Header.css"
import { TiHome } from "react-icons/ti";
import { CgFlagAlt } from "react-icons/cg";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";
import { SiFacebookgaming } from "react-icons/si";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='header'>
            <div className='header__icons header__icon--active'>
                <Link className='icon'  to="/">
                    <TiHome fontSize='35px' />
                </Link>
            </div>
            <div className="header__icons">
                <Link className='icon' to="/pages">
                    <CgFlagAlt fontSize='35px' />
                </Link>
            </div>
            <div className="header__icons">
                <Link className='icon' to="/watch">
                    <MdOutlineSubscriptions fontSize='35px' />
                </Link>
            </div>
            <div className="header__icons">
                <Link className='icon' to="/groups">
                    <MdOutlineSupervisedUserCircle fontSize='35px' />
                </Link>
            </div>
            <div className="header__icons">
                <Link className='icon' to="/gaming">
                    <SiFacebookgaming fontSize='35px' />
                </Link>
            </div>
        </nav>
    );
};

export default Header;