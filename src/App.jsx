import Homepage from './components/Homepage';
import { useState } from 'react'

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  function startGame(){
    setIsGameStarted(!isGameStarted);
  }
  return(
    <div>

      {isGameStarted ? <Gamepage /> : <Homepage startGame={startGame} />}
    </div>
  )
}

export default App
