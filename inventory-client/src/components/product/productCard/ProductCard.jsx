import './ProductCard.css';

export function ProductCard({ product, addToCart }) {
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{`TK ${product.price}`}</p>
      <p>{`Quantity: ${product.quantity}`}</p>
      <button onClick={handleAddToCart} className="product-card-cart-btn">
        Add to Cart
      </button>
    </div>
  );
}
