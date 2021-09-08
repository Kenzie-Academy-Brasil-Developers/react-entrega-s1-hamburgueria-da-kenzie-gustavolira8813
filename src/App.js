import "./App.css";
import { useState } from "react";
import MenuContainer from "./MenuContainer";
import Cart from "./Cart";
function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Big Front", category: "Sanduíches", price: 7.99 },
    { id: 2, name: "X-DevJunior", category: "Sanduíches", price: 8.99 },
    { id: 3, name: "Davis Furioso", category: "Sanduíches", price: 10.99 },
    { id: 4, name: "Combo FullStack", category: "Sanduíches", price: 16.99 },
    { id: 5, name: "Guaraná", category: "Bebidas", price: 4.99 },
    { id: 6, name: "Coca-Cola", category: "Bebidas", price: 4.99 },
    { id: 7, name: "Fanta", category: "Bebidas", price: 4.99 },
    { id: 8, name: "Milk-Shake", category: "Sobremesas", price: 6.99 },
  ]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // function showProducts(productName) {
  //   productName === ""
  //     ? setProducts(products)
  //     : setProducts(
  //         products.filter(
  //           (item) => item.name.toUpperCase() === productName.toUpperCase()
  //         )
  //       );
  // }
  function showProducts(name) {
    if (name !== "") {
      setProducts(
        products.filter((e) => e.name.toUpperCase() === name.toUpperCase())
      );
    }
  }

  // function handleClick(productId) {
  //   const productAddCar = products.filter((item) => item.id === productId);
  //   currentSale.some((item) => item.id === productId)
  //     ? setCurrentSale(currentSale)
  //     : setCurrentSale([...currentSale, productAddCar[0]]);

  //   currentSale.some((item) => item.id === productId)
  //     ? totalPrice(currentSale, 0)
  //     : totalPrice(currentSale, productAddCar[0].price);
  // }
  // const totalPrice = (currentSale, lastProduct) => {
  //   const valueTotal =
  //     currentSale.reduce((total, item) => total + item.price, 0) + lastProduct;
  //   setCartTotal(valueTotal.toFixed(2));
  // };
  function handleClick(id) {
    const novo = products.find((e) => e.id === id);
    currentSale.some((item) => item.id === id)
      ? setCurrentSale(currentSale)
      : setCurrentSale([...currentSale, novo]);
  }

  return (
    <div className="App">
      <div className="header">
        <img
          src="https://st3.depositphotos.com/16030310/18317/v/600/depositphotos_183177442-stock-illustration-bk-letters-logo-initial-logo.jpg"
          alt="logo"
        />
        <h2>BK-Burger Kenzie</h2>
      </div>
      <div className="content">
        <input
          className="pesquisar"
          type="text"
          value={filteredProducts}
          onChange={(event) => setFilteredProducts(event.target.value)}
          placeholder="pesquisar"
        ></input>

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
            <h2 className="valorTotal">
              Subtotal: R$
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
