import { useContext, createContext } from "react";
import { CardContext } from "../../context/CardContext";

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

function CardBoard() {
  const {
    cardClicked,
    cardClicked2,
    cardClicked3,
    cardClicked4,
    cardClicked5,
    setCurrentCard,
  } = useContext(CardContext);

  const cardMapper = {
    "2c": twoOfClubs,
    "3c": threeOfClubs,
    "4c": fourOfClubs,
    "5c": fiveOfClubs,
    "6c": sixOfClubs,
    "7c": sevenOfClubs,
    "8c": eightOfClubs,
    "9c": nineOfClubs,
    "10c": tenOfClubs,
    Jc: jackOfClubs,
    Qc: queenOfClubs,
    Kc: kingOfClubs,
    Ac: aceOfClubs,

    "2d": twoOfDiamonds,
    "3d": threeOfDiamonds,
    "4d": fourOfDiamonds,
    "5d": fiveOfDiamonds,
    "6d": sixOfDiamonds,
    "7d": sevenOfDiamonds,
    "8d": eightOfDiamonds,
    "9d": nineOfDiamonds,
    "10d": tenOfDiamonds,
    Jd: jackOfDiamonds,
    Qd: queenOfDiamonds,
    Kd: kingOfDiamonds,
    Ad: aceOfDiamonds,

    "2h": twoOfHearts,
    "3h": threeOfHearts,
    "4h": fourOfHearts,
    "5h": fiveOfHearts,
    "6h": sixOfHearts,
    "7h": sevenOfHearts,
    "8h": eightOfHearts,
    "9h": nineOfHearts,
    "10h": tenOfHearts,
    Jh: jackOfHearts,
    Qh: queenOfHearts,
    Kh: kingOfHearts,
    Ah: aceOfHearts,

    "2s": twoOfSpades,
    "3s": threeOfSpades,
    "4s": fourOfSpades,
    "5s": fiveOfSpades,
    "6s": sixOfSpades,
    "7s": sevenOfSpades,
    "8s": eightOfSpades,
    "9s": nineOfSpades,
    "10s": tenOfSpades,
    Js: jackOfSpades,
    Qs: queenOfSpades,
    Ks: kingOfSpades,
    As: aceOfSpades,
  };

  console.log(cardClicked);

  const handleMenuClick = (num) => {
    setCurrentCard(num);
  };

  return (
    <div className="board-flop">
      <div className="card one" onClick={() => handleMenuClick(1)}>
        {cardClicked.length === 2 && (
          <img className="card-image" src={cardMapper[cardClicked]} />
        )}
      </div>
      <div className="card two" onClick={() => handleMenuClick(2)}>
        {cardClicked2.length === 2 && (
          <img className="card-image" src={cardMapper[cardClicked2]} />
        )}
      </div>
      <div className="card three" onClick={() => handleMenuClick(3)}>
        {cardClicked3.length === 2 && (
          <img className="card-image" src={cardMapper[cardClicked3]} />
        )}
      </div>
      <div className="card four" onClick={() => handleMenuClick(4)}>
        {cardClicked4.length === 2 && (
          <img className="card-image" src={cardMapper[cardClicked4]} />
        )}
      </div>
      <div className="card five" onClick={() => handleMenuClick(5)}>
        {cardClicked5.length === 2 && (
          <img className="card-image" src={cardMapper[cardClicked5]} />
        )}
      </div>
    </div>
  );
}

export default CardBoard;
