//import React from "react";
//import { Link } from 'react-router-dom'
// import { useNavigate, useLocation  } from 'react-router-dom';
import { useState } from 'react'
import Sidebar from './Sidebar';

import '../styles/Header.css'
import { FaAngleLeft } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="history_back">
                {/* 뒤로가기 구현 */}
                <button className="">
                    <FaAngleLeft />
                </button>
            </div>

            <div className="header_logo">
                {/* 로고 추가 */}
            </div>

            <div className="menu_button">
                <button onClick={ toggleMenu }>
                    <FaBars />
                </button>
            </div>

            <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </header>
    )
}

export default Header;