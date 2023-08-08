import { FaBagShopping } from "react-icons/fa6";
import { ProductContext } from "../context/productContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const product = useContext(ProductContext);

  return (
    <header className="w-full bg-white shadow-xl h-16 flex items-center sticky top-0 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex items-center gap-5">
          <Link
            to="/"
            className="bg-blue-400 text-white px-5 py-2 rounded-xl hover:bg-blue-500 transition-all"
          >
            Home
          </Link>
          <Link
            to="/store"
            className="bg-blue-400 text-white px-5 py-2 rounded-xl hover:bg-blue-500 transition-all"
          >
            Store
          </Link>
          <Link
            to="/about"
            className="bg-blue-400 text-white px-5 py-2 rounded-xl hover:bg-blue-500 transition-all"
          >
            About
          </Link>
        </nav>
        <div
          className="w-10 h-10 text-white flex justify-center items-center rounded-full bg-blue-700 hover:bg-blue-800"
          onClick={() => product.setShowCart(true)}
        >
          <FaBagShopping />
        </div>
      </div>
    </header>
  );
}
