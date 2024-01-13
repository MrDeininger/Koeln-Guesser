import React from 'react';
import { useContext } from 'react';
import GameContext from '../contexts/gameContext';

const NameInput = () => {
    const [name, setName] = React.useState('');
    const { gameInfo, setGameInfo } = useContext(GameContext);

    const handleChange = (event) => {
        setGameInfo({
            ...gameInfo,
            name: event.target.value,
        });
    };

    return (
        <input
            type="text"
            id='nameinput'
            placeholder={"Hier Namen eingeben"}
            onChange={handleChange}
        />
    );
};

export default NameInput;
