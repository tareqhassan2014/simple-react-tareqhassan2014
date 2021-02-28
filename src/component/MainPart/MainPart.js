import React from 'react';
import Player from '../Player/Player';

const MainPart = (props) => {
    const player = props.player;

    return (
        <div className="row row-cols-3">
            {
                player.map(player => <Player player={player}></Player>)
            }
        </div>
    );
};

export default MainPart;