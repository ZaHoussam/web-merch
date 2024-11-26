import { A, createMemoryHistory, MemoryRouter, Route } from "@solidjs/router"; // Import the correct navigation component
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import { useCartContext } from "./Context/CartContext";
import { Suspense } from "solid-js";

const App = () => {
  const history = createMemoryHistory();
  const { items } = useCartContext();

  const quantity = () => {
    return items.reduce((acc, current) => {
      return acc + current.quantity;
    }, 0);
  };

  return (
    <MemoryRouter
      history={history}
      root={(props) => (
        <>
          <header class="bg-light py-3">
            <div class="container d-flex justify-content-between align-items-center">
              <nav>
                <A href="/web-merch" class="btn btn-primary me-2">
                  Home
                </A>
                <A href="/web-merch/cart" class="btn btn-secondary">
                  Cart ({quantity()})
                </A>
              </nav>
            </div>
          </header>
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <Route path="/web-merch/" component={Home} />
      <Route path="/web-merch/cart" component={Cart} />
      <Route path="/web-merch/product/:id" component={Product} />
    </MemoryRouter>
  );
};

export default App;
