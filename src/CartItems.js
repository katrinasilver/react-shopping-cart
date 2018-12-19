import React from 'react'
import CartItemComponent from './CartItemComponent'

const cartItemsList =
  [
    { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
    { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
    { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
  ]

const CartItems = () => {
  return (
    <div className="container">
      <h1>Cart Items</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-md-8">Product</div>
            <div className="col-md-2">Price</div>
            <div className="col-md-2">Quantity</div>
          </div>
        </div>
        {
          cartItemsList.map(c =>
            <CartItemComponent
              name = {c.product.name}
              priceInCents = {c.product.priceInCents}
              quantity = {c.quantity}
            />
          )
        }
      </div>
    </div>
  )
}

export default CartItems
