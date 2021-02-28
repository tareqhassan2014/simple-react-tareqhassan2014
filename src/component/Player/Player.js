import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Player = (props) => {
    const { name, img, auctionMoney, nationality, position, club, id } = props.player;

    return (
        <div className="row">
            <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button className="btn btn-primary">Go somewhere</button>
                </div>
            </div>
        </div>
    );
};

export default Player;