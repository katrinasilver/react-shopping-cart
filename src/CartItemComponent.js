import React from 'react'

const CartItemComponent = (props) => {
  return (
    <div class="collection-item list-group-item">
      <div class="row">
        <div class="col-md-8">{props.name}</div>
        <div class="col-md-2">{props.priceInCents}</div>
        <div class="col-md-2">{props.quantity}</div>
      </div>
    </div>
  )
}

export default CartItemComponent
