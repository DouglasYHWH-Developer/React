
import './Game.css';

const Game = ({verifyLetter}) => {
  return (
    <div className="game">
      <p class="points">
        <span>Pontuação: 000</span>
      </p>
       <h1>Adivinhe a palavra</h1>
        <h3 class="tip">
          Dica sobre a palavra: <span>Dica...</span>
        </h3>
        <p>Você ainda tem XXX tentaivas</p>
        <div class="wordContainer">
          <span className='letter'>A</span>
          <span className="blankSquare"></span>
        </div>
        <div class="letterContainer">
          <p>Tente adivinhar uma letra da palavra: </p>
          <form>
            <input type="text" name='letter' maxLength="1" required />
            <button>Jogar!</button>
          </form>
        </div>
        <div class="wrongLetterContainer">
          <p>Letras já utilizadas</p>
          <span>a,</span>
          <span>b,</span>
        </div>
    </div>
    
  )
}

export default Game;