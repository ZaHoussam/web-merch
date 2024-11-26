import { For } from "solid-js";
import { useCartContext } from "../Context/CartContext";

const Cart = () => {
  const { items } = useCartContext();

  const total = () => {
    return items.reduce((acc, current) => {
      return acc + current.quantity * current.price;
    }, 0);
  };

  return (
    <div
      class="card text-white bg-primary mt-3 mx-auto"
      style="max-width: 18rem;"
    >
      <div class="card-body">
        <For each={items}>
          {(item) => (
            <p class="card-text">
              {item.title} - ${item.price} x {item.quantity}
            </p>
          )}
        </For>
      </div>
      <div className="card-footer">The Total Price Is ${total()}</div>
    </div>
  );
};

export default Cart;
