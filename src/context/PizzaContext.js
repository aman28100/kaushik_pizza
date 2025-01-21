import React, { createContext, useState } from "react";

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [deliveredCount, setDeliveredCount] = useState(0);
  const [orderIdCounter, setOrderIdCounter] = useState(1); // Track the order ID counter

  // Add a new order
  const addOrder = (order) => {
    // Calculate the number of orders in progress (i.e., orders that are not delivered)
    const ordersInProgress = orders.filter(order => order.stage !== "Order Picked").length;

    // If there are already 10 orders in progress, do not allow adding new orders
    if (ordersInProgress >= 10) {
      alert("Not taking any order for now!");
      return;
    }

    const newOrderId = String(orderIdCounter).padStart(3, '0'); // Format ID with leading zeros (e.g., 001, 002)

    setOrders([
      ...orders,
      {
        ...order,
        id: newOrderId, // Set formatted order ID
        stage: "Order Placed",
        startTime: Date.now(), // Start time of the order
        stageStartTime: Date.now(), // Track start time of the stage
      },
    ]);
    setOrderIdCounter(orderIdCounter + 1); // Increment the order ID counter
  };

  // Update order stage
  const updateOrderStage = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => {
        if (order.id === id) {
          const nextStage =
            order.stage === "Order Placed"
              ? "Order in Making"
              : order.stage === "Order in Making"
              ? "Order Ready"
              : "Order Picked";

          // Reset stage start time when moving to the next stage
          if (nextStage !== "Order Picked") {
            return { ...order, stage: nextStage, stageStartTime: Date.now() };
          }

          // When moving to "Order Picked", calculate and store the pickedTime
          const totalTime = Math.floor((Date.now() - order.startTime) / 1000); // Total time from Order Placed to Order Picked
          setDeliveredCount((prevCount) => prevCount + 1); // Increment delivered count
          return { ...order, stage: nextStage, pickedTime: totalTime };
        }
        return order;
      })
    );
  };

  // Cancel order
  const cancelOrder = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  return (
    <PizzaContext.Provider
      value={{
        orders,
        addOrder,
        updateOrderStage,
        deliveredCount,
        cancelOrder,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaContext;
