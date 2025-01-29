import React, { useState } from "react";
import { Lock, User, Phone } from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://sevenunique-backend.onrender.com/api/v1/user/login",
        { name, password }
      );

      const data = response.data;

      if (data && data.success) {
        // localStorage.setItem("userToken", data.token);
        localStorage.setItem("userData", JSON.stringify(data.user || {}));
        Swal.fire({
          title: "Successful Login",
          icon: "success",
          draggable: true,
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Invalid credentials or token not found!",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Login Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://sevenunique-backend.onrender.com/api/v1/user/register",
        { name, gender, phone, password }
      );

      const data = response.data;
      console.log("Registration Successful:", data);
      Swal.fire({
        title: "Successful Registration",
        icon: "success",
        draggable: true,
      });
    } catch (error) {
      console.error("Registration Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Invalid credentials!`,
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="flex gap-4">
          <div className="pt-4">
            {isLogin?  <Lock className=" pl-3 h-10 w-8 text-purple-400 pointer-events-none" /> : <User className=" pl-3 h-10 w-10 text-purple-400 pointer-events-none" />}
           
          </div>
          <div>
            <h2 className=" text-3xl font-bold text-gray-900">
              {isLogin ? "Sign in to your account" : "Create new account"}
            </h2>
            <p className="text-gray-600 text-base mt-2">
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account.
            </p>
          </div>
        </div>
        <form
          className="mt-8 space-y-6"
          onSubmit={isLogin ? handleLogin : handleRegister}
        >
          {!isLogin && (
            <>
              <div>
                <label htmlFor="email" className="">
                  Phone No
                </label>
                <div className="relative mt-1">
                  <Phone className="absolute inset-y-0 left-0 top-3 pl-3 h-8 w-8   pointer-events-none" />
                  <input
                    id="phone"
                    name="phone"
                    type="number"
                    required
                    className="appearance-none rounded-lg block w-full pl-10 px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Phone No."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="gender" className="">
                  Gender
                </label>
                <div className="relative mt-1">
                  <User className="absolute inset-y-0 left-0 top-3 pl-3 h-8 w-8   pointer-events-none" />
                  <input
                    id="gender"
                    name="gender"
                    type="text"
                    required
                    className="appearance-none rounded-lg block w-full pl-10 px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}
          <div>
            <label htmlFor="name" className="">
              Full Name
            </label>
            <div className="relative mt-1">
              <User className="absolute inset-y-0 left-0 top-3 pl-3 h-8 w-8   pointer-events-none" />
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-lg block w-full pl-10 px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="">
              Password
            </label>
            <div className="relative mt-1">
              <Lock className="absolute inset-y-0 left-0 top-3 pl-3 h-8 w-8  pointer-events-none" />
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg block w-full pl-10 px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            {isLogin ? (
              <div className="flex justify-between">
                <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-base font-medium text-gray-900 dark:text-gray-600"
                  >
                    Remember me
                  </label>
                </div>
                <div>Forgot Password?</div>
              </div>
            ) : (
              <div className="flex items-center mb-4">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="default-checkbox"
                    className="ms-2 text-base font-medium text-gray-900 dark:text-gray-600"
                  >
                    I agree to the Terms and Privacy Policy
                  </label>
                </div>
            )}
          </div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <div className="text-base text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="font-medium "
          >
            {isLogin
              ? <div>Don't have an account? <span className="text-indigo-600 hover:text-indigo-500">Sign up</span></div>
              : <div>Already have an account? <span className="text-indigo-600 hover:text-indigo-500">Sign in</span></div>}
          </button>
        </div>
      </div>
    </div>
  );
}
