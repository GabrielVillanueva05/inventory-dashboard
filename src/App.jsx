import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import InventoryTable from "./components/InventoryTable";
import SearchControls from "./components/SearchControls";

function App() {
  const [products, setProducts] = useState([]);

  const [searchString, setSearchString] = useState("");

  const [showLowStock, setShowLowStock] = useState(false);

  const getProduct = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=10`);

      const data = await response.json();

      setProducts(data.products);
    } catch (error) {
      console.error(`Error has Occured.`, error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const totalProducts = products.length;

  const handleClick = () => {
    setShowLowStock(!showLowStock);
  };

  const lowStockProducts = products.filter((product) => {
    return product.stock <= 10;
  });

  const totalLowStock = lowStockProducts.length;

  const buttonMessage = showLowStock
    ? "Show All Items"
    : "Show Low Stock Items";

  const totalUnits = products.reduce((totalSoFar, product) => {
    return totalSoFar + product.stock;
  }, 0);

  const visibleProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchString.toLowerCase());

    const matchesStock = !showLowStock || product.stock <= 10;

    return matchesSearch && matchesStock;
  });

  return (
    <>
      <Header />

      <Stats
        totalProducts={totalProducts}
        totalLowStock={totalLowStock}
        totalUnits={totalUnits}
      />

      <SearchControls
        setSearchString={setSearchString}
        handleClick={handleClick}
        buttonMessage={buttonMessage}
      />

      <InventoryTable visibleProducts={visibleProducts} />
    </>
  );
}

export default App;
