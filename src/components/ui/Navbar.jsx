import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white">
      <div className="flex items-center">
        <div className="bg-blue-500 text-white rounded-full p-2 mr-2">
          <span className="text-xl font-bold">F</span>
        </div>
        <span className="text-xl font-bold">FurniFlex</span>
      </div>
      <div className="hidden md:flex space-x-4 text-black hover:text-gray-900 text-xl font-medium">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Categories</a>
        <a href="#">Custom</a>
        <a href="#">Blog</a>
      </div>
      <div className="flex items-center space-x-4">
        <ShoppingCart className="text-gray-600" />
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default Navbar;
