import React, { useContext } from 'react';
import css from './MainPage.module.css'
import publicUrl from '../utils/publicUrl.js'
import {
    Link
} from "react-router-dom";
import {DataContext} from '../contexts/DataContext.js';
import Xp from './XP';

function MainPage(){
    let {
        currentUserId, games, about
    } = useContext(DataContext);

    let sorted_games = [...games].sort((a,b)=>(a.totalPicks < b.totalPicks)?1:-1);
    console.log(sorted_games);
    let number_one = sorted_games[0];
    let number_two = sorted_games[1];
    let number_three = sorted_games[2];
    let path_one = "./game/".concat(sorted_games[0].gameId);
    let path_two = "./game/".concat(sorted_games[1].gameId);
    let path_three = "./game/".concat(sorted_games[2].gameId);

    console.log(randomNumber());
    function randomNumber(){
        console.log(games.length)
        return Math.floor(Math.random() * ((games.length-1) - 0 + 1));
    }

    let randomGame = games[randomNumber()];

    return(
        <div className={css.pageborder}>
            <div className={css.row1}>
                {/* <div className={css.col4}>

                </div>
                <div className={css.col8}> */}
                    <img width="100%"src={publicUrl('/assets/redblack2.png')}></img>
                        {/* <h1>CardBored</h1>   */}

                {/* </div> */}
                    {/* <div className={css.top}> */}
                        {/* <h1>CardBored</h1>  
                        <p color="black">Learn • Strategize • Invent</p> */}
                    {/* </div> */}
            </div>
            <div className={css.top}>
                <h1>Features</h1>
            </div>
            <div className={css.row}>
                <div className={css.col4}>
                    Learn and Strategize
                    Your Favorite Games
                </div>
                <div className={css.col4}>
                    Upload Your Game Ideas
                </div>
                <div className={css.col4}>
                    Vote on Your Favorite Games
                </div>
            </div>
            <br></br>
            <div className={css.top}>
                <h1>What's Hot?</h1>
            </div>


            

            <div className={css.row}>
                <div className={css.col6}>
                    <div className={css.topthree}>
                        <Link to={path_one} className={css.three}>{number_one.gameName}</Link>
                    </div>
                    <div className={css.topthree}>
                        <Link to={path_two} className={css.three}>{number_two.gameName}</Link>
                    </div>
                    <div className={css.topthree}>
                        <Link to={path_three} className={css.three}>{number_three.gameName}</Link>
                    </div>
                </div>
                <div className={css.col3}>
                    <div className={css.white}>
                    <h3>Click me to redirect to a random game!</h3>
                    </div>
                    <div className={css.dice}>
                        <Link to={"./game/"+randomGame.gameId}>
                            <img width="250" height="250" className={css.dicemove} src={publicUrl('/assets/dice.png')}></img>
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <Xp/>
            </div>
            <div className={css.row}>
                <br></br>
                <br></br>
            </div>
            
        </div>
        
    )
}

export default MainPage;