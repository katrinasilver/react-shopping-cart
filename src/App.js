import React, { Component } from 'react';
import CartHeader from './CartHeader'
import CartItems from './CartItems'
import CartItemComponent from './CartItemComponent'
import CartFooter from './CartFooter'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <CartHeader />
        </header>

        <CartItems />

        <footer className="app-footer">
          <CartFooter copyright="2016" />
        </footer>
      </div>
    );
  }
}

export default App;
