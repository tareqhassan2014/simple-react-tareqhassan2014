import React from 'react';

const Cart = (props) => {
  const cartPlayer = props.cartPlayer
  const totalAuctionMoney = cartPlayer.reduce((total, player) => total + player.auctionMoney, 0)
  return (
    <div>
      <h2>Player Added: {cartPlayer.length}</h2>
      <p> Total muction money: €{Math.round(totalAuctionMoney)} Millions</p>
      <h2>Players Name:</h2>
      <ul>
        {
          cartPlayer.map(player => <li>{player.name}</li>)
        }
      </ul>
    </div>
  );
};

export default Cart;