import React, { useContext } from 'react';
import css from './NavBar.module.css'
import publicUrl from '../utils/publicUrl.js'
import {
    Link
} from "react-router-dom";
import {DataContext} from '../contexts/DataContext.js';


function NavBar(){
    let {
        currentUserId, users
    } = useContext(DataContext);
    let stringTo = "/".concat(currentUserId);
    return(
    <nav className={css.navbar}>
        <div className={css.nameitem}>
            <Link to="/">
                CardBored
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
        <div className={css.navitemscenter}>
            <Link to="/profile">
                {users[0].name}
            </Link>
        </div>
        <div className={css.navitems}>
            <Link to="/settings">
                <img src={publicUrl('/assets/settings.svg')} alt="Settings"/>
            </Link>
        </div>
        
    </nav>
    )
}

export default NavBar;