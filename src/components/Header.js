import React, { useContext } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import PizzaContext from '../context/PizzaContext';
import '../css/Header.css';

const Header = () => {
  const { orders} = useContext(PizzaContext);

  return (
    <header className="header">
      <h1 className="header-title">
        <FaPizzaSlice /> Kaushik Pizza Shop
      </h1>
      <h3>Streamlining orders, simplifying business</h3>
    </header>
  );
};

export default Header;
