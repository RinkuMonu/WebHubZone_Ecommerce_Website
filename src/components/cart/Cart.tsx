import React from "react";
import { X, ShoppingCart, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItemFromCart, updateQuantity } from "../../reduxslice/CartSlice";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, cartItems }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Total Price Calculation
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Increment Quantity
  const handleIncrement = (id: string) => {
    const item = cartItems.find((i) => i.id === id);
    if (item) {
      dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
    }
  };

  // Decrement Quantity
  const handleDecrement = (id: string) => {
    const item = cartItems.find((i) => i.id === id);
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
    }
  };

  // Remove Item from Cart
  const handleDelete = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  // Checkout Logic with Login Check
  const handleCheckout = () => {
    const token = localStorage.getItem("userData"); // Check login status
    if (!token) {
      Swal.fire({
        title: "Login Required",
        text: "You need to login before proceeding to checkout.",
        icon: "warning",
        confirmButtonText: "Go to Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
          onClose(); // Redirect to login page
        }
      });
      return;
    }

    // If logged in, navigate to checkout page
    navigate("/address");
    onClose(); // Close Cart Modal
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-transform duration-700 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-opacity-50" onClick={onClose}></div>

      {/* Cart Modal */}
      <div className="bg-white w-96 p-6 relative shadow-xl h-full overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <ShoppingCart className="h-6 w-6 text-gray-900 mr-2" />
          Your Cart
        </h2>

        {/* Cart Items */}
        <ul className="space-y-4">
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between py-4 border-b border-gray-200"
            >
              <div className="flex items-center">
                <div className="h-16 w-16 overflow-hidden rounded-md border border-gray-300">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <p className="text-base font-medium text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-600">₹{item.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="px-3 py-1 border rounded-md text-gray-600 hover:text-gray-900"
                  onClick={() => handleDecrement(item.id)}
                >
                  -
                </button>
                <span className="text-sm font-medium">{item.quantity}</span>
                <button
                  className="px-3 py-1 border rounded-md text-gray-600 hover:text-gray-900"
                  onClick={() => handleIncrement(item.id)}
                >
                  +
                </button>
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => handleDelete(item.id)}
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Cart Summary */}
        <div className="mt-6 border-t border-gray-200 pt-4">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>₹{total}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Shipping and taxes calculated at checkout
          </p>

          {/* Checkout Button with Login Check */}
          <div className="mt-4">
            {total === 0 ? (
              <div className="flex justify-center">
                <p>Nothing To Cart</p>
              </div>
            ) : (
              <button
                onClick={handleCheckout} // Call handleCheckout function
                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
              >
                Checkout
              </button>
            )}
          </div>
        </div>

        {/* Continue Shopping Option */}
        <div className="mt-4 text-sm text-center text-gray-500">
          <p>
            or{" "}
            <button
              onClick={onClose}
              className="text-indigo-600 font-medium hover:text-indigo-500"
            >
              Continue Shopping
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
