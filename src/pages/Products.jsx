import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productsData from "../data/products.json";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // To store the items in the cart

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to the cart!`);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg">
      <img
  src={product.image}
  alt={product.name}
  className="w-40 h-40 object-cover rounded-lg mb-2"
/>


            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-700">${product.price}</p>
            <Link
              to={`/products/${product.id}`}
              className="block mt-2 bg-blue-500 text-white py-2 px-4 rounded"
            >
              View Details
            </Link>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Optionally, display the cart */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold">Cart</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="mt-2">{item.name} - ${item.price}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;
