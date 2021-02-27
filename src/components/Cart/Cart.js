import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((sum,country) => sum + country.population ,0)
    return (
        <div>
            <h4>This is Cart {cart.length} </h4>
            <p>Population: {totalPopulation} </p>
        </div>
    );
};

export default Cart;