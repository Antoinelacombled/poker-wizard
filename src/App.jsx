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

  return (
    <CardContext.Provider value={{ cardClicked, setCardClicked }}>
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
