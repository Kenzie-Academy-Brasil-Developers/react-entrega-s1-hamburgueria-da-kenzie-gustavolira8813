import "./style.css";
import Product from "../Product";
function MenuContainer({ products, handleClick }) {
  return (
    <ul className="lista">
      {products.map((e) => (
        <Product products={e} handleClick={handleClick} />
      ))}
    </ul>
  );
}
export default MenuContainer;
