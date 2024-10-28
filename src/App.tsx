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
