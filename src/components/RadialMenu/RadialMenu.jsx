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
  const {
    cardClicked,
    setCardClicked,
    currentCard,
    setCardClicked2,
    setCardClicked3,
    setCardClicked4,
    setCardClicked5,
    setCurrentCard,
  } = useContext(CardContext);
  const [selectedSuit, setSelectedSuit] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [step, setStep] = useState(1);

  if (currentCard === 0) return null;

  const cardValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "J",
    "Q",
    "K",
    "A",
  ];

  const handleSuitClick = (suit) => {
    setSelectedSuit(suit);
    setStep(2);
  };

  console.log(currentCard);

  const handleCardClick = (card) => {
    console.log("Carte sélectionnée :", card);
    setSelectedSuit(null);
    setSelectedValue(card);

    switch (currentCard) {
      case 1:
        setCardClicked(card);
        setSelectedSuit(null);
        setStep(1);
        setSelectedValue(null);
        setCurrentCard(0);
        break;
      case 2:
        setCardClicked2(card);
        setSelectedSuit(null);
        setStep(1);
        setSelectedValue(null);
        setCurrentCard(0);
        break;
      case 3:
        setCardClicked3(card);
        setSelectedSuit(null);
        setStep(1);
        setSelectedValue(null);
        setCurrentCard(0);
        break;
      case 4:
        setCardClicked4(card);
        setSelectedSuit(null);
        setStep(1);
        setSelectedValue(null);
        setCurrentCard(0);
        break;
      case 5:
        setCardClicked5(card);
        setSelectedSuit(null);
        setStep(1);
        setSelectedValue(null);
        setCurrentCard(0);
        break;
      default:
        console.log(`erreur`);
    }
  };

  return (
    <div className="radialMenu">
      {step === 1 && (
        <div className="suitsMenu">
          <button className="button-value" onClick={() => handleSuitClick("c")}>
            ♣️
          </button>
          <button className="button-value" onClick={() => handleSuitClick("d")}>
            ♦️
          </button>
          <button className="button-value" onClick={() => handleSuitClick("h")}>
            ♥️
          </button>
          <button className="button-value" onClick={() => handleSuitClick("s")}>
            ♠️
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="cardsMenu">
          {step === 2 &&
            cardValues.map((value, index) => (
              <button
                className="button-value"
                key={index}
                onClick={() => handleCardClick(`${value}${selectedSuit}`)}
              >
                {value}
              </button>
            ))}
        </div>
      )}
    </div>
  );
}

export default RadialMenu;
