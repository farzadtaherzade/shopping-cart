import { useSelector } from "react-redux";
import Card from "../components/store/Card";

export function Store() {
  const { shopItems } = useSelector((state) => state.shop);
  return (
    <>
      <div className="grid grid-cols-1 max-sm:place-items-center sm:grid-cols-2 md:grid-cols-4 gap-3">
        {shopItems.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
