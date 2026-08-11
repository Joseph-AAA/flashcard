import React from "react";
import Flashcard from "./components/Flashcard";
import FlashcardForm from "./components/FlashcardForm";
import { useState } from "react";
import "./App.css";

const App = () => {
 const [cards, setCards] = useState([
    {
      id: 1,
      term: "useState",
      definition:
        "A React Hook that lets you add state variables to functional components.",
    },
    {
      id: 2,
      term: "DOM",
      definition:
        "Document Object Model. The browser's tree representation of HTML.",
    },
  ]
);

const [newTerm, setNewTerm] = useState("");
const [newDefinition, setNewDefinition] = useState("");

function addNewCard(e) {
    e.preventDefault();
    console.log(newTerm, newDefinition);

    if(newTerm.trim() === "" || newDefinition.trim() === ""){
      alert("Please fill in both the term and definition fields.");
       return;
    
    }else{
       setCards((prev)=>{
        return [...prev, {id : Date.now(), term: newTerm, definition: newDefinition}]
    
      })
      setNewTerm("");
      setNewDefinition("");
    }
      

}
  function handleDeleteClick(id) {
    console.log("Delete card with id:", id);
     setCards((prev)=>{
       return prev.filter((card) => card.id !== id);
     })
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1 className="app-title">Flashcard App</h1>
        <p>Interactive Flashcards by Learnex Space Edu</p>
      </div>
       
       <FlashcardForm newTerm={newTerm} setNewTerm={setNewTerm} newDefinition={newDefinition} 
       setNewDefinition={setNewDefinition} addNewCard={addNewCard} />
      <div className="card-grid ">
         {cards.map((card) => (
         <Flashcard key={card.id} id={card.id} term={card.term} definition={card.definition} handleDeleteClick={handleDeleteClick} />
       ))}
      </div>
     
  
    </div>
  );
};

export default App;
