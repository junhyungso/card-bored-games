import React from "react";
import css from "./ProfileGame.module.css";

function ProfileGame(props){

    let myColor = props.color;
    return(
        <div className={css.game} style={myColor}>
            {props.gameName}
        </div>
    );

}

export default ProfileGame;