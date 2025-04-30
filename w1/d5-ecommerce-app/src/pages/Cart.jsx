import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, decreaseQuantity, addToCart } from '../redux/cartSlice';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="bg-white p-6 rounded shadow mt-8">
      <h2 className="text-2xl font-bold mb-4">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-4">

                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />

                <div>
                  
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                  
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      className="bg-gray-300 px-2 rounded"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="bg-gray-300 px-2 rounded"
                    >
                      +
                    </button>
                  </div>

                </div>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="text-right font-bold text-lg pt-4">Total: ${total}</div>
        </div>
      )}
    </div>
  );
};

export default Cart;
