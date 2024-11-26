import { A } from "@solidjs/router";

const Card = (props) => {
  return (
    <div class="card">
      <img src={props.image} class="card-img-top" alt="product img" />
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
        <A
          href={`/web-merch/product/${props.id}`}
          class="btn btn-primary text-capitalize"
        >
          view product
        </A>
      </div>
    </div>
  );
};

export default Card;
