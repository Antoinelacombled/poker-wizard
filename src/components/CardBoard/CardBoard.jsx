import { useContext, createContext } from "react";
import { CardContext } from "../../context/CardContext";

function CardBoard() {
  const { setCardClicked } = useContext(CardContext);

  const handleCardClick = () => {
    setCardClicked(true);
  };

  return (
    <div className="board-flop">
      <div className="card one" onClick={handleCardClick}></div>
      <div className="card two" onClick={handleCardClick}></div>
      <div className="card three " onClick={handleCardClick}></div>
      <div className="card four" onClick={handleCardClick}></div>
      <div className="card five" onClick={handleCardClick}></div>
    </div>
  );
}

export default CardBoard;
