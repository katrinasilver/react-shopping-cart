import React, { Component } from 'react';
import CartHeader from './CartHeader'
import CartItems from './CartItems'
import CartFooter from './CartFooter'
import AddItem from './AddItem';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItemsList: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ]
    }
  }

  addOne = (product) =>
    this.setState({
      cartItemsList: [...this.state.cartItemsList, product]
    })

  stateLength = (i) => this.state.cartItemsList.length + i

  render() {
    return (
      <div className="app">

        <header className="app-header"><CartHeader /></header>

        <CartItems cartItemsList={this.state.cartItemsList} />
        <br />

        <div className="container">
          Total Price: ${this.state.cartItemsList
            .reduce((p, i) => p + (i.product.priceInCents * i.quantity), 0)}
        </div>

        <AddItem addOne={this.addOne} stateLength={this.stateLength} />

        <br/>
        <footer className="app-footer"><CartFooter copyright={2016} /></footer>

      </div>
    )
  }
}

export default App;
