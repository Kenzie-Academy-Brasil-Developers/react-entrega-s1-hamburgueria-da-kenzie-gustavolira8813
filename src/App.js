import "./App.css";
import { useState } from "react";
import MenuContainer from "./MenuContainer";
import Cart from "./Cart";
function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Hamburguer", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-Burguer", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "X-Salada", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Big Kenzie", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  function showProducts(name) {
    if (name !== "") {
      setProducts(
        products.filter((e) => e.name.toUpperCase() === name.toUpperCase())
      );
    }
  }

  function handleClick(id) {
    const novo = products.find((e) => e.id === id);
    setCurrentSale([...currentSale, novo]);
  }

  return (
    <div className="App">
      <div className="header">
        <img
          src="https://st3.depositphotos.com/16030310/18317/v/600/depositphotos_183177442-stock-illustration-bk-letters-logo-initial-logo.jpg"
          alt="logo"
        />
        <h2>Burger Kenzie</h2>
      </div>
      <div className="content">
        <form>
          <input
            type="text"
            value={filteredProducts}
            onChange={(event) => setFilteredProducts(event.target.value)}
            placeholder="pesquisar"
          ></input>
        </form>
        <button
          className="btnPesquisar"
          onClick={() => showProducts(filteredProducts)}
        >
          Pesquisar
        </button>
        <div className="main">
          <div className="boxItems">
            <MenuContainer products={products} handleClick={handleClick} />
          </div>
          <div className="boxCart">
            <h2>
              Total da compra: R$
              {parseFloat(
                currentSale
                  .reduce((valorB, valorA) => {
                    return valorA.price + valorB;
                  }, 0)
                  .toFixed(2)
              )}
            </h2>
            <div>
              <Cart props={currentSale}></Cart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
