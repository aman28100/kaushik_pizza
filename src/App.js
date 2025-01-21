import React from 'react';
import { PizzaProvider } from './context/PizzaContext';
import Header from './components/Header';
import OrderForm from './components/OrderForm';
import OrderBoard from './components/OrderBoard';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <PizzaProvider>
      <div className="app-container">
        <Header />
        <div className="flex-container">
          <OrderForm />
          <MainSection />
        </div>
        <OrderBoard />
        <Footer />
      </div>
    </PizzaProvider>
  );
}

export default App;
