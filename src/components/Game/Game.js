import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessInput from '../GuessInput';
import GuessList from '../GuessList/GuessList';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState('inProgress');
  const [guessList, setGuessList] = React.useState([]);

  function handleGuessList(currentGuess) {
    const nextGuessList = [...guessList, currentGuess];
    setGuessList(nextGuessList);

    if (currentGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }

    console.log({ guessList });
  }

  return (
    <>
      <GuessList
        guessList={guessList}
        answer={answer}
      />
      <GuessInput
        handleGuessList={handleGuessList}
        gameStatus={gameStatus}
      />
      {
        gameStatus === 'won' && 
        <WonBanner numOfGuesses={guessList.length}/>
      }
      {
        gameStatus === 'lost' && 
        <LostBanner answer={answer}/>
      }
    </>
  )
}

export default Game;
