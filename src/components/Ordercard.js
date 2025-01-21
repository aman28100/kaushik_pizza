import React from 'react';
import { FaPizzaSlice, FaHammer, FaBoxOpen, FaCheckCircle } from 'react-icons/fa';
import '../css/OrderCard.css';

const stageIcons = {
  'Order Placed': <FaPizzaSlice />,
  'Order in Making': <FaHammer />,
  'Order Ready': <FaBoxOpen />,
  'Order Picked': <FaCheckCircle />,
};

const OrderCard = ({ order, updateOrderStage, markOrderPicked }) => {
  const elapsedTime = Math.floor((Date.now() - order.startTime) / 1000);

  return (
    <div
      className={`order-card ${elapsedTime > 180 ? 'highlight-red' : ''}`}
      style={{ borderColor: order.stage === 'Order Ready' ? '#2ecc71' : '#e74c3c' }}
    >
      <div className="order-details">
        <h4>Order ID: {order.id}</h4>
        <p>{`${order.type} | ${order.size} | ${order.base}`}</p>
        <p>Time in Stage: {elapsedTime} seconds</p>
        <div className="order-icon">{stageIcons[order.stage]}</div>
      </div>

      <div className="order-actions">
        {/* Show the "Next Stage" button for all stages except "Order Ready" and "Order Picked" */}
        {order.stage !== 'Order Ready' && order.stage !== 'Order in Making' && (
          <button className="action-button" onClick={() => updateOrderStage(order.id)}>
            Next Stage
          </button>
        )}

        {/* Show the "Mark as Picked" button when the order is in "Order Ready" */}
        {order.stage === 'Order Ready' && (
          <button className="action-button" onClick={() => markOrderPicked(order.id)}>
            Mark as Picked
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
