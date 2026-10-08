import "./Stats.css";
function Stats({ totalProducts, totalLowStock, totalUnits }) {
  return (
    <div className="stats-container">
      <div className="stat-card">
        <p>Total Products</p>
        <h2>{totalProducts}</h2>
      </div>
      <div className="stat-card">
        <p>Low Stock Items</p>
        <h2>{totalLowStock}</h2>
      </div>
      <div className="stat-card">
        <p>Total Units</p>
        <h2>{totalUnits}</h2>
      </div>
    </div>
  );
}

export default Stats;
