import React, {createContext, useState, useEffect} from 'react';
import initialData from '../utils/initialData.js';
import uniqueId from '../utils/uniqueId'


function DataContextProvider(props){
    const [data, setData] = useState(()=>{
        return JSON.parse(window.localStorage.getItem('data')) || initialData;
    });
    useEffect(()=>{
        window.localStorage.setItem('data', JSON.stringify(data));
    }, [data]);


    function addVote(gameId) {
        setData({
          ...data,
          userGameVote: (data.games.find(
            (a) => a.gameId === gameId
          ).userGameVote += 1),
          totalPicks: (data.games.find(
            (a) => a.gameId === gameId
          ).totalPicks += 1),
        });
        console.log(data.games.find((a) => a.gameId === gameId).userGameVote);
      }

      function removeVote(gameId) {
        setData({
          ...data,
          userGameVote: (data.games.find(
            (a) => a.gameId === gameId
          ).userGameVote -= 1),
          totalPicks: (data.games.find(
            (a) => a.gameId === gameId
          ).totalPicks -= 1),
        });
        console.log(data.games.find((a) => a.gameId === gameId).userGameVote);
      }

      function addGame(name, t1,t2,t3,im,gd, gr){
        const newgame = {
          totalPicks: 1,
          gameTags:{tagOne:t1, tagTwo:t2, tagThree:t3},
          gameName: name,
          gameId: uniqueId('game'),
          photo: im,
          gameDescription:gd,
          gameRules:gr,
          userGameVote: 1
        }
        setData({
          ...data,
          games: data.games.concat(newgame)
        })

      }

    


    return(
        <DataContext.Provider value = {{...data, addVote, removeVote, addGame}}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataContextProvider; // export this component as default
// export the context so that other components can import
export const DataContext = createContext();