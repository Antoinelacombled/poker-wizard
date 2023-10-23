import "./App.css";
import { useState } from "react";
import RadialMenu from "./components/RadialMenu/RadialMenu";
import CardBoard from "./components/CardBoard/CardBoard";
import HandCards from "./components/HandCards/HandCards";
import Statistics from "./components/Statistics/Statistics";
import { useContext, createContext } from "react";

import { CardContext } from "./context/CardContext";

function App() {
  const [cardClicked, setCardClicked] = useState(false);
  const [cardClicked2, setCardClicked2] = useState(false);
  const [cardClicked3, setCardClicked3] = useState(false);
  const [cardClicked4, setCardClicked4] = useState(false);
  const [cardClicked5, setCardClicked5] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);

  return (
    <CardContext.Provider
      value={{
        cardClicked,
        setCardClicked,
        cardClicked2,
        setCardClicked2,
        cardClicked3,
        setCardClicked3,
        cardClicked4,
        setCardClicked4,
        cardClicked5,
        setCardClicked5,
        currentCard,
        setCurrentCard,
      }}
    >
      <div className="super-container">
        <div className="container-table">
          <Statistics />
          <CardBoard />
          <HandCards />
          <RadialMenu />
        </div>
      </div>
    </CardContext.Provider>
  );
}

export default App;
