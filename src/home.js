import React from 'react';
import { Link } from 'react-router-dom';
import './css/home.css';
import NameInput from './components/nameInput';
import { useContext } from 'react';
import GameContext from './contexts/gameContext';
import ScoreDisplay from './components/ScoreDisplay';

function Home() {

    const { gameInfo, setGameInfo } = useContext(GameContext);


    return (
        <div id='containerhome'>
            <h1>Köln Guesser</h1>
            <NameInput />
            { gameInfo && gameInfo.name ? <p id='name'>Hallo {gameInfo.name}!</p> : '' }

            <Link to="/game" className="btn btn-primary" id='startbutton'>Starte Spiel</Link>
            <Link to="/info" className="btn btn-primary" id='infobutton'>Info</Link>
            <ScoreDisplay />
        </div>
    );
}

export default Home;