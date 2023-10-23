import { useContext, useState } from "react";

import "./RadialMenu.css";

// Clubs
import twoOfClubs from "../../assets/PNG-cards-1.3/2_of_clubs.png";
import threeOfClubs from "../../assets/PNG-cards-1.3/3_of_clubs.png";
import fourOfClubs from "../../assets/PNG-cards-1.3/4_of_clubs.png";
import fiveOfClubs from "../../assets/PNG-cards-1.3/5_of_clubs.png";
import sixOfClubs from "../../assets/PNG-cards-1.3/6_of_clubs.png";
import sevenOfClubs from "../../assets/PNG-cards-1.3/7_of_clubs.png";
import eightOfClubs from "../../assets/PNG-cards-1.3/8_of_clubs.png";
import nineOfClubs from "../../assets/PNG-cards-1.3/9_of_clubs.png";
import tenOfClubs from "../../assets/PNG-cards-1.3/10_of_clubs.png";
import jackOfClubs from "../../assets/PNG-cards-1.3/jack_of_clubs2.png";
import queenOfClubs from "../../assets/PNG-cards-1.3/queen_of_clubs2.png";
import kingOfClubs from "../../assets/PNG-cards-1.3/king_of_clubs2.png";
import aceOfClubs from "../../assets/PNG-cards-1.3/ace_of_clubs.png";

// Diamonds
import twoOfDiamonds from "../../assets/PNG-cards-1.3/2_of_diamonds.png";
import threeOfDiamonds from "../../assets/PNG-cards-1.3/3_of_diamonds.png";
import fourOfDiamonds from "../../assets/PNG-cards-1.3/4_of_diamonds.png";
import fiveOfDiamonds from "../../assets/PNG-cards-1.3/5_of_diamonds.png";
import sixOfDiamonds from "../../assets/PNG-cards-1.3/6_of_diamonds.png";
import sevenOfDiamonds from "../../assets/PNG-cards-1.3/7_of_diamonds.png";
import eightOfDiamonds from "../../assets/PNG-cards-1.3/8_of_diamonds.png";
import nineOfDiamonds from "../../assets/PNG-cards-1.3/9_of_diamonds.png";
import tenOfDiamonds from "../../assets/PNG-cards-1.3/10_of_diamonds.png";
import jackOfDiamonds from "../../assets/PNG-cards-1.3/jack_of_diamonds2.png";
import queenOfDiamonds from "../../assets/PNG-cards-1.3/queen_of_diamonds2.png";
import kingOfDiamonds from "../../assets/PNG-cards-1.3/king_of_diamonds2.png";
import aceOfDiamonds from "../../assets/PNG-cards-1.3/ace_of_diamonds.png";

// Hearts
import twoOfHearts from "../../assets/PNG-cards-1.3/2_of_hearts.png";
import threeOfHearts from "../../assets/PNG-cards-1.3/3_of_hearts.png";
import fourOfHearts from "../../assets/PNG-cards-1.3/4_of_hearts.png";
import fiveOfHearts from "../../assets/PNG-cards-1.3/5_of_hearts.png";
import sixOfHearts from "../../assets/PNG-cards-1.3/6_of_hearts.png";
import sevenOfHearts from "../../assets/PNG-cards-1.3/7_of_hearts.png";
import eightOfHearts from "../../assets/PNG-cards-1.3/8_of_hearts.png";
import nineOfHearts from "../../assets/PNG-cards-1.3/9_of_hearts.png";
import tenOfHearts from "../../assets/PNG-cards-1.3/10_of_hearts.png";
import jackOfHearts from "../../assets/PNG-cards-1.3/jack_of_hearts2.png";
import queenOfHearts from "../../assets/PNG-cards-1.3/queen_of_hearts2.png";
import kingOfHearts from "../../assets/PNG-cards-1.3/king_of_hearts2.png";
import aceOfHearts from "../../assets/PNG-cards-1.3/ace_of_hearts.png";

// Spades
import twoOfSpades from "../../assets/PNG-cards-1.3/2_of_spades.png";
import threeOfSpades from "../../assets/PNG-cards-1.3/3_of_spades.png";
import fourOfSpades from "../../assets/PNG-cards-1.3/4_of_spades.png";
import fiveOfSpades from "../../assets/PNG-cards-1.3/5_of_spades.png";
import sixOfSpades from "../../assets/PNG-cards-1.3/6_of_spades.png";
import sevenOfSpades from "../../assets/PNG-cards-1.3/7_of_spades.png";
import eightOfSpades from "../../assets/PNG-cards-1.3/8_of_spades.png";
import nineOfSpades from "../../assets/PNG-cards-1.3/9_of_spades.png";
import tenOfSpades from "../../assets/PNG-cards-1.3/10_of_spades.png";
import jackOfSpades from "../../assets/PNG-cards-1.3/jack_of_spades2.png";
import queenOfSpades from "../../assets/PNG-cards-1.3/queen_of_spades2.png";
import kingOfSpades from "../../assets/PNG-cards-1.3/king_of_spades2.png";
import aceOfSpades from "../../assets/PNG-cards-1.3/ace_of_spades.png";

