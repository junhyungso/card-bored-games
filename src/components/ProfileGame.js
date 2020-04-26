import React from "react";
import css from "./ProfileGame.module.css";
import {
    Link
} from "react-router-dom";

function ProfileGame(props){

    let myColor = props.color;
    return(
        <div className={css.game} style={myColor}>
            <Link to={"/game/".concat(props.gameId)}><a >{props.gameName}</a> <img height="75" width="75" src={'.'.concat(props.gamePhoto)}></img></Link>
            
        </div>
    );

}

export default ProfileGame;