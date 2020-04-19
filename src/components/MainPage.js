import React, { useContext } from 'react';
import css from './MainPage.module.css'
import publicUrl from '../utils/publicUrl.js'
import {
    Link
} from "react-router-dom";
import {DataContext} from '../contexts/DataContext.js'

function NavBar(){
    let {
        currentUserId, games
    } = useContext(DataContext);

    let sorted_games = games.sort((a,b)=>(a.totalPicks < b.totalPicks)?1:-1);
    console.log(sorted_games);
    let number_one = sorted_games[0];
    let number_two = sorted_games[1];
    let number_three = sorted_games[2];
    let path_one = "/".concat(sorted_games[0].gameId);
    let path_two = "/".concat(sorted_games[1].gameId);
    let path_three = "/".concat(sorted_games[2].gameId);
    return(
        <div>
            {console.log(currentUserId)}
            <div className={css.search}>
                <input type="text" placeholder="Search.."/>
            </div>
            <div className={css.top}>
                <h1>What's Hot</h1>
            </div>
            <div className={css.topthree}>
                <a href={path_one} className={css.three}>{number_one.gameName}</a>
            </div>
            <div className={css.topthree}>
                <a href={path_two} className={css.three}>{number_two.gameName}</a>
            </div>
            <div className={css.topthree}>
                <a href={path_three} className={css.three}>{number_three.gameName}</a>
            </div>
        </div>
        
    )
}

export default NavBar;