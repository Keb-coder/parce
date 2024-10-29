import './App.css'
import BoutonCed from './bouttonCed';

function App() {

  const tableau =[
{   id:1,
    description: "C'est l'histoire du ptit dej, tu la connais ? Pas de Bol",
  },
{
  id:2,
    description: "LA blague du soir ",
},
{
  id:3,  
    description: "C'est quoi un petit pois avec une épée face à une carotte avec une épée ? Un bon duel",
},
{
    id:4,
    description: "La blague ",
},
{
    id:5,
    description: "La",
},

  ];

  return (
    <>
    <header className='header'>
      <h1 className='title'>Les blagues des Wild-Parces</h1>
      <h3>Rigole avec nous</h3>
      <span>choisis ton type de blague</span>
      </header>
      <main>
        <section className="section">
    <div className='classtest'>
      <BoutonCed tableau={tableau} />
      </div>
      <BoutonCed tableau={tableau} />
      <BoutonCed tableau={tableau} />
      <BoutonCed tableau={tableau} />
    
    </section>
    </main>
    <footer>
      <p>description</p>
    </footer>
    </>
  )
}

export default App

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
