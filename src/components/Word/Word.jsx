import React from 'react';
import './word.css';


const Word = ({selectedWord, correctLetters}) => {
  const maskedWord = selectedWord.split('').map(letter =>
    correctLetters.includes(letter)? letter:"_").join(" ");
  return (
    <div className='word'>
        <p>
          {maskedWord}
          </p>
    </div>
  )
}

export default Word