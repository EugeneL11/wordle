import React from 'react';

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import Guess from '../Guess'

function GuessList({ guessList, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guessNum) => (
        guessList[guessNum],
        <Guess
          key={guessNum}
          guessedWord={guessList[guessNum]}
          answer={answer}
        />
      ))}
    </div>
  );
}

export default GuessList;
