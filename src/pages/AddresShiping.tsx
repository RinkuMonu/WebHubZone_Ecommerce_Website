import React, { useEffect, useState } from "react";
import { State, City } from "country-state-city";
import QRCode from "react-qr-code";

import { ChevronLeft, Wallet, Check } from "lucide-react";
import logo from "../assest/4.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
interface Address {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  isDefault?: boolean;
}

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface CouponCode {
  code: string;
  discount: string;
  description: string;
}

const addresses: Address[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    phone: "1234567890",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    isDefault: true,
  },
];

// const orderItems: OrderItem[] = [
//   {
//     id: "1",
//     name: "Lenovo Tab M11",
//     price: 14999,
//     quantity: 1,
//     image:
//       "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=300&q=80",
//   },
// ];

const shippingMethods: ShippingMethod[] = [
  { id: "1", name: "Free Delivery", description: "Free shipping", price: 0 },
  { id: "2", name: "Local Pickup", description: "Free shipping", price: 0 },
  { id: "3", name: "Flat Rate", description: "Fixed rate shipping", price: 20 },
];

const coupons: CouponCode[] = [
  {
    code: "SAVE80",
    discount: "80%",
    description: "Discount 80% for all orders",
  },
  {
    code: "FLAT500",
    discount: "₹500",
    description: "Flat ₹500 off on all orders",
  },
];

