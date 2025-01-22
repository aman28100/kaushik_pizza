import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { PizzaProvider } from "./context/PizzaContext";
import Header from "./components/Header";
import OrderForm from "./components/OrderForm";
import OrderBoard from "./components/OrderBoard";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";
import Popup from "./components/Popup"; // Import the Popup component
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  const [popupContent, setPopupContent] = useState(null); // To store the content of the popup

  const handlePopup = (content) => {
    setPopupContent(content);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <PizzaProvider>
      <Router>
        <div className="app-container">
          <Header />
          <div className="flex-container">
            <OrderForm />
            <MainSection />
          </div>
          <OrderBoard />
          <Footer onLinkClick={handlePopup} /> {/* Pass handlePopup as a prop */}
          {popupContent && <Popup content={popupContent} onClose={closePopup} />}
        </div>
      </Router>
    </PizzaProvider>
  );
}

export default App;
