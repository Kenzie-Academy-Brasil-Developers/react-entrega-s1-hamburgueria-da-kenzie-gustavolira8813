import "./style.css";
function Cart({ props }) {
  return (
    <ul className="listaCart">
      {props.map((e, i) => (
        <li key={i}>
          <h3>{e.name}</h3>
          <p>{e.category}</p>
          <p>{e.price}</p>
        </li>
      ))}
    </ul>
  );
}
export default Cart;
