import React from 'react';
import css from './NavBar.module.css'
import {
    Link
} from "react-router-dom";

function NavBar(props){
    return(
    <nav className={css.navbar}>
        <div className={css.nameitem}>
            <Link to="/">
                CardBored Games
            </Link>
        </div>
        <div className={css.navitemscenter}>
            <Link to="/about">
                About
            </Link>
        </div>
        <div className={css.navitems}>
            <Link to="/allgames">
                All Games
            </Link>
        </div>
        <div className={css.navitems}>
            <Link to="/friends">
                Friends
            </Link>
        </div>
        <div className={css.navitems}>
            <Link to="/yourlibrary">
                Your Library
            </Link>
        </div>
        <div className={css.navitemscenter}>
            <Link to="/user">
                User
            </Link>
        </div>
        
    </nav>
    )
}

export default NavBar;