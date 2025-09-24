
import './Game.css';

const Game = ({
  verifyLetter, 
  pickedWord, 
  pickedCategory, 
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score
}) => {
  return (
    <div className="game">
      <p class="points">
        <span>Pontuação: {score}</span>
      </p>
       <h1>Adivinhe a palavra</h1>
        <h3 class="tip">
          Dica sobre a palavra: <span>{pickedCategory}</span>
        </h3>
        <p>Você ainda tem {guesses} tentaivas</p>
        <div class="wordContainer">
          {letters.map((letters, i) => (
            guessedLetters.includes(letters) ?(
              <span key={i} className="letter">{letter}</span>
            ): (
              <span key={i} className="blankSquare"></span>
            )
          ))}
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
          {wrongLetters.map((letters, i) =>(
            <span key={i}>{letters}, </span>
          ))}
        </div>
    </div>
    
  )
}

export default Game;