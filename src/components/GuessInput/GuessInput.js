import React from 'react';

function GuessInput({ handleGuessList, gameStatus }) {
  const [currentGuess, setCurrentGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleGuessList(currentGuess);

    console.log({currentGuess});
    setCurrentGuess('');
  }

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        required
        disabled={gameStatus !== 'inProgress'}
        id="guess-input" 
        type="text"
        value={currentGuess}
        pattern="[a-zA-Z]{5}"
        title="Must be a 5-letter word"
        onChange={event => {
          setCurrentGuess(event.target.value.toUpperCase())
        }} 
      />
    </form>
  );
}

export default GuessInput;
