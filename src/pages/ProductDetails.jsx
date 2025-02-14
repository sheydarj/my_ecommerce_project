import { useParams } from "react-router-dom";
import products from "../data/products.json";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h1 className="text-center text-red-500">Product not found</h1>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-600">{product.description}</p>
      <p className="font-bold text-lg">${product.price}</p>
    </div>
  );
};

export default ProductDetails;
