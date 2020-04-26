import React, { useContext, useState, useEffect } from "react"; //
import css from "./XP.module.css";
import { useParams } from "react-router-dom";
import publicUrl from "../utils/publicUrl.js";
import { Link } from "react-router-dom";
import { DataContext } from "../contexts/DataContext.js";
import initialData from "../utils/initialData";

function Xp(){
    let {users, currentUserId} = useContext(DataContext);

    let now = users.find((a)=>a.id === currentUserId);
    return(
        <div className={css.mastercontainer}>
            <div>
                {now.level}
                {console.log(now.level)}
            </div>
            <div>
                {now.xp}
                {console.log(now.xp)}
            </div>
        </div>
    );
}

export default Xp;