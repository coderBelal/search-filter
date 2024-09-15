"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Shampoo', price: 10, quantity: 1 },
    { id: 2, name: 'Face Cream', price: 20, quantity: 2 },
 
  ]);

  const router = useRouter();

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    // Implement checkout logic here
    console.log('Proceeding to checkout');
    router.push('/checkout'); // Redirect to checkout page
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price + item.quantity, 0).toFixed(2);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty!</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center border-b pb-4 mb-4">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6">
            <h2 className="text-2xl font-bold">Total: ${calculateTotal()}</h2>
            <button
              onClick={handleCheckout}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
