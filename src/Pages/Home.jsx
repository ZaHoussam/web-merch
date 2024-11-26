import { createResource, For, Show } from "solid-js";
import Card from "../Components/Card";

const fetchData = async () => {
  const response = await fetch(
    "https://zahoussam.github.io/solid-js-data/first_data.json"
  )
    .then((response) => response.json())
    .then((data) => data);
  return response.products;
};

const Home = () => {
  const [products] = createResource(fetchData);

  return (
    <Show when={products()} fullback={<p>loading ...</p>}>
      <div class="row row-cols-1 row-cols-md-4 g-4">
        <For each={products()}>
          {(pr) => (
            <div class="col">
              <Card
                title={pr.title}
                desc={pr.description}
                image={pr.img}
                id={pr.id}
              />
            </div>
          )}
        </For>
      </div>
    </Show>
  );
};

export default Home;
