import "./InventoryTable.css";
function InventoryTable({ visibleProducts }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Stock</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {visibleProducts.length === 0 ? (
            <tr>
              <td colSpan="3">No products available</td>
            </tr>
          ) : (
            visibleProducts.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.title}</td>

                  <td>{product.stock}</td>
                  <td>
                    <span
                      className={
                        product.stock <= 10 ? "status-low" : "status-good"
                      }
                    >
                      {product.stock <= 10 ? ` Low Stock` : ` In Stock`}
                    </span>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryTable;
