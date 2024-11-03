/** @format */
import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 100, quantity: 1 },
    { id: 2, name: "Product 2", price: 150, quantity: 1 },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <section className="text-gray-600 body-font w-full">
      <div className="container px-5 py-5 mx-auto">
        <h1 className="text-2xl font-bold text-primary mb-6 text-center">Cart</h1>

        <div className="lg:flex lg:space-x-8">
          {/* Cart Items Section */}
          <div className="lg:w-2/3">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border-b">
                <div>
                  <h2 className="text-lg font-medium">{item.name}</h2>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            ))}
            {cartItems.length === 0 && <p className="text-center">Your cart is empty.</p>}
          </div>

          {/* Billing Section */}
          <div className="lg:w-1/3 mt-6 lg:mt-0">
            <div className="p-4 bg-gray-100 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Billing Summary</h2>
              <p className="flex justify-between text-lg font-medium">
                <span>Total:</span> <span>${calculateTotal()}</span>
              </p>
              <button className="w-full bg-primary text-light py-2 px-4 rounded-lg mt-4 hover:bg-secondary transition-all duration-300">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
