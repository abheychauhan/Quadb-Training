// src/components/ProductList.jsx
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {

    return (
        <div className="w-full h-full bg-gray-100 p-6">
            <h2 className="text-2xl font-bold mb-4">🛍️ Product List</h2>

            <ProductCard products={products} />

        </div>
    );
};

export default ProductList;
