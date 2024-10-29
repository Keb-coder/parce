import { useState } from "react";


interface valeur{
    tableau: { 
        description: string,  
        id: number }[];
}

function BoutonCed ({ tableau} : valeur ) {

const [blagues, setBlagues] = useState("Afficher votre blague ici")    
const [isLiked, setIsLiked] = useState(false);

const toggleLike = ()=>{
    setIsLiked(!isLiked);
};

const handleClick = () => {
const random = Math.floor(Math.random() * tableau.length)
    setBlagues (tableau[random].description);
}

return(
<div className="name">
  
    <button onClick={handleClick}>Cliquez-ici</button>
    <p className="text"> <strong>{blagues}</strong></p> <button className="star" onClick={toggleLike}>{isLiked ? "⭐" : "☆"}</button>
       
</div>
);

}

export default BoutonCed;