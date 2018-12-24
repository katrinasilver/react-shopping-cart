import React from 'react'
const ProductOptions = (product) =>
  <option data-id={product.index}>{product.name}</option>
export default ProductOptions
