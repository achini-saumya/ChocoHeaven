import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';


import chocolateA from '../Assets/imgP1.jpeg';
import chocolateB from '../Assets/imgP2.jpeg';
import chocolateC from '../Assets/imgP9.jpeg';
import chocolateD from '../Assets/imgP4.jpeg';
import chocolateE from '../Assets/imgP5.jpeg';
import chocolateF from '../Assets/imgP6.jpeg';
import chocolateH from '../Assets/imgP7.jpeg';
import chocolateI from '../Assets/imgP8.jpeg';



const ProductList = () => {
    const [products] = useState([
        { id: 1, name: 'Chocolate A', price: 10, description: '', category: 'Chocolate', image: chocolateA, quantity: 1 },
        { id: 2, name: 'Chocolate B', price: 15, description: '', category: 'Chocolate', image: chocolateB, quantity: 1 },
        { id: 3, name: 'Chocolate C', price: 20, description: '', category: 'Truffles', image: chocolateC, quantity: 1 },
        { id: 4, name: 'Chocolate D', price: 25, description: '', category: 'Snacks', image: chocolateD, quantity: 1 },
        { id: 5, name: 'Chocolate A', price: 10, description: '', category: 'Chocolate', image: chocolateE, quantity: 1 },
        { id: 6, name: 'Chocolate B', price: 15, description: '', category: 'Chocolate', image: chocolateF, quantity: 1 },
        { id: 7, name: 'Chocolate C', price: 20, description: '', category: 'Truffles', image: chocolateH, quantity: 1 },
        { id: 8, name: 'Chocolate D', price: 25, description: '', category: 'Snacks', image: chocolateI, quantity: 1 },
   
    
    ]);

    const [category, setCategory] = useState('');
    const [popupMessage, setPopupMessage] = useState('');

    const addToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push(product);
        }
        localStorage.setItem('cart', JSON.stringify(cart));

        setPopupMessage(`${product.name} added to cart!`);
        setTimeout(() => {
            setPopupMessage('');
        }, 2000);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const filteredProducts = products.filter(product => 
        category === '' || product.category === category
    );

    return (
        <div className="product-list">
            <h2>Chocolate Products</h2>
            <div className="filters">
                <select value={category} onChange={handleCategoryChange}>
                    <option value="">All Categories</option>
                    <option value="Chocolate">Chocolate</option>
                    <option value="Truffles">Truffles</option>
                    <option value="Snacks">Snacks</option>
                </select>
            </div>
            <div className="products">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
            {popupMessage && <div className="popup">{popupMessage}</div>}
            <Link to="/cart"></Link>
        </div>
    );
};

export default ProductList;
