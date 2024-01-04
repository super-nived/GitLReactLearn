// src/Home.js
import React from 'react';
import Product from './product';

const Home = () => {
  // Dummy product data
  const productData = {
    name: 'Sample Product',
    price: 19.99,
    description: 'This is a sample product description.',
  };

  return (
    <div>
      <h1>Welcome to our Online Store</h1>
      <Product {...productData} />
    </div>
  );
};

export default Home;
