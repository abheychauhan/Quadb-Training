import React, { use, useEffect, useState } from 'react'
import API from '../axios/axios'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function ProductDetails() {

   const {id} = useParams();
   console.log(id);

   const [product, setProduct] = useState({});
   
   const dispatch = useDispatch();
   const [loading, setLoading] = useState(true);

  useEffect(() => {
     API.get(`/products/${id}`)
      .then(response => {
        console.log(response.data);
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }
  , [])

  const handleCart = () => {
    dispatch(addToCart(product));
    console.log('Product added to cart:', product);
  }
  return (
    <div className="w-full h-screen bg-gray-100 p-6">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="bg-white p-6 rounded shadow-md">
          <h1 className="text-3xl font-bold mb-4">Product Details</h1>
          <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
          <img src={product.image} alt={product.title} className="w-[200px] h-auto mb-4" />
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-gray-700 mb-4">Category: {product.category}</p>
          <p className="text-gray-700 mb-4">Rating: {product.rating?.rate} ({product.rating?.count} reviews)</p>
          
          <p className="text-lg font-bold">${product.price}</p>
          <div className="mt-4">
            <button onClick={handleCart} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
             { }
            </button>
          </div>
        
        </div>
      )}
      
    </div>
  )
}

export default ProductDetails