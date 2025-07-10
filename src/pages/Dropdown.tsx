import { AlignLeft } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface DropdownProps {
  categories: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ categories }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block">
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        style={{ backgroundColor:"#214b87" ,
            height:"49px",
            width:"275px",
            gap:"25px"
        }}
        className="text-white hover:bg-blue-800  focus:outline-none  font-medium  text-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <AlignLeft/>
        All Category  
        <svg
          className="w-2.5 h-2.5 ms-10"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 2"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isDropdownOpen && (
        <div
          id="dropdown"
          className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 mt-2 dark:bg-gray-700"
        >
            
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            {categories.map((item) => (
              <li key={item}>
                <Link
                  to={`/category/${item.toLowerCase()}`}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
