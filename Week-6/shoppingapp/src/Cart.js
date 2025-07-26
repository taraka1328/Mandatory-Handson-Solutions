// src/Cart.js
import React from 'react';

class Cart extends React.Component {
  render() {
    const {items } = this.props;
   return (
      <div>
        {items.map((item, index) => (
          <div key={index} style={{ border: '1px solid gray', margin: '10px', padding: '10px', width: '300px' }}>
            <h3>Item: {item.itemname}</h3>
            <p>Price: ₹{item.price}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Cart;
