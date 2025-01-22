import React, { useContext, useEffect, useState } from "react";
import PizzaContext from "../context/PizzaContext";
import "../css/OrderBoard.css";

const stages = ["Order Placed", "Order in Making", "Order Ready", "Order Picked"];

const OrderBoard = () => {
  const { orders, updateOrderStage} = useContext(PizzaContext);
  const [timeElapsed, setTimeElapsed] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimes = {};
      orders.forEach((order) => {
        const elapsed = Math.floor((Date.now() - order.stageStartTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        updatedTimes[order.id] = { minutes, seconds };
      });
      setTimeElapsed(updatedTimes);
    }, 1000);

    return () => clearInterval(timer); 
  }, [orders]);

  const totalOrdersInProgress = orders.filter(
    (order) => order.stage !== "Order Picked"
  ).length;

  return (
    <div className="order-board">
      <h2>Total Orders in Progress: {totalOrdersInProgress}</h2>
      <div className="order-columns">
        {stages.map((stage) => (
          <div key={stage} className={`stage-column ${stage.toLowerCase().replace(" ", "-")}`}>
            <h3>{stage}</h3>
            {orders
              .filter((order) => order.stage === stage)
              .map((order) => (
                <div
                  key={order.id}
                  className={`order-card ${
                    stage !== "Order Picked" && timeElapsed[order.id]?.minutes >= 3 ? "highlight-red" : ""
                  }`}
                >
                  <h4>Order ID: {order.id}</h4>
                  <p>{`${order.type}, ${order.size}, ${order.base}`}</p>

                  {stage !== "Order Picked" && (
                    <p>
                      Time in Stage: {timeElapsed[order.id]?.minutes || 0} min{" "}
                      {timeElapsed[order.id]?.seconds || 0} sec
                    </p>
                  )}

                  {stage === "Order Picked" ? (
                    <p><strong>Picked</strong></p>
                  ) : (
                    <button className="next-stage-btn" onClick={() => updateOrderStage(order.id)}>
                      Next Stage
                    </button>
                  )}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderBoard;
