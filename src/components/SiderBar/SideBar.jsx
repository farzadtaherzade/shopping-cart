import { FaXmark } from "react-icons/fa6";
import { CartContainer } from "./CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import { clearCart } from "../../features/shop/shopSlice";

export function SideBar() {
  const { total } = useSelector((state) => state.shop);
  const dispath = useDispatch();
  const product = useContext(ProductContext);
  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-black bg-opacity-30 z-[99] transition-all duration-300 ${
        product.showCart ? "visible" : ""
      }`}
    >
      <div
        className={`fixed top-0 right-0 bg-white shadow-md h-screen w-[27rem] z-50 px-6 overflow-scroll transition-transform duration-200 ease-in ${
          product.showCart
            ? "visible translate-x-0"
            : "visible translate-x-full"
        } `}
      >
        <div className="flex justify-between items-center mt-4">
          <p className="text-3xl">Cart</p>
          <div
            className="w-8 h-8 text-white flex justify-center items-center rounded-full bg-blue-700 hover:bg-blue-800"
            onClick={() => product.setShowCart(false)}
          >
            <FaXmark />
          </div>
        </div>
        <div className="mt-10">
          <CartContainer />
        </div>
        <button
          className="w-full text-white flex justify-center items-center rounded-sm mt-auto bg-blue-700 hover:bg-blue-800 py-2"
          onClick={() => dispath(clearCart())}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}
