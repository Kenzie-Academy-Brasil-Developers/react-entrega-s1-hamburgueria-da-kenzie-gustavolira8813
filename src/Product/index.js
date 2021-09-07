import "./style.css";
function Product({ products, handleClick }) {
  return (
    <li className="items">
      <img
        src="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2021/07/love.jpg"
        alt="items"
      />
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
