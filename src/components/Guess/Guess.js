import React from 'react';

import { range } from '../../utils';

import { checkGuess } from '../../game-helpers'

function Cell({ letter, status }) {
  const statusClass = status ? `cell ${status}` : 'cell';

  return (
  <span className={statusClass}>
    {letter}
  </span>
  );
}

function Guess({ guessedWord, answer }) {
  const GUESS_LENGTH = 5;
  const checkedGuess = checkGuess(guessedWord, answer);

  return (
    <p className="guess">
      {range(GUESS_LENGTH).map((letterPosition) => (
        <Cell 
          key={letterPosition}
          letter={checkedGuess 
                  ? checkedGuess[letterPosition].letter 
                  : undefined}
          status={checkedGuess 
                  ? checkedGuess[letterPosition].status 
                  : undefined}
        />
      ))}
    </p>
  );
}

export default Guess;
