import { useState } from "react";

interface valeur {
  tableau: {
    description: string;
  }[];
}

function BoutonCed({ tableau }: valeur) {
  const [blagues, setBlagues] = useState("Afficher votre blague ici");

  const handleClick = () => {
    const random = Math.floor(Math.random() * tableau.length);
    setBlagues(tableau[random].description);
  };

  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="name">
      <button type="button" onClick={handleClick}>
        Cliquez-ici
      </button>
      <p className="text">
        <strong>{blagues}</strong>
      </p>
      <button type="button" className="star" onClick={toggleLike}>
        {isLiked ? "⭐" : "☆"}
      </button>
    </div>
  );
}

export default BoutonCed;
