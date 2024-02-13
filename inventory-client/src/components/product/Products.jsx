import { useState } from 'react';

import { ProductCard } from './productCard/ProductCard';

import './Products.css';

export const Products = () => {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: '1',
      name: 'Computer',
      price: 70000,
      quantity: 20,
    },
    {
      id: '2',
      name: 'Keyboard',
      price: 5000,
      quantity: 40,
    },
  ];

  const productExistsInCart = (productId) =>
    cart.some((product) => product.id === productId);

  const addProductToCart = (product) => {
    if (productExistsInCart(product.id)) {
      alert('Already added!!!');
      return;
    }
    setCart([...cart, product]);
  };

  return (
    <div className="products">
      <div>
        <h3>{`In cart: ${cart.length}`}</h3>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addProductToCart}
          />
        ))}
      </div>
    </div>
  );
};
