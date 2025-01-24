//import React from "react";
//import { Link } from 'react-router-dom'
import { useLocation, useNavigate  } from 'react-router-dom';
import { useState } from 'react'
import Sidebar from './Sidebar';

import '../styles/Header.css'
import { FaAngleLeft } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const goBack = () => {
        navigate(-1);
    };

    const showBackButton = window.history.length > 1;

    const disableSidebar = ["/SignUp", "/Login"];
    const isSidebarDisabled = disableSidebar.includes(location.pathname);

    return (
        <header className="header">
            {showBackButton && (
                <div onClick={ goBack } className="history-back">
                    <button className="">
                        <FaAngleLeft />
                    </button>
                </div>
            )}

            <div className="header-logo">
                <p>MyU Star</p>
            </div>

            <div className="menu-button">
            <button 
                    onClick={!isSidebarDisabled ? toggleMenu : undefined} 
                    disabled={isSidebarDisabled}
                >
                    <FaBars />
                </button>
            </div>

            <Sidebar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </header>
    )
}

export default Header;