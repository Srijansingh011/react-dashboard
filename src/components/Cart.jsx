import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { cartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Cart = () => {
  const { currentColor, setIsClicked, initialState } = useStateContext();
  const total = cartData.reduce((sum, item) => sum + parseInt(item.price.replace('$', '')), 0);

  return (
    <div className="fixed inset-0 z-[9999]" style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}>
      <div className="absolute right-0 top-0 h-full w-96 bg-white dark:bg-gray-900 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800">
          <div>
            <p className="text-lg font-bold text-gray-800 dark:text-white">Shopping Cart</p>
            <p className="text-xs text-gray-400 mt-0.5">{cartData.length} items</p>
          </div>
          <button
            type="button"
            onClick={() => setIsClicked(initialState)}
            className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 transition-colors"
          >
            <MdOutlineCancel className="text-xl" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartData.map((item, index) => (
            <div key={index} className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <img
                className="rounded-xl h-20 w-20 object-cover flex-shrink-0"
                src={item.image}
                alt={item.name}
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 dark:text-white text-sm truncate">{item.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{item.category}</p>
                <div className="flex items-center justify-between mt-3">
                  <p className="font-bold text-gray-800 dark:text-white">{item.price}</p>
                  <div className="flex items-center gap-2">
                    <button className="w-7 h-7 rounded-lg bg-white dark:bg-gray-700 shadow-sm text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors text-sm font-bold">−</button>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">1</span>
                    <button className="w-7 h-7 rounded-lg text-white flex items-center justify-center hover:opacity-90 transition-opacity text-sm font-bold" style={{ background: currentColor }}>+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 dark:border-gray-800 space-y-4">
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>Subtotal</span><span className="font-semibold text-gray-800 dark:text-white">${total}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
            <span>Shipping</span><span className="text-emerald-500 font-semibold">Free</span>
          </div>
          <div className="flex justify-between font-bold text-gray-800 dark:text-white">
            <span>Total</span><span>${total}</span>
          </div>
          <button
            type="button"
            className="w-full py-3.5 rounded-2xl text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: `linear-gradient(135deg, ${currentColor}, #a855f7)` }}
          >
            Checkout Now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
