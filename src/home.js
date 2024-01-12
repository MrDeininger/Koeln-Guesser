import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    return (
        <div className='containerhome'>
            <h1>Köln Guessr</h1>
            <Link to="/game" className="btn btn-primary" id='startbutton'>Start</Link>
        </div>
    );
}

export default Home;