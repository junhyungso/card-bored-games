import React, { useContext } from 'react';
import css from './NavBar.module.css';
import publicUrl from '../utils/publicUrl.js';
import Search from './Search.js';
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
        <div className={css.header}>
            <nav className={css.navbar}>
            <div className={css.logo}>
                <img width="65" height="65" src={publicUrl('/assets/logo.png')}></img>
                <Link to="/">
                    <p>CardBored</p>
                </Link>
            </div>
            <ul className={css.mainNav}>
                <li className={css.navItem}>
                <Link to="/allgames">
                    <a>All Games</a>
                </Link>
                </li>
                <li className={css.navItem}>
                <Link to="/addgame">
                    <a>Add Game</a>
                </Link>    
                </li>
                <li className={css.bar}>
                    <Search/>
                </li>
                
               
            </ul>
    
            <div className={css.profileSettings}>
                <div className={css.profile}>
                        <Link to="/profile">
                            <a>{users[0].name}</a>
                            <img width="45" height="45" src={publicUrl('/assets/unnamed.png')}></img>
                        </Link>
                </div>
            <div className={css.gear}> 
                        <img src={publicUrl('/assets/settings.svg')} alt="Settings"/>
                        <GearSubmenu className={css.submenu}/>
            </div>
            </div>  
            
            </nav> 
        </div>
        )
    }

    function GearSubmenu(){
        return(
            <ul className={css.submenu}>
                <li className={css.submenuitem}>
                <Link to="/about">
                    <a>About Us</a>
                </Link>
                </li>
            <li className={css.submenuitem}>
                    <a>Legal</a>
            </li>
            <li className={css.submenuitem}>
                    <a>Contact Us</a>
            </li>
            <li className={css.submenuitem}>
                <Link to="/feedback">
                    <a>Give Us Feedback</a>
                </Link>
                   
            </li>
            <li className={css.submenuitem}>
                    <a>Log Out</a>
            </li>
    
    
    
            </ul>
        );
    }

export{ NavBar,
        GearSubmenu,}