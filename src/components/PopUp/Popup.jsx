import React from 'react'
import {checkWin} from '../../helpers/helper'
import './popup.css'

function Popup({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) {
    let finalMsg = '';
    let finalMsgRevealWord='';
    let playable=true;

    if(checkWin(correctLetters,wrongLetters,selectedWord)==='win'){
        finalMsg='Congratulations! You Win!';
        playable=false;
    }
    else if(checkWin(correctLetters,wrongLetters,selectedWord)==='lose'){
        finalMsg='Sadly you lose :(';
        finalMsgRevealWord=`...the word is: ${selectedWord}`;
        playable=false;
    }
    return (
    <div className='popup_container' style={finalMsg!==''?{}:{display:'none'}}>
        <div className='popup'>
            <h2>{finalMsg}</h2>
            <h3>{finalMsgRevealWord}</h3>
            <button id='play-btn' onClick={playAgain}>Play Again</button>
        </div>
    </div>
  )
}

export default Popup