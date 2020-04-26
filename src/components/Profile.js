import React from "react";
import css from "./Profile.module.css";
import publicUrl from '../utils/publicUrl.js'
import data from "../utils/initialData.js";
import Friend from "./Friend.js";
import ProfileGame from "./ProfileGame.js";
import {
  Link
} from "react-router-dom";

function Profile(props) {

    function handleProfileEdit(e) {
        console.log('Edit profile button was clicked!');
    }

    function handleGameUpload(e) {
      console.log('Upload Game button was clicked!');
  }
  
    //sorts the friends based on current user logged on
    let myFriends = data.friends.filter(f => f.userId === data.currentUserId);
    console.log(myFriends);


  return (
    <div className={css.profilePage}>


      <div className={css.leftElement}>
        <div className={css.userWindow}>
          <img alt="profilePicture" width="220" height="220"className={css.profilePicture} src={publicUrl('/assets/unnamed.png')}></img>
          <div className={css.username}>{data.currentUserId}</div>
          <div className={css.description}>I really like long walks on the beach and fine wine. But I also really like to do other things like doing activities!</div>
        <button className={css.editProfileButton}>Edit Profile</button>

        </div>
      </div>


      <div className={css.rightElement}>
        <div className={css.myGameShowcase}>
          <div className={css.showcaseTitle}>
            <h1> My Game Showcase:</h1>
          </div>
          <div className={css.gameList}>
            <ProfileGame gameName="Risk"/>
            <ProfileGame gameName="Monopoly"/>
            <ProfileGame gameName="Egyptian Ratscrew"/>
            <ProfileGame gameName="Pong"/>
            <ProfileGame gameName="Uno"/>
            <ProfileGame gameName="War"/>
            <ProfileGame gameName="Go-Fish"/>
          </div>
          
          
        </div>
        <Link to="../addgame"><button className={css.uploadGameButton}>Upload a Game!</button></Link>

        <div className={css.bottomElements}>
          <div className={css.myFriends}>
          <h1>My Friends</h1>
          {myFriends.map((f,index) => (
            <Friend name={f.friendId}
                    key={index} />
          ))}
    
          



          
          </div>
          <div className={css.myUpvotes}>
              <div className={css.title}>
                <h1>My Upvotes</h1>
              </div>
              <div className={css.upvoteList}>
                <ProfileGame gameName="Uno"/>
                <ProfileGame gameName="War"/>
                <ProfileGame gameName="Go-Fish"/>
              </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default Profile;