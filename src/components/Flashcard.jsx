import React, { useState } from "react";
import "./Flashcard.css";

const EMOJIS = [
  "💡",
  "📚",
  "🚀",
  "🧠",
  "✨",
  "⚡️",
  "🎯",
  "🔥",
  "🎨",
  "🌟",
  "🧩",
  "🔬",
];

function Flashcard({ id, term, definition, onDelete }) {
  const [isFlipped, setIsFlipped] = useState(false);

  // Picks a random emoji once when the card component is created
  const [emoji] = useState(() => {
    const randomIndex = Math.floor(Math.random() * EMOJIS.length);
    return EMOJIS[randomIndex];
  });

  // Challenge one - create "handleFlip" function & do necessary logic

  // Challeng two - create "handleDeleteClick" function & do necessary logic

  return (
    <div className="flashcard-container" onClick={handleFlip}>  {/* <-- Challenge Here */}
      <div className={`flashcard-inner ${isFlipped ? "flipped" : ""}`}>
        {/* Front Side */}
        <div className="flashcard-front">
          <div className="card-top-bar">
            <span className="card-emoji">{emoji}</span>
            <button
              className="delete-btn"
              onClick={handleDeleteClick} {/* <-- Challenge Here */}
              title="Delete card"
            >
              ✕
            </button>
          </div>

          <h3 className="card-term">{term}</h3>
          <span className="hint-text">Click to reveal answer</span>
        </div>

        {/* Back Side */}
        <div className="flashcard-back">
          <div className="back-badge">Answer</div>
          <p className="card-definition">{definition}</p>
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
