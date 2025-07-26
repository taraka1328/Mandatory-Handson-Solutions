// src/OnlineShopping.js
import React from 'react';
import Cart from './Cart';

class OnlineShopping extends React.Component {
  render() {
    const cartItems = [
      { itemname: 'Mobile Phone', price: 15000 },
      { itemname: 'Headphones', price: 2000 },
      { itemname: 'Smart Watch', price: 5000 },
      { itemname: 'Laptop', price: 45000 },
      { itemname: 'Backpack', price: 1200 }
    ];

    return (
      <div className="mydiv">
            <h1>Items Ordered :</h1>
            <Cart items={cartItems} />
      </div>
    );
  }
}

export default OnlineShopping;
