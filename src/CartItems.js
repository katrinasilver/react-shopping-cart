import React from 'react'
import CartItemComponent from './CartItemComponent'

const CartItems = (props) =>
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
        props.cartItemsList.map(product =>
          <CartItemComponent
            key={product.id}
            index={product.id}
            name={product.product.name}
            priceInCents={product.product.priceInCents}
            quantity={product.quantity}
          />
        )
      }
    </div>
  </div>


export default CartItems
