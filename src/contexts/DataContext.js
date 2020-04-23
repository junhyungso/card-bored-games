import React, {createContext, useState, useEffect} from 'react';
import initialData from '../utils/initialData.js';

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

    


    return(
        <DataContext.Provider value = {{...data, addVote, removeVote}}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataContextProvider; // export this component as default
// export the context so that other components can import
export const DataContext = createContext();