import React, { useEffect, useState } from "react";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { products } from "../../data/products"; // Import shared products data
import { Link } from "react-router-dom";

const TrendingProducts = ({
  addToCart,
}: {
  addToCart: (product: any) => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility

  useEffect(() => {
    // Lock scroll on the background when modal is open
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isModalOpen]);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };
  return (
    <section className="py-16 bg-white px-20">
      <div className="container  sm:px-4">
        <h2 className="text-4xl font-bold mb-8">
          <span className="text-[#5252a2]">Trending</span> Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.slice(30, 60).map((product) => (
            <div
              key={product.id}
              className="group grid grid-cols-1 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
            >
              <div className="relative overflow-hidden cursor-pointer "  onClick={openModal}>
                <img
                  className="p-8 rounded-lg w-96 h-64 object-contain transform  transition duration-300"
                  src={product.image}
                  alt={product.name}
                />
                {/* This div will become visible when hovered */}
                <div className="absolute inset-0  bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="absolute left-5 top-[57px] opacity-0 invisible group-hover:opacity-100 group-hover:visible  transition-opacity duration-300">
                  <div className="flex flex-col">
                    {/* Action buttons */}
                    <button
                      onClick={() => addToCart(product)}
                      type="button"
                      className="relative flex items-center justify-center bg-white text-black rounded-full shadow-sm text-xl h-[42px] w-[42px] mb-1.5 cursor-pointer hover:text-white hover:bg-black group"
                    >
                      <ShoppingCart />
                      <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        Cart
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={openModal}
                      className="relative flex items-center justify-center bg-white text-black rounded-full shadow-sm text-xl h-[42px] w-[42px] mb-1.5 cursor-pointer hover:text-white hover:bg-black group"
                    >
                      <Eye />
                      <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        View
                      </span>
                    </button>

                    {/* Modal */}
                    {isModalOpen && (
                      <div
                        id="default-modal"
                        tabIndex={-1}
                        aria-hidden="true"
                        className="fixed  inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
                        onClick={closeModal}
                      >
                        <div
                          className="relative bottom-4 p-4 w-full max-w-[80vw] bg-white rounded-lg shadow-lg mt-10 grid grid-cols-1 md:grid-cols-2 max-h-[90vh] overflow-y-auto "
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="flex items-center justify-center p-10">
                            <img
                              className="p-8 rounded-lg w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                              src={product.image}
                              alt={product.name}
                            />
                          </div>

                          {/* Modal content */}
                          <div className="relative">
                            {/* Modal header */}
                            <div className="flex items-center justify-between py-4 rounded-t">
                              <h3 className="text-3xl font-semibold text-gray-900">
                                {product.name}
                                <div className="flex items-center mt-2.5 ">
                                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                    <svg
                                      className="w-4 h-4 text-yellow-300"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="currentColor"
                                      viewBox="0 0 22 20"
                                    >
                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                      className="w-4 h-4 text-yellow-300"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="currentColor"
                                      viewBox="0 0 22 20"
                                    >
                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                      className="w-4 h-4 text-yellow-300"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="currentColor"
                                      viewBox="0 0 22 20"
                                    >
                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                      className="w-4 h-4 text-yellow-300"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="currentColor"
                                      viewBox="0 0 22 20"
                                    >
                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg
                                      className="w-4 h-4 text-gray-200 dark:text-gray-600"
                                      aria-hidden="true"
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="currentColor"
                                      viewBox="0 0 22 20"
                                    >
                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                  </div>
                                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                                    {product.rating}
                                  </span>
                                </div>
                              </h3>
                              <button
                                type="button"
                                onClick={closeModal}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
                              >
                                <svg
                                  className="w-3 h-3"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                  />
                                </svg>
                                <span className="sr-only">Close modal</span>
                              </button>
                            </div>

                            {/* Modal body */}
                            <div className="p-4">
                              <ul className="text-base text-gray-500 list-disc">
                                <li className="py-2">
                                  Operating System: Windows 11 Home
                                </li>
                                <li className="py-2">
                                  Processor: Intel Core Celeron N4500
                                </li>
                                <li className="py-2">
                                  Display: 35.6 cm (14") Display with TN, HD
                                  1366 x 768, Acer ComfyView LED-backlit TFT
                                  LCD, 16:9 aspect ratio, Ultra-slim design,
                                  Mercury free, environment friendly
                                </li>
                                <li className="py-2">
                                  Graphics: Intel UHD Graphics
                                </li>
                              </ul>

                              <div className="flex items-center justify-between py-6">
                                <span className="text-xl font-bold text-gray-900">
                                  ₹{product.price}
                                </span>
                              </div>

                              <span className="text-green-500">Available</span>

                              <div className="">
                                {/* Quantity */}
                                <h2 className="py-2">Quantity</h2>
                                <div className="flex justify-between">
                                  <div className="flex items-center space-x-4 mb-4">
                                    <button
                                      onClick={handleDecrease}
                                      className="px-3 py-1 border rounded hover:bg-gray-100"
                                    >
                                      -
                                    </button>
                                    <span className="text-lg font-medium">
                                      {quantity}
                                    </span>
                                    <button
                                      onClick={handleIncrease}
                                      className="px-3 py-1 border rounded hover:bg-gray-100"
                                    >
                                      +
                                    </button>
                                  </div>

                                  {/* Add to Cart */}
                                  <div
                                    className="flex items-center space-x-2 mb-4"
                                    onClick={() => addToCart(product)}
                                  >
                                    <button className="flex-1 px-16 py-2 border rounded bg-white hover:bg-gray-100">
                                      Add To Cart
                                    </button>
                                  </div>
                                </div>

                                {/* Buy Now */}
                                <div className="mb-4">
                                  <Link to="/address">
                                    <button className="w-full px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">
                                      Buy Now
                                    </button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <button
                      type="button"
                      className="relative flex items-center justify-center bg-white text-black rounded-full shadow-sm text-xl h-[42px] w-[42px] mb-1.5 cursor-pointer hover:text-white hover:bg-black group"
                    >
                      <Heart />
                      <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        Wishlist
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                    {product.name}
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                    {product.rating}
                  </span>
                </div>

                <p className="text-gray-600">{product.category}</p>
                <p className="text-xl font-bold">₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
