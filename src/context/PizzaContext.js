import React, { createContext, useState } from "react";

const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [deliveredCount, setDeliveredCount] = useState(0);
  const [orderIdCounter, setOrderIdCounter] = useState(1); 

  const addOrder = (order) => {
    const ordersInProgress = orders.filter(order => order.stage !== "Order Picked").length;

    
    if (ordersInProgress >= 10) {
      alert("Not taking any order for now!");
      return;
    }

    const newOrderId = String(orderIdCounter).padStart(2, '0');

    setOrders([
      ...orders,
      {
        ...order,
        id: newOrderId,
        stage: "Order Placed",
        startTime: Date.now(), 
        stageStartTime: Date.now(), 
      },
    ]);
    setOrderIdCounter(orderIdCounter + 1);
  };

 
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

          if (nextStage !== "Order Picked") {
            return { ...order, stage: nextStage, stageStartTime: Date.now() };
          }

          const totalTime = Math.floor((Date.now() - order.startTime) / 1000); 
          setDeliveredCount((prevCount) => prevCount + 1); 
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
