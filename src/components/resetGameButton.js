import React from 'react';

const ResetGameButton = ({ resetGame }) => {
    const handleReset = () => {
        resetGame();
    };

    return (
        <button onClick={handleReset} className='btn btn-secondary' id='resetGameButton'>
            Neuer Versuch
        </button>
    );
};

export default ResetGameButton;
