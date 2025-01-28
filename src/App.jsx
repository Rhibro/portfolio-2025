import './App.css'
import game from "./assets/game.svg";
import notebook from "./assets/notebook.svg";
import briefcase from "./assets/briefcase.svg";
import chat from "./assets/chat.svg";

function App() {

  return (
    <>
      <h1>Rhiannon Brönnimann</h1>
      <h2>Full Stack Developer</h2>
      <img src={game} height={230} width={230} className="img-fluid About" />
      <img src={notebook} height={230} width={230} className="img-fluid Education" />
      <img src={briefcase} height={230} width={230} className="img-fluid Portfolio" />
      <img src={chat} height={230} width={230} className="img-fluid Contact" />
    </>
  )
}

export default App