function AddressShiping({ cartItems }) {
  const [isNewAddress, setIsNewAddress] = useState(false); // State for new address form visibility

  const handleAddressChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setIsNewAddress(value === "new");
    setSelectedAddress(value);
  };

  const [selectedAddress, setSelectedAddress] = useState<string>("");
  const [selectedShipping, setSelectedShipping] = useState<string>("1");
  const [selectedPayment, setSelectedPayment] = useState<string>("phonepe");
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [upiIntent, setUpiIntent] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const [pinCode, setPinCode] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  // const [selectedState, setSelectedState] = useState(null);
  // const [selectedCity, setSelectedCity] = useState(null);

  // const states = State.getStatesOfCountry("IN"); // Replace "US" with your country code
  // const cities = selectedState
  //   ? City.getCitiesOfState("IN", selectedState.isoCode)
  //   : [];

  const [userdata, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    address: "",
  });

  const shipping =
    shippingMethods.find((m) => m.id === selectedShipping)?.price || 0;
  const total = subtotal + shipping;

  const data = {
    name: userdata.name,
    amount: total,
    number: userdata.phone,
    MUID: "MUID" + Date.now(),
    transactionId: "T" + Date.now(),
  };
  const generateReferenceNumber = () => {
    const timestamp = Date.now(); // Get current timestamp
    const randomNum = Math.floor(Math.random() * 10000); // Generate a random number between 0 and 9999
    return `${timestamp}-${randomNum}`; // Combine timestamp and random number
  };

  const handlePayment = async () => {
    setIsLoading(true);
    const reference = generateReferenceNumber();
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI4IiwianRpIjoiYzNhNWRmMzEwODdkYTY4YzUxN2IwZTRjMGU0NGIyNmFmOWM4ODJlOWJiZWYxZDM3NmY5ZjRiOTcxM2VhZWFmYjZkOTgyMjYxMDYwOGI3ODYiLCJpYXQiOjE3NDQ3MTI2OTguMjIxMzYzLCJuYmYiOjE3NDQ3MTI2OTguMjIxMzY2LCJleHAiOjE3NzYyNDg2OTguMjE4NzY3LCJzdWIiOiIyNDkiLCJzY29wZXMiOltdfQ.VWB2ejh3M4HXA3hAO37qbOV1Ylx5wKZ_NK1GQK7PrgY0S6xAnQwE_MwcNn-ln_aPFt5cz_ZzeTmAKkLmQh9oOJbHXRmA8MFG_WcWm6HPZt_F_JqyfKdtmW9rgv27PuNtozLIpzUUTed8RMXh6ci2wjqRFVng-jVrFkb-IHJB2Ivm3OjO8wH4CHXF8yvtQVKnCCg01r3IyLdcB1KtwK6Q_Rta8iNTimKTsGxJ_FnnOjCuYPETuP1dJLVXB9F_EmxZYK59Z_Cc7NWsDn_fMmRB4sJG3TtG9eSlwl_wJ8pIy4ou8uyiedRqSHMPgHva4Pk6OY8g4lGr4gxb3ry4S5ax5aRxTtmBt64xn0Wgg5tYKxHON8A7_t0F0G-aQeWO1CxcYbF2lfU507e9X9NE8TeGzoexuVI2NGiOptJG9oRlTDNEL981hvucdkSfi6DQVG7vrD7DbFs5XvikbxpPz4ooE7JSPzNnLBPPkj7Yl17DIgWCIgSzrVgEsuW5RcuTURLVrtPRv1qX7lgiXtqxf_TrwAaoOaYnTTinZYoQmP-uyPy8krH0Sr42CtjIRYKYBNWJV0jXzgH36RXVoiOxq8w7rmdGqkbCs4CNDoX6FhJa5dSwjz0tn9t0Dt2NMogyHf4zxQDHdptkSN90sXhoAFUdYUlVRfZ7Z8UUSTXOW2j6Fsw";

    try {
      const response = await axios.post(
        "https://api.worldpayme.com/api/v1.1/createUpiIntent",
        {
          amount: total.toString(),
          reference: reference,
          name: userdata.name,
          mobile: userdata.phone,
          email: userdata.email,
          userId: "67b6f05e6a935705d8fc54ee",
          myip: "666666",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const rawLink = response.data?.data?.upiIntent;
      const cleanedLink = rawLink.replace(/\\/g, "");
      setUpiIntent(cleanedLink); // Set it in state to render QR
    } catch (error) {
      console.log("Payment Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleonChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userdata, [name]: value });
  };
  useEffect(() => {
    if (pinCode.length === 6) {
      fetchLocation(pinCode);
    }
  }, [pinCode]);

  const fetchLocation = async (pin) => {
    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${pin}`
      );
      console.log("API Response:", response.data);

      if (response.data[0].Status === "Success") {
        const location = response.data[0].PostOffice[0]; // Pehla result lo
        setState(location.State);
        setCity(location.District);
      } else {
        setState("");
        setCity("");
        console.warn("Invalid PIN code");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  return (
    <div className=" min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-12 md:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Order Details */}
          <div className="md:w-7/12">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <img src={logo} alt="logo" className="w-16 mx-4" />

              <hr className="my-6" />

              {/* Shipping Information */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">
                  Shipping Information
                </h3>
                <div className="space-y-4">
                  {/* Address Selection Field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Available Address
                    </label>
                    <select
                      className="w-full mb-5 rounded-md shadow-sm py-3 px-4 border border-green-600 focus:outline-green-600"
                      value={selectedAddress}
                      onChange={handleAddressChange}
                    >
                      <option value="">Select Address</option>
                      <option value="new">Add new address...</option>
                      {/* {addresses.map((addr) => (
                        <option key={addr.id} value={addr.id}>
                          {addr.address}, {addr.city}, {addr.state}
                        </option>
                      ))} */}
                    </select>
                  </div>

                  {/* Conditional Form Fields */}
                  {isNewAddress ? (
                    <div className="space-y-4">
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="block px-2.5 py-3 w-full text-sm rounded-lg border border-green-600 focus:outline-green-600"
                          value={userdata.name}
                          onChange={handleonChange}
                          placeholder="Enter your name"
                          required
                          minLength={5}
                          maxLength={50}
                        />
                        <Check className="text-green-600 absolute top-2 right-2" />
                        <label
                          htmlFor="name"
                          className="absolute px-2 text-base text-gray-700 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white start-3"
                        >
                          Full Name
                        </label>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-[57.5%_40%] gap-4">
                        <div className="relative">
                          <input
                            type="text"
                            id="email"
                            className="block px-2.5 py-3 w-full text-sm rounded-lg border border-green-600 focus:outline-green-600"
                            placeholder=" "
                            name="email"
                            value={userdata.email}
                            onChange={handleonChange}
                            required
                            minLength={5}
                            maxLength={50}
                          />
                          <Check className="text-green-600 absolute top-2 right-2" />
                          <label
                            htmlFor="email"
                            className="absolute px-2 text-base text-gray-700 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white start-3"
                          >
                            Email
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type="number"
                            id="phone"
                            className="block px-2.5 py-3 w-full text-sm rounded-lg border border-green-600 focus:outline-green-600"
                            placeholder=" "
                            name="phone"
                            value={userdata.phone}
                            onChange={handleonChange}
                            required
                            minLength={10}
                            maxLength={11}
                          />
                          <Check className="text-green-600 absolute top-2 right-2" />
                          <label
                            htmlFor="phone"
                            className="absolute px-2 text-base text-gray-700 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white start-3"
                          >
                            Phone
                          </label>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-[57.5%_40%] gap-4">
                        <div className="relative">
                          <input
                            type="text"
                            id="Pin"
                            className="block px-2.5 py-3 w-full text-sm rounded-lg border border-green-600 focus:outline-green-600"
                            placeholder=" "
                            name="Pin"
                            value={pinCode}
                            onChange={(e) => {
                              const val = e.target.value
                                .replace(/\D/g, "")
                                .slice(0, 6); // Sirf digits allow aur 6 tak limit
                              setPinCode(val);
                            }}
                            required
                          />
                          <Check className="text-green-600 absolute top-2 right-2" />
                          <label
                            htmlFor="Pin"
                            className="absolute px-2 text-base text-gray-700 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white start-3"
                          >
                            Pin Code
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type="text"
                            id="State"
                            className="block px-2.5 py-3 w-full text-sm rounded-lg border border-green-600 focus:outline-green-600"
                            placeholder=" "
                            name="State"
                            value={state}
                            readOnly
                            minLength={5}
                            maxLength={50}
                          />
                          <Check className="text-green-600 absolute top-2 right-2" />
                          <label
                            htmlFor="State"
                            className="absolute px-2 text-base text-gray-700 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white start-3"
                          >
                            State
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type="City"
                            id="City"
                            className="block px-2.5 py-3 w-full text-sm rounded-lg border border-green-600 focus:outline-green-600"
                            placeholder=" "
                            name="City"
                            value={city}
                            readOnly
                            minLength={10}
                            maxLength={11}
                          />
                          <Check className="text-green-600 absolute top-2 right-2" />
                          <label
                            htmlFor="City"
                            className="absolute px-2 text-base text-gray-700 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white start-3"
                          >
                            City
                          </label>
                        </div>
                      </div>

                      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                          <label
                            htmlFor="state"
                            className="absolute px-2 text-base text-gray-700 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white start-3"
                          >
                            State
                          </label>
                          <select
                            className="block px-2.5 py-3 w-full text-sm rounded-lg border border-green-600 focus:outline-green-600"
                            onChange={(e) =>
                              setSelectedState(
                                states.find(
                                  (state) => state.isoCode === e.target.value
                                )
                              )
                            }
                          >
                            <option value="">Select State</option>
                            {states.map((state) => (
                              <option key={state.isoCode} value={state.isoCode}>
                                {state.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="relative">
                          <label
                            htmlFor="city"
                            className="absolute px-2 text-base text-gray-700 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white start-3"
                          >
                            City
                          </label>

                          <select
                            className="block px-2.5 py-3 w-full text-sm rounded-lg border border-green-600 focus:outline-green-600"
                            onChange={(e) =>
                              setSelectedCity(
                                cities.find(
                                  (city) => city.name === e.target.value
                                )
                              )
                            }
                          >
                            <option value="">Select City</option>
                            {cities.map((city) => (
                              <option key={city.name} value={city.name}>
                                {city.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div> */}
                      <div className="relative">
                        <input
                          type="text"
                          id="address"
                          className="block px-2.5 py-3 w-full text-sm rounded-lg border border-green-600 focus:outline-green-600"
                          placeholder=" "
                        />
                        <Check className="text-green-600 absolute top-2 right-2" />
                        <label
                          htmlFor="address"
                          className="absolute px-2 text-base text-gray-700 duration-300 transform -translate-y-4 scale-75 top-1 z-10 origin-[0] bg-white start-3"
                        >
                          Address
                        </label>
                      </div>
                    </div>
                  ) : (
                    <div>
                      {addresses
                        .filter((addr) => addr.id === selectedAddress)
                        .map((address) => (
                          <div
                            key={address.id}
                            className="border border-dashed border-gray-300 rounded-lg p-4 sm:p-6 flex justify-between items-start"
                          >
                            {/* Left Section */}
                            <div>
                              <h2 className="font-bold text-lg">
                                {address.name}
                              </h2>
                              <p className="text-gray-700 mt-1">
                                {address.address}
                              </p>
                              <p className="text-gray-700 mt-2">
                                <span className="font-semibold">Phone:</span>{" "}
                                {address.phone}
                              </p>
                              <p className="text-gray-700 mt-2">
                                <span className="font-semibold">Email:</span>{" "}
                                {address.email}
                              </p>
                            </div>

                            {/* Right Section */}
                            <div className="text-sm text-[#5252a2] font-medium">
                              Default
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            

              {/* Shipping Method */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Shipping Method</h3>
                <div className="space-y-3">
                  {shippingMethods.map((method) => (
                    <label
                      key={method.id}
                      className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                    >
                      <input
                        type="radio"
                        name="shipping"
                        value={method.id}
                        checked={selectedShipping === method.id}
                        onChange={(e) => setSelectedShipping(e.target.value)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <div className="ml-3">
                        <span className="block font-medium">
                          {method.name}
                          {method.price > 0 && ` - ₹${method.price}`}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {method.description}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="phonepe"
                      checked={selectedPayment === "phonepe"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="ml-3">
                      <span className="block font-medium">PhonePe</span>
                      <span className="text-gray-500 text-sm">
                        Pay online via PhonePe
                      </span>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={selectedPayment === "cod"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <div className="ml-3">
                      <span className="block font-medium">
                        Cash on Delivery
                      </span>
                      <span className="text-gray-500 text-sm">
                        Pay when you receive the order
                      </span>
                    </div>
                  </label>
                </div>
              </div>
              {/* Order Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Order Notes (Optional)
                </label>
                <textarea
                  className="w-full border-gray-300 rounded-md shadow-sm  block px-2.5 py-3  text-sm  border  focus:outline-[#5252a2]"
                  rows={3}
                  placeholder="Notes about your order, e.g. special notes for delivery"
                />
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3 flex justify-between">
                <Link
                  to="/cart"
                  className="flex items-center justify-center gap-2 text-[#5252a2] hover:text-blue-700"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back to Cart
                </Link>
                {total === 0 ? (
                  "Your Cart Is Empty  Please Add Something"
                ) : (
                  <button
                    className="bg-[#434389] text-white py-3 px-4 rounded-lg hover:bg-[#5252a2] font-medium flex items-center justify-center"
                    onClick={handlePayment}
                    disabled={isloading}
                  >
                    {isloading ? (
                      <DotLottieReact
                        src="https://lottie.host/faaf7fb5-6078-4f3e-9f15-05b0964cdb4f/XCcsBA5RNq.lottie"
                        loop
                        autoplay
                        style={{ width: 30, height: 30 }}
                      />
                    ) : (
                      "Place Order"
                    )}
                  </button>
                )}
              </div>
            </div>
            {upiIntent && (
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                  <p>Scan this QR Code to pay:</p>
                  <QRCode value={upiIntent} size={200} />
                  <p style={{ marginTop: "10px", wordBreak: "break-all" }}>
                    Or click to open:{" "}
                    <a
                      href={upiIntent}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {upiIntent}
                    </a>
                  </p>
                </div>
              )}
          </div>
          
          {/* Right Column - Order Summary */}
          <div className="md:w-5/12">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              {/* Order Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-gray-500">Quantity: {item.quantity}</p>
                      <p className="font-medium">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Price Summary */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between font-medium text-lg py-2 border-b">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Coupon Section */}
              <div className="my-6">
                <div className="flex items-center gap-2 mb-3">
                  <Wallet className="w-5 h-5 text-gray-400" />
                  <span className="font-medium">Available Coupons</span>
                </div>
                <div className="space-y-3">
                  {coupons.map((coupon) => (
                    <div key={coupon.code} className="border rounded-lg p-3">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <span className="font-medium text-[#5252a2]">
                            {coupon.discount} OFF
                          </span>
                          <p className="text-sm text-gray-500">
                            {coupon.description}
                          </p>
                        </div>
                        <button className="text-[#5252a2] text-sm font-medium">
                          Apply
                        </button>
                      </div>
                      <div className="flex items-center gap-2 bg-gray-50 p-2 rounded">
                        <code className="text-sm">{coupon.code}</code>
                        <button className="text-gray-400 text-sm">Copy</button>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setShowCouponInput(!showCouponInput)}
                  className="text-[#5252a2] text-sm font-medium mt-3"
                >
                  {showCouponInput
                    ? "Hide coupon input"
                    : "Have a coupon code?"}
                </button>
                {showCouponInput && (
                  <div className="mt-3 flex gap-2">
                    <input
                      type="text"
                      className="flex-1 border-gray-300 rounded-md shadow-sm px-2 border  focus:outline-[#5252a2]"
                      placeholder="Enter coupon code"
                    />
                    <button className="px-4 py-2 bg-[#5252a2] text-white rounded-md hover:bg-blue-700">
                      Apply
                    </button>
                  </div>
                )}
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
  
    </div>
  );
}

export default AddressShiping;
