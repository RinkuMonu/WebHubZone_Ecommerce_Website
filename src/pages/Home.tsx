import React, { useState } from "react";
import Banner from "../components/home/Banner";
import TrendingProducts from "../components/home/TrendingProducts";
import TopCategories from "../components/home/TopCategories";
import Newsletter from "../components/home/Newsletter";
import axios from "axios";

interface HomeProps {
  addToCart: (product: Product) => void;
  onCartClick: () => void;
}

export default function Home({ addToCart, onCartClick }: HomeProps) {
  // const [loading2, setLoading2] = useState(false);

  // const data = {
  //   name: "Waleed",
  //   amount: 1,
  //   number: "7498608775",
  //   MUID: "MUID" + Date.now(),
  //   transactionId: "T" + Date.now(),
  // };

  // const handlePayment = (e) => {
  //   e.preventDefault();
  //   setLoading2(true);
  //   axios
  //     .post("https://sevenunique-backend.onrender.com/api/v1/payment/payment", { ...data })
  //     .then((res) => {
  //       setTimeout(() => {
  //         setLoading2(false);
  //       }, 1500);
  //     })
  //     .catch((error) => {
  //       setLoading2(false);
  //       console.error(error);
  //     });
  // };
  return (
    <>
      <Banner />
      <TrendingProducts addToCart={addToCart} /> {/* Pass addToCart here */}
      <TopCategories />
      <Newsletter />
    </>
  );
}
