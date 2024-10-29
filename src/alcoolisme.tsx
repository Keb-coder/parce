import { useState } from "react";
interface Alcoolisme {
  blagueAlcool: number;
  setBlagueAlcool: (index: number) => void;
  blaguesAlcoolisme: string[];
}

function Alcoolisme({ blaguesAlcoolisme }: Alcoolisme) {
  const [blagueAlcool, setBlagueAlcool] = useState(0);
  const handleClick = () => {
    setBlagueAlcool(blagueAlcool + 1);
  };

  return (
    <div className="div">
      <button type="button" onClick={handleClick}>
        Prochaine blague
      </button>
      <p>{blaguesAlcoolisme[blagueAlcool]}</p>
    </div>
  );
}

export default Alcoolisme;
