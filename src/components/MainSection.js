import React, { useContext } from "react";
import PizzaContext from "../context/PizzaContext";
import '../css/MainSection.css';

const MainSection = () => {
  const { orders, cancelOrder } = useContext(PizzaContext);

  // Helper function to calculate total time spent
  const calculateTotalTime = (order) => {
    if (order.stage === "Order Picked") {
      // If the order is picked, return the fixed pickedTime value
      return `${Math.floor(order.pickedTime / 60)} min ${order.pickedTime % 60} sec`;
    } else {
      // Otherwise, calculate the elapsed time dynamically
      const elapsed = Math.floor((Date.now() - order.startTime) / 1000);
      return `${Math.floor(elapsed / 60)} min ${elapsed % 60} sec`;
    }
  };

  // Calculate delivered count by filtering orders that are in the "Order Picked" stage
  const deliveredCount = orders.filter((order) => order.stage === "Order Picked").length;

  return (
    <div className="main-section">
      <h2>Order Overview</h2>
      <div className="scrollable-table-container">
        <table className="order-table">
          <thead>
            <tr>
              <th className="clr">Order ID</th>
              <th className="clr">Stage</th>
              <th className="clr">Total time spent (time from order placed)</th>
              <th className="clr">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.stage}</td>
                <td>{calculateTotalTime(order)}</td>
                <td>
                  {order.stage !== "Order Ready" && order.stage !== "Order Picked" && (
                    <button className="cancel-button" onClick={() => cancelOrder(order.id)}>
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add a row for the total number of orders delivered */}
      <table className="order-table">
        <tfoot>
          <tr>
            <td colSpan="3" style={{ textAlign: "right" }}>
              <strong>Total Orders Delivered:</strong>
            </td>
            <td>
              <strong>{deliveredCount}</strong>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MainSection;
