import React from "react";
import { Laptop, Smartphone, Speaker, Cpu, HeadphonesIcon } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Laptops",
    icon: Laptop,
    count: "450+ Products",
    color: "bg-blue-100",
    textColor: "text-blue-600",
  },
  {
    name: "Phones",
    icon: Smartphone,
    count: "320+ Products",
    color: "bg-green-100",
    textColor: "text-green-600",
  },
  {
    name: "Speakers",
    icon: Speaker,
    count: "180+ Products",
    color: "bg-purple-100",
    textColor: "text-purple-600",
  },
  {
    name: "Electronics",
    icon: Cpu,
    count: "520+ Products",
    color: "bg-red-100",
    textColor: "text-red-600",
  },
  {
    name: "Accessories",
    icon: HeadphonesIcon,
    count: "280+ Products",
    color: "bg-yellow-100",
    textColor: "text-yellow-600",
  },
];

export default function TopCategories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Top Categoriees</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
   

          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/category/${category.name.toLowerCase()}`}
              className="group"
            >
              <div
                className={`₹{category.color} rounded-xl p-6 transition-transform hover:-translate-y-1`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <category.icon
                    className={`h-12 w-12 ₹{category.textColor}`}
                  />
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="text-gray-600">{category.count}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
