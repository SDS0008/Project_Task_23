import './index.css';
import React from 'react'

import { Link } from 'react-router-dom';

const Header = () => {


    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

        <a class="navbar-brand" >
            <img src="https://tse1.mm.bing.net/th?id=OIP.s6RuZ2Cv4DtF-HuEFALqKwHaHa&pid=Api&P=0&h=220" alt="logo" style="width:40px;" />
        </a>


        <ul class="navbar-nav">
            <li class="nav-item">
                <Link class="nav-link" >Home</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/Contact">Contact</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/About">About</Link>
            </li>
        </ul>
    </nav>

}

export default Header;