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

  // Should I be adding this to the state?
  lineItemTotals = () => {
    let prices = this.state.cartItemsList.map(item => item.product.priceInCents)
    let quantities = this.state.cartItemsList.map(item => item.quantity)
    let total = 0

    for (let i in prices) {
      total += prices[i] * quantities[i]
    }

    return total
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

        {/* Question for instructor: Shoud lines 38 - 40 be it's own component?
        I thought it was small enough to not be! :) */}
        <div className="container">
            Total Price: ${ this.lineItemTotals() }
        </div>

        <AddItem addOne={this.addOne} stateLength={this.stateLength} />

        <br/>
        <footer className="app-footer"><CartFooter copyright={2016} /></footer>

      </div>
    )
  }
}

export default App;
