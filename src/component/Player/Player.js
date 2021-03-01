import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const { name, img, auctionMoney, nationality, position, club } = props.player;

    return (
        <div className="row">
            <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"> Nationality: {nationality} <br /> Club: {club} <br /> Position: {position} <br /> Auction Money: {auctionMoney} Millions</p>
                    <button onClick={() => props.handelAddPlayer(props.player)} className="btn btn-primary"><FontAwesomeIcon icon={faUserPlus} /> Add your team</button>
                </div>
            </div>
        </div>
    );
};

export default Player;