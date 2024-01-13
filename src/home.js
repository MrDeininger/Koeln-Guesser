import React from 'react';
import { Link } from 'react-router-dom';
import './css/home.css';
import NameInput from './components/nameInput';
import { useContext } from 'react';
import GameContext from './contexts/gameContext';

function Home() {

    const { gameInfo, setGameInfo } = useContext(GameContext);


    return (
        <div id='containerhome'>
            <h1>Köln Guesser</h1>
            <NameInput />
            { gameInfo && gameInfo.name ? <p id='name'>Hallo {gameInfo.name}!</p> : '' }

            <Link to="/koeln-guesser/game" className="btn btn-primary" id='startbutton'>Starte Spiel</Link>
            <Link to="/koeln-guesser/info" className="btn btn-primary" id='infobutton'>Info</Link>
        </div>
    );
}

export default Home;