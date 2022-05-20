import React, { useState } from 'react'
import {checkWin} from './helpers/helper'

import { Header, Figure, Word, Popup } from './components';
import './App.css';
const alphabets = ["A", "B", "C", "D", "E", "F", "G",
    "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X", "Y", "Z"];
const words = ['TESTING', 'KIDDING']
const random =[Math.floor(Math.random() * words.length)]
let selectedWord = words[random]
let playable = true;

const correctLetters = []
const wrongLetters = []

const App = () => {
    const [playable, setPlayable] = useState(true)
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])
    const [disabledButtons, setDisabledButtons] = useState([])

    function playAgain(){
        setPlayable(true);

        setCorrectLetters([]);
        setWrongLetters([]);
        setDisabledButtons([]);
        selectedWord = words[random];
    }
 
    return (
        <div className='App'>
            <Header />
            <div className='game_container'>
                <Figure wrongLetters={wrongLetters} />
                <Word selectedWord={selectedWord} correctLetters={correctLetters} />
                <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>


                <div className='hangman_btns' id='allBtns' style={checkWin(correctLetters,wrongLetters,selectedWord)!=='lose'?{}:{display:'none'}}>
                    
                    {alphabets.map((alphabet, index) => {
                            const id = `b${index}`
                            return (
                                <button key={index} value={alphabet} disabled={disabledButtons.includes(id)} onClick={() => {
                                    if (playable) {
                                        if (selectedWord.includes(alphabet)) {
                                            setCorrectLetters([...correctLetters, alphabet])
                                            setDisabledButtons(prevState => [...prevState, id]);
                                            console.log(correctLetters);
                                        }
                                        else {
                                            setWrongLetters([...wrongLetters, alphabet])
                                            setDisabledButtons(prevState => [...prevState, id]);
                                            console.log(wrongLetters);
                                        }
                                    }

                                }}>{alphabet}</button>
                            )
                        }


                        )}
                </div>
            </div>
            
        </div>

    )
}


export default App