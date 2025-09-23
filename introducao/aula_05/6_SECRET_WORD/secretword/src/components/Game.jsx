
import './Game.css';

const Game = ({verifyLetter}) => {
  return (
    <div className="game">
      <p class="points">
        <span>Pontuação: 000</span>
      </p>
       <h1>Adivinhe a palavra</h1>
        <h3 class="tip">
          Dica sobre a palavra: 
        </h3>
    </div>
    
  )
}

export default Game