# 🎴 React Flashcards App

A lightweight, interactive flashcard web application built to practice key React concepts, state management, and modern CSS animation techniques.

---

## ✨ Features

- **Create & Delete Cards:** Add custom flashcards with terms and definitions, or remove existing ones.
- **Interactive 3D Flip:** Click cards to reveal definitions with smooth 3D flip animation.
- **Random Emoji Generation:** Auto-assigns a random emoji to each new card created.
- **Isolated Button Actions:** Click delete without triggering card flips.
- **Responsive Layout:** Auto-adjusting card grid across all screen sizes.

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── Flashcard.jsx         # Individual flashcard component with 3D flip & delete logic
│   ├── Flashcard.css         # Glassmorphism & 3D transformation styles for flashcards
│   ├── FlashcardForm.jsx     # Input form for adding new cards
│   └── FlashcardForm.css     # Styling for the translucent input card & action buttons
├── App.jsx                   # Main application state & grid layout container
├── App.css                   # Global background grid, radial vignettes, & typography
└── main.jsx                  # React application entry point
```

---

## 🛠️ Tech Used & Key Concepts Practiced

- **React `useState`:** Local state for card flip states, random emoji assignment, and global app card list updates.
- **State Management & Lifting State Up:** Passing state and handler functions between parent (`App`) and child components (`Flashcard`, `FlashcardForm`).
- **Form & User Input Handling:** Controlled input components, handling input `onChange` events, and form submission lifecycle.
- **Dynamic & List Rendering:** Mapping over array data using `.map()` with unique `key` props to render flashcards dynamically.
- **Event Handling & Propagation:** Using `e.stopPropagation()` on delete triggers to prevent parent click events.
- **CSS 3D Transforms & Grid:** Implementing `perspective`, `transform-style: preserve-3d`, and responsive CSS Grid (`repeat(auto-fill, minmax())`).

---

## 🚀 Getting Started

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/your-username/react-flashcards.git
cd react-flashcards
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev

# or

npm start
```

**4. View in Browser**

Open:

```text
http://localhost:5173
```

(or the URL provided in your terminal) to view the app.
