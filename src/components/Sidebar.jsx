//import { useState } from 'react'

import '../styles/Header.css'
import { FaXmark } from "react-icons/fa6";

function Sidebar({ isMenuOpen, toggleMenu }) {

    return (
        <div className={isMenuOpen ? 'sidebar show_menu' : 'sidebar hide_menu'}>
            <button onClick={toggleMenu} className="close_button">
                <FaXmark />
            </button>
            <ul>
                <li>Home</li>
                <li>내정보</li>
                <li>Diary</li>
                <li>D-day</li>
                <li>추억앨범</li>
                <li>편지쓰기</li>
                <li>미유별</li>
            </ul>
        </div>
    );
}

export default Sidebar;