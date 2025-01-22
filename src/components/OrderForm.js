import React, { useState, useContext } from 'react';
import PizzaContext from '../context/PizzaContext';
import '../css/OrderForm.css';

const OrderForm = () => {
  const { addOrder, orders } = useContext(PizzaContext);
  const [formData, setFormData] = useState({ type: 'Veg', size: 'Large', base: 'Thin' });
  const [showSuccessGif, setShowSuccessGif] = useState(false);

  const totalOrdersInProgress = orders.filter((order) => order.stage !== 'Order Picked').length;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (totalOrdersInProgress < 10) {
      addOrder({
        id: `Order_${orders.length + 1}`,
        ...formData,
        stage: 'Order Placed',
        startTime: Date.now(),
      });
      setShowSuccessGif(true);

      setTimeout(() => {
        setShowSuccessGif(false);
      }, 2000);
    } else {
      alert('Not taking any orders for now!');
    }
  };

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h2>Place a New Order</h2>
      <label>Type:</label>
      <select
        name="type"
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
      >
        <option value="Veg">Veg</option>
        <option value="Non-Veg">Non-Veg</option>
      </select>
      <label>Size:</label>
      <select
        name="size"
        onChange={(e) => setFormData({ ...formData, size: e.target.value })}
      >
        <option value="Large">Large</option>
        <option value="Medium">Medium</option>
        <option value="Small">Small</option>
      </select>
      <label>Base:</label>
      <select
        name="base"
        onChange={(e) => setFormData({ ...formData, base: e.target.value })}
      >
        <option value="Thin">Thin</option>
        <option value="Thick">Thick</option>
      </select>
      <button type="submit" className="submit-button">Place Order</button>

      {showSuccessGif && (
        <div className="success-gif-container">
          <img 
            src="/Video/pizza.gif" 
            className="success-gif" 
            alt="Order Placed Successfully" 
          />
        </div>
      )}
    </form>
  );
};

export default OrderForm;
