import { useDispatch } from "react-redux";
import formatCurrency from "../../utils/formatCurrency";
import { ProductContext } from "../../context/productContext";
import { useContext } from "react";
import { add2Cart, decrease, increase } from "../../features/shop/shopSlice";
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function Card({ name, price, imgUrl, amount, id }) {
  const product = useContext(ProductContext);
  const dispath = useDispatch();
  return (
    <div className="w-full max-w-sm bg-white rounded-lg drop-shadow-lg">
      <a href="#">
        <img
          className="p-8 rounded-t-lg w-full h-[14rem] object-cover"
          src={`${imgUrl}`}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-black">
            {name}
          </h5>
        </a>

        <div className="flex items-center justify-between">
          <span className="text-1xl font-semibold text-black">
            {formatCurrency(price)}
          </span>
          {amount == 0 ? (
            <button
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={() => {
                dispath(add2Cart({ name, price, imgUrl, amount, id }));
                dispath(increase({ id }));
                product.setShowCart(true);
              }}
            >
              Add to cart
            </button>
          ) : (
            <div className="flex gap-2 items-center">
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-2 py-2 text-center"
                onClick={() => dispath(decrease({ id }))}
              >
                <FaMinus />
              </button>
              <span>{amount}</span>
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-2 py-2 text-center"
                onClick={() => dispath(increase({ id }))}
              >
                <FaPlus />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
