import React, {useContext } from 'react';
import {DataContext} from '../contexts/DataContext.js';
import publicUrl from '../utils/publicUrl.js';
import {
    Link
} from "react-router-dom";
import css from './About.module.css';

function About(){

    let {currentUserId, users, about, games} = useContext(DataContext);
    console.log(currentUserId);

    let managers = users.map(people=>{
        console.log(people.id);
    })
    console.log(managers);

    let sorted_games = [...games].sort((a,b)=>(a.totalPicks < b.totalPicks)?1:-1);
    console.log(sorted_games);
    let number_one = sorted_games[0];
    let number_two = sorted_games[1];
    let number_three = sorted_games[2];
    let path_one = "./game/".concat(sorted_games[0].gameId);
    let path_two = "./game/".concat(sorted_games[1].gameId);
    let path_three = "./game/".concat(sorted_games[2].gameId);
    
         
    return(
        <div className={css.pageborder}>
            <div className={css.top}>
                <br></br>
                ABOUT CARDBORED 
            </div>
            <div className={css.row}>
                <div className={css.col1}>
                    <div className={css.hot}>
                        <b>How to Level Up?</b>                      
                    </div>                    
                    <div className={css.button}>
                        Vote for a New Game!
                    </div>
                    <div className={css.button}>
                        Submit a New Game!
                    </div>
                    <div className={css.button}>
                        Leave a Feedback!
                    </div>

                </div>
                <div className={css.col2}>
                    <div className={css.col3}>
                        {about}
                    </div>
                    <div className={css.col3}>
                    CardBored Managers:<br></br><br></br>
                    {//managers 
                        users.map(people=>{
                            console.log(people.id);
                            return(
                                <div>
                                    {people.id}
                                </div>
                            )
                        })
                    }
                    </div>
                    <div className={css.col3}>
                     Contact Us: cardbored@gmail.com

                    
                    </div>
                </div>
            </div>

        </div>
    );

}

export default About;