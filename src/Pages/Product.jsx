import { useParams } from "@solidjs/router";
import { createResource, Show, useContext } from "solid-js";
import { useCartContext } from "../Context/CartContext";

const fetchProduct = async (id) => {
  const response = await fetch(
    "https://zahoussam.github.io/solid-js-data/first_data.json"
  )
    .then((response) => response.json())
    .then((data) => data);
  return response.products.filter((pr) => pr.id == id)[0];
};

const Product = () => {
  const { id } = useParams();

  const [product] = createResource(id, fetchProduct);

  const { items, setItems } = useCartContext();

  const addProduct = () => {
    const exits = items.find((p) => p.id === product().id);

    if (exits) {
      setItems(
        (p) => p.id === product().id,
        "quantity",
        (q) => q + 1
      );
    } else {
      setItems([...items, { ...product(), quantity: 1 }]);
    }
  };

  return (
    <Show when={product()} fullback={<p>loading ...</p>}>
      <div class="d-flex justify-content-between gap-3">
        <img src={product().img} alt={`cart-${product().id}`} />
        <div class="card-body">
          <h5 class="card-title mb-3">{product().title}</h5>
          <p class="card-text">{product().description}</p>
          <span className="card-txt">${product().price}</span>
          <button
            type="button"
            class="btn btn-primary text-capitalize d-block mt-2"
            onclick={addProduct}
          >
            add cart
          </button>
        </div>
      </div>
    </Show>
  );
};

export default Product;
