import { useState } from "react";
import "./style.css";
function Product({ products, handleClick }) {
  return (
    <li className="items">
      <div className={"img" + products.id}></div>
      <h3>{products.name}</h3>
      <p>{products.category}</p>
      <p>{products.price}</p>
      <button onClick={() => handleClick(products.id)}>
        Adicionar Produto
      </button>
    </li>
  );
}
export default Product;
