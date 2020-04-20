import React from "react";
import publicUrl from '../utils/publicUrl.js'
import css from "./Friend.module.css"

function Friend(props){
    return(
        <div className={css.friend}>
        <img alt="profilePicture" width="50" height="50" src={publicUrl('/assets/unnamed.png')}></img>
        <p>{props.name}</p>
        </div>
        
    );
}

export default Friend;