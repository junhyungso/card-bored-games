import React, {useContext,useState } from 'react';
import { useInput } from '../hooks/input-hook.js';
import {DataContext} from '../contexts/DataContext.js';
import publicUrl from '../utils/publicUrl.js';
import {
    Link
} from "react-router-dom";
import css from './AddGame.module.css';
import Form from 'react-bootstrap/Form'


function AddGame(){

    let {addGame} = useContext(DataContext);

    const { value:gamename, bind:bindgamename} = useInput('');
    const { value:tag1, bind:bindtag1} = useInput('');
    const { value:tag2, bind:bindtag2} = useInput('');
    const { value:tag3, bind:bindtag3} = useInput('');
    const { value:image, bind:bindimage} = useInput('');
    const { value:gamedesc, bind:bindgamedesc} = useInput('');
    const { value:gamerules, bind:bindgamerules} = useInput('');

    function addGameToData(name, t1,t2,t3,im,gd, gr){
        console.log(name);
        console.log(t1);
        console.log(t2);
        console.log(t3);
        console.log(im);
        console.log(gd);
        console.log(gr);
        addGame(name, t1,t2,t3,im,gd, gr);

    }
    


    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitted Game: `+gamename);
        addGameToData(gamename, tag1, tag2, tag3, image, gamedesc, gamerules);
        window.location="/"

    }


    return(
        <div className={css.mastercontainer}>
            <div className={css.text}>
                Add a Game:
            </div>
            <div className={css.form}>
                <form onSubmit={handleSubmit}>
                    <label>
                    Game Name: <br></br>
                    <input style={{marginBottom:10}} type="text" {...bindgamename} required/> <br></br>
                    Tag1: <br></br>
                    <input style={{marginBottom:10}} type="text" {...bindtag1} required/> <br></br>
                    Tag2: <br></br>
                    <input style={{marginBottom:10}} type="text" {...bindtag2} required/> <br></br>
                    Tag3: <br></br>
                    <input style={{marginBottom:10}} type="text" {...bindtag3} required/> <br></br>
                    Link to an Image: <br></br>
                    <input style={{marginBottom:10}} type="text" {...bindimage} required/> <br></br>
                    Game Description: <br></br>
                    <input style={{marginBottom:10}} type="text" {...bindgamedesc} required/> <br></br>
                    Game Rules: <br></br>
                    <input type="text" {...bindgamerules} required/> <br></br>
                    </label>
                    <input style={{marginTop:20}} type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default AddGame;