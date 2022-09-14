import './ShopApp.css';
import Products from "./Components/Products";

function ShopApp() {
  return (
    <div className="App">
      <header className="App-header">
        Welcom in the Shop App
        <Products/>
      </header>
    </div>
  );
}

export default ShopApp;
