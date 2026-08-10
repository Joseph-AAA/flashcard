import Flashcard from "./Flashcard";
import "./FlashcardForm.css";
function FlashcardForm({ newTerm, setNewTerm, newDefinition, setNewDefinition, addNewCard }) {

    return(
        <form className="flashcard-form" >
           <div className="input-group ">
                <input className="form-input" name="term" value={newTerm} onChange={(e) => setNewTerm(e.target.value)} type="text" placeholder="Enter term" />
                <input className="form-input" name="definition" value={newDefinition} onChange={(e) => setNewDefinition(e.target.value)} type="text" placeholder="Enter definition"/>
                <button type="submit" className="submit-btn" onClick={addNewCard}>Add Card</button>
           </div>
          
        </form>
    )
}

export default FlashcardForm;