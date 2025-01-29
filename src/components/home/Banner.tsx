import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import sl3 from "../../assest/sl-3.png";
import sl4 from "../../assest/sl-4.png";
import sl5 from "../../assest/sl-5.png";
import { MoveRight } from "lucide-react";

const Banner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#5252a2] to-[#5252a2]">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 3000, // Adjusted autoplay delay for better pace
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper w-full bg-gradient-to-r from-[#5252a2] to-[#5252a2]"
      >
        
        <SwiperSlide>
          <div className="  w-full h-full ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 w-full h-full">
              {/* Left Section */}
              <div className="flex flex-col justify-center space-y-4  px-8 md:px-12 lg:px-20 text-white">
              <span className="text-sm text-primary font-medium">Save Big on Top-Selling Gadgets</span>
              <h3 className="text-4xl lg:text-5xl font-bold  mb-4">Unbeatable Tech Deals</h3>
                <p className="text-base lg:text-lg leading-relaxed">
                  Huge discounts on smartphones, laptops, and more. Limited-time
                  offers—shop now!
                </p>
                <div className="w-fit rounded-lg bg-white text-black">
                  <a
                    href="/products"
                    className=" flex items-center justify-center gap-2 py-3 px-4  text-base font-medium hover:bg-primary-dark transition"
                  >
                    <div>Shop Now</div>
                     <MoveRight size={20} />
                  </a>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex justify-center items-center">
                <img
                  src={sl3}
                  alt="slider image"
                  className="object-cover w-full max-w-md h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-full h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 w-full h-full">
              {/* Left Section */}
              <div className="flex flex-col justify-center space-y-4  px-8 md:px-12 lg:px-20 text-white">
                <span className="text-sm text-primary font-medium">Fresh Gadgets, Latest Innovations</span>
                <h3 className="text-4xl lg:text-5xl font-bold  mb-4">New Arrivals: Cutting-Edge Tech</h3>
                <p className=" text-xl lg:text-2xl leading-relaxed">
                  Explore the latest in tech— from smartwatches to home automation. Shop new arrivals now!
                </p>
                <div className="w-fit rounded-lg bg-white text-black">
                  <a
                    href="/products"
                    className=" flex items-center justify-center gap-2 py-3 px-4  text-base font-medium hover:bg-primary-dark transition"
                  >
                    <div>Shop Now</div>
                     <MoveRight size={20} />
                  </a>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex justify-center items-center">
                <img
                  src={sl4}
                  alt="slider image"
                  className="object-cover w-full max-w-md h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6  mb-6 w-full h-full">
              {/* Left Section */}
              <div className="flex flex-col justify-center space-y-4 px-8 md:px-12 lg:px-20 text-white">
                <span className="text-sm text-primary font-medium">Trusted by Thousands of Happy Customers</span>
                <h3 className="text-4xl lg:text-5xl font-bold mb-4">Shop Best-Selling Electronics</h3>
                <p className=" text-base lg:text-lg leading-relaxed">
                  Shop our most popular electronics and see why customers love them!
                </p>
                <div className="w-fit rounded-lg bg-white text-black">
                  <a
                    href="/products"
                    className=" flex items-center justify-center gap-2 py-3 px-4  text-base font-medium hover:bg-primary-dark transition"
                  >
                    <div>Shop Now</div>
                     <MoveRight size={20} />
                  </a>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex justify-center items-center">
                <img
                  src={sl5}
                  alt="slider image"
                  className="object-cover w-full max-w-md h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
