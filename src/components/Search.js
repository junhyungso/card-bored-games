import React from "react";
import data from "../utils/initialData.js";
import css from "./Search.module.css";
import {
  Link
} from "react-router-dom";

function Search() {

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  let games = data.games.map((game)=>game.gameName);

  React.useEffect(() => {
    const results = games.filter(game =>
      game.toLowerCase().includes(searchTerm)
    );
    if (searchTerm.length != 0){
      setSearchResults(results);
    }
    else{setSearchResults([])}

  }, [searchTerm]);

  return (
    <div className={css.searchbar}>
      <input
        type="text"
        placeholder="Search for a game!"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map(item => (
           <Link to={"/game/".concat(item.toLowerCase().concat("Id"))}><li>{item}</li></Link>
        ))}
      </ul>
    </div>
  );
}

export default Search;