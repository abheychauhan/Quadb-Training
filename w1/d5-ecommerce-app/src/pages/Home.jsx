import { createContext, useContext, useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import API from '../axios/axios';

const Home = () => {

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([])



  useEffect(() => {
     API.get('/products')
      .then(response => {
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full h-full bg-gray-100 p-6">
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        
        <ProductList products={products} />
      )}

    </div>
  );
};

export default Home;
