//import { useState } from 'react'
import { Link } from 'react-router-dom';

import '../styles/Header.css'
import { FaXmark } from "react-icons/fa6";

function Sidebar({ isMenuOpen, toggleMenu }) {

    return (
        <div className={isMenuOpen ? 'sidebar show-menu' : 'sidebar hide-menu'}>
            <div className="sidebar-inner">
                <button onClick={toggleMenu} className="close-button">
                    <FaXmark />
                </button>
                <ul>
                    <li><Link to="/Home" onClick={toggleMenu}>Home</Link></li>
                    <li>내정보</li>
                    <li>Diary</li>
                    <li>D-day</li>
                    <li>추억앨범</li>
                    <li>편지쓰기</li>
                    <li>미유별</li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;