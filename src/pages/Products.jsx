import { Link } from "react-router-dom";
import products from "../data/products.json";

const Products = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="my-2">
            <Link to={`/products/${product.id}`} className="text-blue-500">
              {product.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
