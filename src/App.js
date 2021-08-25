import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😂": "Face with Tears of Joy",
  "😃": "Grinning Face ",
  "😄": " Smiling Eyes",
  "😎": "cool face",
  "😡": "angry face",
  "🤡": "clown face",
  "😱": "screaming face",
  "👽": "alien face",
  "👋": "slap",
  "🙏": "folded hands",
  "❤️": "heart",
  "🍕": "pizza",
  "🥪": "sandwich",
  "🔫": "pistol",
  "👊": "fist"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our databse";
    }

    setMeaning(meaning);
  }
  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1>Emoji's and their meanings</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>emojis we know</h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
