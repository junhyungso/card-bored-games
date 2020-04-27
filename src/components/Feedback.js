import React, { useContext } from "react";
import { useInput } from "../hooks/input-hook.js";
import { DataContext } from "../contexts/DataContext.js";
import css from "./Feedback.module.css";

function Feedback() {
  let { feedback, addXPGame,currentUserId,users } = useContext(DataContext);
  let gameId = "unoId";
  let chosenUser = users.find((a)=>a.id === currentUserId);


  var experienceRating;
  const { value: userLikes, bind: bindUserLikes } = useInput("");
  const { value: userDislikes, bind: bindUserDislikes } = useInput("");
  const { value: userSuggestions, bind: bindUserSuggestions } = useInput("");
  const { value: userThoughts, bind: bindUserThoughts } = useInput("");

  function addFeedbackToData(xpRating, uLike, uDislike, uSug, uThought) {
    //feedback(xpRating, uLike, uDislike, uSug, uThought);
  }

  const handleSubmit = (evt) => {
    var radios = document.getElementsByName("singleSelection");
    for (var i = 0, length = radios.length; i < length; i++) {
      // life is pain
      if (radios[i].checked) {
        experienceRating = radios[i].value;
        break;
      }
    }
    evt.preventDefault();
    addXPGame(chosenUser.level, chosenUser.xp-=25,gameId,currentUserId);
    alert(`Your submission has been recorded.`);
    addFeedbackToData(
      console.log(experienceRating),
      console.log(userLikes),
      console.log(userDislikes),
      console.log(userSuggestions),
      console.log(userThoughts),

      experienceRating,
      userLikes,
      userDislikes,
      userSuggestions,
      userThoughts
    );

    window.location.href="/creative-project-card-bored-games/";
  };

  return (
    <div className={css.masterContainer}>
      <form onSubmit={handleSubmit}>
        <div className={css.title}>Feedback Form:</div>

        <div className={css.title}>
          <br></br>
        </div>

        <div className={css.masterForm}>
          <label>
            {" "}
            <br></br> <br></br>
            Rate your experience from 1 - 5: <br></br> <br></br>
            <div>
              <input type="radio" name="singleSelection" value="1" required /> 1{" "}
              <input type="radio" name="singleSelection" value="2" required /> 2{" "}
              <input type="radio" name="singleSelection" value="3" required /> 3{" "}
              <input type="radio" name="singleSelection" value="4" required /> 4{" "}
              <input type="radio" name="singleSelection" value="5" required /> 5{" "}
            </div>
            <br></br>
            <br></br>
            <br></br>
            What did you like about our website? <br></br>
            <textarea
              style={{
                marginBottom: 20,
                height: 71,
                width: 400,
                backgroundColor: "white",
                outline: "2px solid purple",
                fontSize: 16,
              }}
              type="text"
              {...bindUserLikes}
              required
            />
            <br></br>
            <br></br>
            <br></br>
            What did you dislike about our website? <br></br>
            <textarea
              style={{
                marginBottom: 20,
                height: 71,
                width: 400,
                outline: "2px solid purple",
                fontSize: 16,
              }}
              type="text"
              {...bindUserDislikes}
              required
            />
            <br></br>
            <br></br>
            <br></br>
            What would you recommend we add? <br></br>
            <textarea
              style={{
                marginBottom: 20,
                height: 71,
                width: 400,
                outline: "2px solid purple",
                fontSize: 16,
              }}
              type="text"
              {...bindUserSuggestions}
              required
            />
            <br></br>
            <br></br>
            <br></br>
            Please feel free to leave any other thoughts: <br></br>
            <textarea
              style={{
                marginBottom: 20,
                height: 205,
                width: 500,
                outline: "2px solid purple",
                fontSize: 18,
              }}
              type="text"
              {...bindUserThoughts}
              required
            />
            <br></br>
            <input
              style={{ marginTop: 10, marginBottom: 40, fontSize: 20 }}
              type="submit"
              value="Submit Form"
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default Feedback;