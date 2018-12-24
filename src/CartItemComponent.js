import React from 'react'

// with props!
const CartItemComponent = (product) => {
  return (
    <div className="collection-item list-group-item" data-product={product.index}>
      <div className="row">
        <div className="col-md-8">{product.name}</div>
        <div className="col-md-2">${product.priceInCents}</div>
        <div className="col-md-2">{product.quantity}</div>
      </div>
    </div>
  )
}

export default CartItemComponent
