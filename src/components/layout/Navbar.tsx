import React, { useEffect, useState } from "react";
import { Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import img1 from "../../assest/4.png";
import Dropdown from "../../pages/Dropdown";

interface NavbarProps {
  onCartClick: () => void;
  cartItemCount: number;
}

interface User {
  name: string;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick, cartItemCount }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [menuOpen, setMenuOpen] = useState(false); // For responsive menu toggle
  const [searchOpen, setSearchOpen] = useState(false); // For mobile search toggle

  useEffect(() => {
    // Load user data from localStorage
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem("userData");
        setUser(storedUser ? JSON.parse(storedUser) : null);
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error);
        setUser(null);
      }
    };

    loadUser(); // Initial load

    // Handle scroll to make navbar sticky
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 100); // Adjust 100 based on your navbar height
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("storage", loadUser); // Listen for storage changes

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", loadUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser(null);
    window.dispatchEvent(new Event("storage"));
  };

  const categories = [
    "Laptops",
    "Phones",
    "Speakers",
    "Electronics",
    "Accessories",
  ];
  console.log("userdataaaaaaaaa", user);

  return (
    <div>
      <div className="sticky top-0 z-10 bg-white shadow-lg px-8">
        {/* Navbar Top */}
        <div className="border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-24">
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <img src={img1} alt="Logo" className="w-12 sm:w-16" />
              </Link>

              {/* Mobile Search Toggle */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="md:hidden focus:outline-none text-gray-600"
              >
                <Search className="w-6 h-6" />
              </button>

              {/* Desktop Search Bar */}
              <div className="hidden md:flex flex-1 max-w-lg mx-8">
                <form className="w-full">
                  <div className="relative">
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 ps-10 text-sm  rounded-lg"
                      placeholder="Search Category"
                      required
                      style={{ border: "2px solid rgb(82, 82, 162)" }}
                    />
                    <button
                      type="submit"
                      className="absolute top-0 right-0   text-white"
                      style={{
                        backgroundColor: "rgb(82, 82, 162)",
                        height: "100%",
                        width: "12%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Search />
                    </button>
                  </div>
                </form>
              </div>

              {/* Actions */}
              <div className="flex items-center">
                <div className="flex items-center justify-between p-4  border-gray-300 gap-1 sm:gap-4 md:gap-20">
                  <div className="relative group">
                    {/* User Info */}
                    <Link
                      to={user ? "/profile" : "/login"}
                      className="flex items-center space-x-1 hover:text-indigo-600"
                    >
                      <div className="w-8 h-8 flex items-center justify-center border-2 border-gray-400 rounded-full">
                        <User className="h-5 w-5" />
                      </div>
                      <span className="hidden sm:inline">
                        {user ? (
                          `Welcome, ${user.name}`
                        ) : (
                          <div>
                            <p className="text-sm text-gray-600">
                              Hello, Guest
                            </p>
                            <a href="/login" className="text-blue-500 text-sm">
                              Login / Register
                            </a>
                          </div>
                        )}
                      </span>
                    </Link>
                    {user && (
    <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg  p-2 z-10">
      <ul className="text-gray-700">
        <li className="py-1 px-3 hover:bg-gray-100 rounded-md cursor-pointer">
          Your Orders
        </li>
        <li className="py-1 px-3 hover:bg-gray-100 rounded-md cursor-pointer">
          Profile
        </li>
        <li className="py-1 px-3 hover:bg-gray-100 rounded-md cursor-pointer">
          <button
            onClick={handleLogout}
            className="hover:text-red-600 text-left w-full"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  )}
                  </div>
                  {/* Wishlist and Cart */}
                  <div className="flex items-center sm:gap-6">
                    {/* Wishlist */}
                    <div className="relative flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-800"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.435 4.318a5.5 5.5 0 00-7.77 0L12 5.983l-1.665-1.665a5.5 5.5 0 10-7.77 7.77l1.665 1.665L12 20.017l7.77-7.77 1.665-1.665a5.5 5.5 0 000-7.77z"
                        />
                      </svg>
                      <span className="absolute -top-2 -right-2 bg-[#5252a2] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {/* {wishlistCount} */}0
                      </span>
                    </div>

                    {/* Cart */}
                    <div
                      className="relative flex items-center"
                      onClick={onCartClick}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-800"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 5.25h16.5m-16.5 0L5.25 16.5h13.5l1.5-11.25M7.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                        />
                      </svg>
                      <span className="absolute -top-2 -right-2 bg-[#5252a2] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                        {cartItemCount}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hamburger Menu for Mobile */}
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="md:hidden focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="md:hidden bg-gray-50 px-4 py-2">
            <form className="w-full">
              <div className="relative">
                <input
                  type="search"
                  id="mobile-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search Category"
                  required
                  style={{ border: "2px solid rgb(82, 82, 162)" }}
                />
                <button
                  type="submit"
                  className="absolute  top-0 right-0   text-white "
                  style={{
                    backgroundColor: "rgb(82, 82, 162)",
                    height: "100%",
                    width: "17%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Search />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-gray-50 border-b">
            <nav className="flex flex-col space-y-2 p-4">
              <Dropdown categories={categories} />
              {categories.map((item) => (
                <Link
                  key={item}
                  to={`/category/${item.toLowerCase()}`}
                  className="block px-4 py-2 hover:text-indigo-600 hover:bg-gray-100 rounded-md"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:block bg-gray-50">
          <div className="container mx-auto px-4">
            <nav className="flex space-x-8 h-13 text-base items-center">
              <Dropdown categories={categories} />
              {categories.map((item) => (
                <Link
                  key={item}
                  to={`/category/${item.toLowerCase()}`}
                  className="hover:text-indigo-600 hover:border-b-2 hover:border-indigo-600 h-full flex items-center"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 container">
        {isSticky && (
          <nav className="bg-white border-gray-200 fixed top-0 shadow-lg z-30 px-8 w-full">
            {/* Navbar Top */}
            <div className="border-b">
              <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                  {/* Logo */}
                  <Link to="/" className="flex items-center">
                    <img src={img1} alt="Logo" className="w-6 sm:w-16" />
                  </Link>

                  {/* Desktop Navigation */}
                  <div className="hidden md:block bg-gray-50">
                    <div className="container mx-auto px-4">
                      <nav className="flex space-x-8 h-13 text-base items-center">
                        {categories.map((item) => (
                          <Link
                            key={item}
                            to={`/category/${item.toLowerCase()}`}
                            className="hover:text-indigo-600 hover:border-b-2 hover:border-indigo-600 h-full flex items-center"
                          >
                            {item}
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center">
                    <div className="flex items-center justify-between p-4  border-gray-300 gap-4 md:gap-20">
                      {/* Wishlist and Cart */}
                      <div className="flex items-center gap-6">
                        {/* Wishlist */}
                        <div className="relative flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-800"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21.435 4.318a5.5 5.5 0 00-7.77 0L12 5.983l-1.665-1.665a5.5 5.5 0 10-7.77 7.77l1.665 1.665L12 20.017l7.77-7.77 1.665-1.665a5.5 5.5 0 000-7.77z"
                            />
                          </svg>
                          <span className="absolute -top-2 -right-2 bg-[#5252a2] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {/* {wishlistCount} */}0
                          </span>
                        </div>

                        {/* Cart */}
                        <div
                          className="relative flex items-center"
                          onClick={onCartClick}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-800"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.75 5.25h16.5m-16.5 0L5.25 16.5h13.5l1.5-11.25M7.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                            />
                          </svg>
                          <span className="absolute -top-2 -right-2 bg-[#5252a2] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {cartItemCount}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <button
                      onClick={() => setMenuOpen(!menuOpen)}
                      className="md:hidden focus:outline-none"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
              <div className="md:hidden bg-gray-50 border-b">
                <nav className="flex flex-col space-y-2 p-4">
                  {categories.map((item) => (
                    <Link
                      key={item}
                      to={`/category/${item.toLowerCase()}`}
                      className="block px-4 py-2 hover:text-indigo-600 hover:bg-gray-100 rounded-md"
                    >
                      {item}
                    </Link>
                  ))}
                </nav>
              </div>
            )}
          </nav>
        )}
      </div>
    </div>
  );
};

export default Navbar;
