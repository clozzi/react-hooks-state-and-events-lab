import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(true);

  function handleCart() {
    setInCart((inCart) => !inCart);
  }

  const cartStatus = inCart ? "Remove From Cart" : "Add to Cart"

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{cartStatus}</button>
    </li>
  );
}

export default Item;
