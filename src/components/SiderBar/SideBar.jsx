import { FaXmark } from "react-icons/fa6";
import { CartContainer } from "./CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import { clearCart, totalPrice } from "../../features/shop/shopSlice";
import formatCurrency from "../../utils/formatCurrency";

export function SideBar() {
  const dispath = useDispatch();
  const { total } = useSelector((state) => state.shop);
  const product = useContext(ProductContext);
  dispath(totalPrice());
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
          className="w-full text-white flex justify-center items-center rounded-sm mt-auto bg-blue-700 hover:bg-blue-800 py-2 mb-4"
          onClick={() => dispath(clearCart())}
        >
          Clear Cart
        </button>
        <span className="text-black pt-10 text-xl font-bold">
          Total: {formatCurrency(total)}
        </span>
      </div>
    </div>
  );
}
