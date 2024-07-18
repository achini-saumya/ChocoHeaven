import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';


const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    const updateQuantity = (productId, amount) => {
        const updatedCart = cart.map((item) => {
            if (item.id === productId) {
                return { ...item, quantity: Math.max(item.quantity + amount, 1) };
            }
            return item;
        });
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((product) => product.id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const calculateTotalPrice = (price, quantity) => {
        return (price * quantity).toFixed(2);
    };

    const calculateCartTotal = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cart.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((product) => (
                            <tr key={product.id}>
                                <td><img src={product.image} alt={product.name} /></td>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>${calculateTotalPrice(product.price, product.quantity)}</td>
                                <td>
                                    <button onClick={() => updateQuantity(product.id, 1)}>+</button>
                                    <button onClick={() => updateQuantity(product.id, -1)}>-</button>
                                    <button onClick={() => removeFromCart(product.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="2"><strong>Total</strong></td>
                            <td><strong>{cart.reduce((total, product) => total + product.quantity, 0)}</strong></td>
                            <td><strong>${calculateCartTotal()}</strong></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            ) : (
                <p>Your cart is empty</p>
            )}
            {cart.length > 0 && (
                <Link to="/checkout">
                    <button className="proceed-button">Proceed to Checkout</button>
                </Link>
            )}
        </div>
    );
};

export default Cart;
