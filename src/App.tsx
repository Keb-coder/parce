import { useState } from "react";
import "./App.css";
import Alcoolisme from "./alcoolisme";

function App() {
  const [blagueAlcool, setBlagueAlcool] = useState(0);
  const blaguesAlcoolisme = [
    "Un fils demande à son pére: -Papa! C'est quoi un alcoolique? -Hé bien un  alcoolique, c'est quelqu'un qui va voir les choses en double. Tu vois par exemple ces 4 arbres là bas? L'alcoolique lui en verra 8. -Mais papa, il n'y a que 2 arbres",
    "bl",
    "vb",
  ];
  return (
    <>
      <Alcoolisme
        blaguesAlcoolisme={blaguesAlcoolisme}
        blagueAlcool={blagueAlcool}
        setBlagueAlcool={setBlagueAlcool}
      />
    </>
  );
}
export default App;
