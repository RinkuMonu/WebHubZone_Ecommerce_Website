import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products"; // Assuming you have sample products data
import { Product } from "../types";
import ProductCard from "../components/products/ProductCard";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaRegCopy,
} from "react-icons/fa";
import { Eye, Heart, ShoppingCart } from "lucide-react";

interface ProductDetailsProps {
  addToCart: (product: Product) => void;
}


const ProductDetails = ({ addToCart }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description"
  );
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const { id } = useParams();

  // Convert id to number before comparing
  const product = products.find((prod) => prod.id === parseInt(id!)); // Use parseInt to ensure both sides are numbers

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className="relative  bg-white grid grid-cols-1 md:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-center p-10 lg:-mt-[400px]">
          <img
            className="p-8 rounded-lg w-100 h-100 object-cover transform group-hover:scale-105 transition duration-300"
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
          </div>

          {/* Modal body */}
          <div className="p-4">
            <ul className="text-base text-gray-500 list-disc">
              <li className="py-2"> {product.name}</li>
              <li className="py-2">{product.brand}</li>
              <li className="py-2">
           {product.description}
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
                  <span className="text-lg font-medium">{quantity}</span>
                  <button
                    onClick={handleIncrease}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <div className="flex items-center space-x-2 mb-4" onClick={() => addToCart(product)}>
                  <button className="flex-1 px-16 py-2 border rounded bg-white hover:bg-gray-100">
                    Add To Cart
                  </button>
                </div>
              </div>

              {/* Buy Now */}
              <div className="mb-4">
                <button className="w-full px-4 py-2 text-white" style={{backgroundColor:"#214b87"}}
                  onClick={() => addToCart(product)}>
                  Buy Now
                </button>
              </div>

              {/* Wishlist and SKU */}
              <div className="flex items-center justify-between text-sm mb-4">
                <button className="text-gray-500 hover:text-gray-700 text-xl">
                  <span className="mr-1">♥</span> Add Wishlist
                </button>
              </div>
              <div>
                <hr></hr>
              </div>
              {/* SKU and Category */}
              <div className="text-base py-6">
                <p className="text-black">{product.brand}o</p>
                <p className="text-black">
                  Category: <span className="text-gray-600">{product.category}</span>
                </p>
              </div>

              <div className="">


                {/* Share Section */}
                <div className="mb-4 flex items-center gap-4">
                  <p className="text-base font-medium text-gray-700">Share:</p>
                  <div className="grid grid-cols-4 sm:grid-cols-7 md:grid-cols-4 lg:grid-cols-7 items-center gap-6 text-gray-700">
                    <FaFacebookF className="cursor-pointer hover:text-blue-600  rounded-full shadow-md w-12 h-12 p-3" />
                    <FaTwitter className="cursor-pointer hover:text-blue-400 rounded-full shadow-md  w-12 h-12 p-3" />
                    <FaPinterestP className="cursor-pointer hover:text-red-600 rounded-full shadow-md  w-12 h-12 p-3" />
                    <FaLinkedinIn className="cursor-pointer hover:text-blue-700 rounded-full shadow-md  w-12 h-12 p-3" />
                    <FaWhatsapp className="cursor-pointer hover:text-green-500 rounded-full shadow-md  w-12 h-12 p-3" />
                    <FaEnvelope className="cursor-pointer hover:text-gray-700 rounded-full shadow-md  w-12 h-12 p-3" />
                    <FaRegCopy className="cursor-pointer hover:text-gray-700 rounded-full shadow-md  w-12 h-12 p-3" />
                  </div>
                </div>

                {/* Info Section */}
                <div className="mb-4 text-base text-gray-600">
                  <p className="flex items-center space-x-2">
                    <span>✔</span>
                    <span>30 days easy returns</span>
                  </p>
                  <p className="flex items-center space-x-2 mt-2">
                    <span>✔</span>
                    <span>Order yours before 2:30pm for same day dispatch</span>
                  </p>
                </div>

                {/* Guarantee Section */}
                <div className="py-4 px-8  bg-gray-100 text-base text-gray-600 rounded">
                  Guaranteed safe & secure checkout
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        {/* Tabs */}
        <div className="flex gap-4 border-b my-12 justify-center">
          <button
            className={`px-4 py-2 text-xl font-medium ${activeTab === "description"
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
              }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>
          <button
            className={`px-4 py-2 text-xl font-medium ${activeTab === "reviews"
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
              }`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews (0)
          </button>
        </div>

        {/* Content */}
        {activeTab === "description" && (
          <div className="text-sm font-normal leading-6 mb-4 text-[#55585b] p-8">
            <p className="leading-6 mb-4">
             {product.description}
            </p>
            <ul className="mt-2 list-disc list-inside">
              <li className="leading-6 mb-4"> {product.brand}</li>
              <li className="leading-6 mb-4"> {product.category}</li>
            
            </ul>
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="text-sm text-gray-500">
            <p>No reviews yet. Be the first to write a review!</p>
          </div>
        )}
      </div>
      <div className="my-8">
        <h3 className="text-4xl font-bold flex items-center justify-center py-6">
          Related Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:px-10">
          {products.slice(5, 9).map((product) => (
            <div
              key={product.id}
              className="group grid grid-cols-1 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
            >
              <div className="relative overflow-hidden">
                <img
                  className="p-8 rounded-lg w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                  src={product.image}
                  alt={product.name}
                />
                {/* This div will become visible when hovered */}
                <div className="absolute inset-0  bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="absolute left-5 top-[57px] opacity-0 invisible group-hover:opacity-100 group-hover:visible  transition-opacity duration-300">
                  <div className="flex flex-col">
                    {/* Action buttons */}
                    <button
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
                                  {product.name}
                                </li>
                                <li className="py-2">
                                   {product.brand}
                                </li>
                                <li className="py-2">
                              {product.description}
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
                                  <div className="flex items-center space-x-2 mb-4" onClick={() => addToCart(product)}>
                                    <button className="flex-1 px-16 py-2 border rounded bg-white hover:bg-gray-100"

                                    >
                                      Add To Cart
                                    </button>
                                  </div>
                                </div>

                                {/* Buy Now */}
                                <div className="mb-4">
                                  <button className="w-full px-4 py-2 text-white bg-purple-600 rounded hover:bg-purple-700">
                                    Buy Now
                                  </button>
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
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-gray-900">
                    ₹{product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProductDetails;
