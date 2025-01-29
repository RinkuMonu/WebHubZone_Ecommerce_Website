import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart, updateQuantity } from "../reduxslice/CartSlice"
import { Link } from "react-router-dom";


const ShoppingCart: React.FC = ({cartItems}) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(2); // Default quantity
  const [subtotal, setSubtotal] = useState(14999 * 2); // Default subtotal
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0); // Default discount value
  // const [total, setTotal] = useState(subtotal); // Total after discount
  

  const originalPrice = 31000; // Original price for one product
  const pricePerItem = 14999; // Discounted price per item

    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  
    const handleIncrement = (id: string) => {
      const item = cartItems.find((i) => i.id === id);
      if (item) {
        dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
      }
    };
  
    const handleDecrement = (id: string) => {
      const item = cartItems.find((i) => i.id === id);
      if (item && item.quantity > 1) {
        dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
      }
    };
  
    const handleDelete = (id: string) => {
      dispatch(removeItemFromCart(id));
    };

  // Function to handle quantity increment
  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateSubtotal(newQuantity);
  };

  // Function to handle quantity decrement
  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateSubtotal(newQuantity);
    }
  };

  // Function to update subtotal and total
  const updateSubtotal = (newQuantity: number) => {
    const newSubtotal = newQuantity * pricePerItem;
    setSubtotal(newSubtotal);
    setTotal(newSubtotal - discount); // Recalculate total after discount
  };

  // Function to apply coupon code
  const applyCoupon = () => {
    if (coupon.toLowerCase() === "save10") {
      const newDiscount = subtotal * 0.1; // 10% discount
      setDiscount(newDiscount);
      setTotal(subtotal - newDiscount);
      alert("Coupon applied successfully! 10% discount added.");
    } else {
      alert("Invalid coupon code.");
    }
  };

  return (
    <div className="container px-16 py-8 my-4 product-table">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Product Table */}
        <div className="col-span-2">
          <div className="overflow-x-autol">
            <table className="table-auto w-full ">
              <thead className="border-b">
                <tr className="text-gray-500 text-sm">
                  <th className="text-left p-3">Product</th>
                  <th className="text-left p-3">Price</th>
                  <th className="text-left p-3">Quantity</th>
                  <th className="text-right p-3">Total</th>
                  <th className="text-center p-3"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => {
                  return (
                    <>
                      <tr className="border-b">
                  <td className="p-3">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">
                        {item.name}
                        </h4>
                        <p className="text-green-600 text-sm">In stock</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="text-gray-700">
                      ₹{item.price}
                      <span className="line-through text-sm text-gray-500">
                        ₹{originalPrice.toLocaleString()}
                      </span>
                    </div>
                  </td>
                  <td className="p-3">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleDecrement(item.id)}
                        className="px-3 py-1 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleIncrement(item.id)}
                        className="px-3 py-1 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-3 text-right text-gray-700">
                    ₹{item.price * item.quantity}
                  </td>
                  <td className="p-3 text-center">
                    <button className="text-gray-500 hover:text-red-600">
                      <i className="bi bi-trash3"></i>
                    </button>
                  </td>
                </tr>
                    </>
                  );
                })}

               
              </tbody>
            </table>

            <div className="mt-4">
              <label htmlFor="coupon" className="block mb-2 text-sm">
                Coupon Code:
              </label>
              <div className="flex">
                <input
                  type="text"
                  id="coupon"
                  placeholder="Enter Coupon Code"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  className="flex-1 border border-gray-300 rounded-l px-3 py-2"
                />
                <button
                  onClick={applyCoupon}
                  className="px-4 bg-gray-800 text-white rounded-r"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div>
          <div className="p-4 sticky top-16 shadow-lg rounded-lg">
            <h3 className="font-semibold text-lg mb-4">Summary</h3>
            <div className="shadow-md rounded-lg bg-white">
              <div className="border-b pb-2 mb-4">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>₹{total}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax</span>
                  <span>₹0.00</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-gray-900 mb-4">
                <span>Total</span>
                <span>₹{total.toLocaleString()}</span>
              </div>
              <p className="text-sm text-gray-500 mb-4">
                (Shipping fees not included)
              </p>
              <Link to={"/address"}>
              
              
              <button  className="w-full py-2 bg-gray-800 text-white rounded mb-2">
                Proceed to Checkout
              </button>
              </Link>
              
              <button className="w-full py-2 text-gray-700 border border-gray-300 rounded">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
