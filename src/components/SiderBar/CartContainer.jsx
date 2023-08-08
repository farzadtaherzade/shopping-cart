import { useSelector } from "react-redux";
import Card from "../store/Card";

export function CartContainer() {
  const { cartItems } = useSelector((state) => state.shop);
  console.log(cartItems);
  return (
    <div className="px-10 flex flex-col gap-5 z-[999]">
      {cartItems.length > 0 ? (
        cartItems.map((item) => <Card key={item.id} {...item} />)
      ) : (
        <div className="text-center text-3xl mt-2">Card Is Empty</div>
      )}
    </div>
  );
}
