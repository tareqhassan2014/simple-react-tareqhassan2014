import { useEffect, useState, React } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './MainPart.css';

const MainPart = () => {
    const [player, setPlayer] = useState([]);
    const [cartPlayer, setCartPlayer] = useState([]);

    const handelAddPlayer = (player) => {
        setCartPlayer([...cartPlayer, player]);
    };

    useEffect(() => {
        fetch('https://api.mocki.io/v1/3bfebad3')
            .then(response => response.json())
            .then(data => setPlayer(data))
    }, []);

    return (
        <div className="d-flex justify-content-between">
            <div className="playerCard">
                {
                    player.map(player => <Player player={player} handelAddPlayer={handelAddPlayer} key={player.id}></Player>)
                }
            </div>
            <div>
                <Cart cartPlayer={cartPlayer}/>
            </div>
        </div>
    );
};

export default MainPart;