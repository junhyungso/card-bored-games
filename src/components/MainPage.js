import React, { useContext } from 'react';
import css from './MainPage.module.css'
import publicUrl from '../utils/publicUrl.js'
import {
    Link
} from "react-router-dom";
import {DataContext} from '../contexts/DataContext.js'

function MainPage(){
    let {
        currentUserId, games
    } = useContext(DataContext);

    let sorted_games = [...games].sort((a,b)=>(a.totalPicks < b.totalPicks)?1:-1);
    console.log(sorted_games);
    let number_one = sorted_games[0];
    let number_two = sorted_games[1];
    let number_three = sorted_games[2];
    let path_one = "./game/".concat(sorted_games[0].gameId);
    let path_two = "./game/".concat(sorted_games[1].gameId);
    let path_three = "./game/".concat(sorted_games[2].gameId);
    return(
        <div>
            {console.log(currentUserId)}
            
            <div className={css.top}>
                <h1>What's Hot</h1>
            </div>
            <div className={css.topthree}>
                <Link to={path_one} className={css.three}>{number_one.gameName}</Link>
            </div>
            <div className={css.topthree}>
                <Link to={path_two} className={css.three}>{number_two.gameName}</Link>
            </div>
            <div className={css.topthree}>
                <Link href={path_three} className={css.three}>{number_three.gameName}</Link>
            </div>
        </div>
        
    )
}

export default MainPage;