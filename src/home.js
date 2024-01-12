import React from 'react';
import { Link } from 'react-router-dom';
import './css/home.css';
import NameInput from './components/nameInput';

function Home() {
    return (
        <div id='containerhome'>
            <h1>Köln Guesser</h1>
            <NameInput />
            <Link to="/game" className="btn btn-primary" id='startbutton'>Starte Spiel</Link>
        </div>
    );
}

export default Home;