import { CardContext } from "../../context/CardContext";

function RadialMenu() {
  const { cardClicked } = useContext(CardContext);
  const [selectedSuit, setSelectedSuit] = useState(null);
  const [step, setStep] = useState(1);

  if (!cardClicked) return null;

  const cards = [
    { symbol: "C", value: "2", image: twoOfClubs },
    { symbol: "C", value: "3", image: threeOfClubs },
    { symbol: "C", value: "4", image: fourOfClubs },
    { symbol: "C", value: "5", image: fiveOfClubs },
    { symbol: "C", value: "6", image: sixOfClubs },
    { symbol: "C", value: "7", image: sevenOfClubs },
    { symbol: "C", value: "8", image: eightOfClubs },
    { symbol: "C", value: "9", image: nineOfClubs },
    { symbol: "C", value: "T", image: tenOfClubs },
    { symbol: "C", value: "J", image: jackOfClubs },
    { symbol: "C", value: "Q", image: queenOfClubs },
    { symbol: "C", value: "K", image: kingOfClubs },
    { symbol: "C", value: "A", image: aceOfClubs },
    { symbol: "D", value: "2", image: twoOfDiamonds },
    { symbol: "D", value: "3", image: threeOfDiamonds },
    { symbol: "D", value: "4", image: fourOfDiamonds },
    { symbol: "D", value: "5", image: fiveOfDiamonds },
    { symbol: "D", value: "6", image: sixOfDiamonds },
    { symbol: "D", value: "7", image: sevenOfDiamonds },
    { symbol: "D", value: "8", image: eightOfDiamonds },
    { symbol: "D", value: "9", image: nineOfDiamonds },
    { symbol: "D", value: "T", image: tenOfDiamonds },
    { symbol: "D", value: "J", image: jackOfDiamonds },
    { symbol: "D", value: "Q", image: queenOfDiamonds },
    { symbol: "D", value: "K", image: kingOfDiamonds },
    { symbol: "D", value: "A", image: aceOfDiamonds },
    { symbol: "H", value: "2", image: twoOfHearts },
    { symbol: "H", value: "3", image: threeOfHearts },
    { symbol: "H", value: "4", image: fourOfHearts },
    { symbol: "H", value: "5", image: fiveOfHearts },
    { symbol: "H", value: "6", image: sixOfHearts },
    { symbol: "H", value: "7", image: sevenOfHearts },
    { symbol: "H", value: "8", image: eightOfHearts },
    { symbol: "H", value: "9", image: nineOfHearts },
    { symbol: "H", value: "T", image: tenOfHearts },
    { symbol: "H", value: "J", image: jackOfHearts },
    { symbol: "H", value: "Q", image: queenOfHearts },
    { symbol: "H", value: "K", image: kingOfHearts },
    { symbol: "H", value: "A", image: aceOfHearts },
    { symbol: "S", value: "2", image: twoOfSpades },
    { symbol: "S", value: "3", image: threeOfSpades },
    { symbol: "S", value: "4", image: fourOfSpades },
    { symbol: "S", value: "5", image: fiveOfSpades },
    { symbol: "S", value: "6", image: sixOfSpades },
    { symbol: "S", value: "7", image: sevenOfSpades },
    { symbol: "S", value: "8", image: eightOfSpades },
    { symbol: "S", value: "9", image: nineOfSpades },
    { symbol: "S", value: "T", image: tenOfSpades },
    { symbol: "S", value: "J", image: jackOfSpades },
    { symbol: "S", value: "Q", image: queenOfSpades },
    { symbol: "S", value: "K", image: kingOfSpades },
    { symbol: "S", value: "A", image: aceOfSpades },
  ];

  const handleSuitClick = (suit) => {
    setSelectedSuit(suit);
    setStep(2);
  };

  const handleCardClick = (card) => {
    console.log("Carte sélectionnée :", card);
    setSelectedSuit(null);
    setStep(1);
  };

  return (
    <div className="radialMenu">
      {step === 1 && (
        <div className="suitsMenu">
          <button onClick={() => handleSuitClick("C")}>♣️</button>
          <button onClick={() => handleSuitClick("D")}>♦️</button>
          <button onClick={() => handleSuitClick("H")}>♥️</button>
          <button onClick={() => handleSuitClick("S")}>♠️</button>
        </div>
      )}

      {step === 2 && (
        <div className="cardsMenu">
          {cards
            .filter((card) => card.symbol === selectedSuit)
            .map((card) => (
              <button key={card.value} onClick={() => handleCardClick(card)}>
                <img src={card.image} alt={`${card.value} of ${card.symbol}`} />
              </button>
            ))}
        </div>
      )}
    </div>
  );
}

export default RadialMenu;
