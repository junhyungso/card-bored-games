import React, { useContext, useState, useEffect } from "react";
import css from "./GamePage.module.css";
import { useParams } from 'react-router-dom';
import publicUrl from "../utils/publicUrl.js";
import { Link } from "react-router-dom";
import { DataContext } from "../contexts/DataContext.js";
import initialData from "../utils/initialData";

function GamePage() {
  const [store, setStore] = useState(() => {
    return JSON.parse(window.localStorage.getItem("store")) || initialData;
  });
  useEffect(() => {
    window.localStorage.setItem("store", JSON.stringify(store));
  }, [store]);

  let{gameId} = useParams();

  console.log(gameId);

  let { games } = useContext(DataContext);

  let chosenGameData = games.find((a) => a.gameId === gameId);

  console.log(chosenGameData);

  let chosenGameDescription = chosenGameData.gameDescription;
  let chosenGameName = chosenGameData.gameName;
  let chosenGameRules = chosenGameData.gameRules;
  let chosenGameStrategy = chosenGameData.gameStrategy;
  let chosenGameImage = publicUrl(chosenGameData.photo);
  console.log(chosenGameImage);

  /////

  function handleUnvote() {
    setStore({
      ...store,
      userGameVote: (store.games.find(
        (a) => a.gameName === "Uno"
      ).userGameVote -= 1),
      totalPicks: (store.games.find(
        (a) => a.gameName === "Uno"
      ).totalPicks -= 1),
    });
    console.log(store.games.find((a) => a.gameName === "Uno").userGameVote);
  }

  function handleVote() {
    setStore({
      ...store,
      userGameVote: (store.games.find(
        (a) => a.gameName === "Uno"
      ).userGameVote += 1),
      totalPicks: (store.games.find(
        (a) => a.gameName === "Uno"
      ).totalPicks += 1),
    });
    console.log(store.games.find((a) => a.gameName === "Uno").userGameVote);
  }

  /////

  return (
    <div className = {css.masterContainer}>
      <div className={css.topic}></div>
      <div className={css.row}>
        <div className={css.column}>
          <h2>{chosenGameName}</h2>
          <div className={css.gameImage}>
            <div className={css.fill}>
              <img src={chosenGameImage} alt="Game_Image" />
            </div>
          </div>
          <div className={css.smallRow}>
            <div className={css.smallColumnLeft}>
              <div className={css.smallDesc}>
                Popularity: <br></br>
                Picked{" "}
                {store.games.find((a) => a.gameName === "Uno").totalPicks}{" "}
                times!{" "}
              </div>
            </div>

            <div className={css.smallColumnRight}>
              <div className={css.smallDesc}>
                {store.games.find((a) => a.gameId === gameId).userGameVote ===
                0 ? (
                  <button className={css.voteButton} onClick={handleVote}>
                    Vote
                  </button>
                ) : (
                  <button className={css.unvoteButton} onClick={handleUnvote}>
                    Unvote
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={css.clear}>
        <div className={css.column}>
          <h2 className={css.gameOptionsDesc}>Here's Some Info:</h2>
          <div className={css.gameOptions}>
            {" "}
            Background: <br></br>
            {chosenGameDescription}{" "}
          </div>
          <br></br>
          <br></br>
          <div className={css.gameOptions}>
            {" "}
            Rules: <br></br>
            {chosenGameRules}
          </div>
          <br></br>
          <br></br>
          <div className={css.gameOptions}>
            Helpful Strategies: <br></br> {chosenGameStrategy}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
export default GamePage;