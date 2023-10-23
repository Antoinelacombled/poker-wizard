import { useContext } from "react";
import { CardContext } from "../../context/CardContext";

function HandCards() {
  const { setCardClicked } = useContext(CardContext);

  const handleCardClick = () => {
    setCardClicked(true);
  };

  return (
    <div className="hand-cards">
      <div className="card" onClick={handleCardClick}></div>
      <div className="card" onClick={handleCardClick}></div>
    </div>
  );
}

export default HandCards;
