import React, { useContext } from 'react';
import css from './AllGames.module.css'
import publicUrl from '../utils/publicUrl.js'
import {
    Link
} from "react-router-dom";
import {DataContext} from '../contexts/DataContext.js'
import { render } from '@testing-library/react';

function AllGames(){
    let {
        currentUserId, games
    } = useContext(DataContext);

    renderGames(games);

    function renderGames(list){
        return(
            <div>
                <div className={css.main}>
                    All Games:
                </div>
                <div>
                    {list.map(game=>{
                    return(
                        <div>
                        <div className={css.game}>
                            <div className={css.name}>
                                <div>
                                    <a href={game.gameId} className={css.nameofgame}>{game.gameName}</a>
                                </div>
                                
                                <div className={css.row2}>
                                    <div className={css.col2}>
                                        Categories:
                                    </div>
                                    
                                    <div className={css.col2}>
                                        <div className={css.categories}>
                                            {game.gameTags.tagOne}
                                        </div>
                                    </div>
                                    <div className={css.col2}>
                                        <div className={css.categories}>
                                            {game.gameTags.tagTwo}
                                        </div>
                                    </div>
                                    <div className={css.col2}>
                                        <div className={css.categories}>
                                            {game.gameTags.tagThree}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
            
            
        )
        
    }
    

    return(
        <div>
            {renderGames(games)}
        </div>
        
    )
}

export default AllGames;