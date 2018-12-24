import React, { Component } from 'react'
import ProductOptions from './ProductOptions'
class AddItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 }
      ],
      addedProduct: '',
      productQuantity: ''
    }
  }

  newId = () => {
    this.uniqueId = this.uniqueId || this.props.stateLength(1)
    return this.uniqueId++
  }

  findProduct = () => this.state.products
    .find(product => product.name === this.state.addedProduct)

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e, i) => {
    e.preventDefault()

    let newProduct = {
      id: this.newId(),
      product: this.findProduct(),
      quantity: +(this.state.productQuantity)
    }

    this.setState({
      addedProduct: '',
      productQuantity: ''
    })

    this.props.addOne(newProduct)
  }

  render() {
    return (
      <form className="container" onSubmit={this.onSubmit}>
        <br />
        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input type="number" className="form-control"
            id="quantity"
            name="productQuantity"
            value={this.state.productQuantity}
            onChange={this.onChange} />
        </div>

        <div className="form-group">
          <label htmlFor="products">Product</label>
          <select className="form-control" id="products" name="addedProduct"
            value={this.state.addedProduct}
            onChange={this.onChange}>
            {
              this.state.products.map(product =>
                <ProductOptions key={product.id} index={product.id} name={product.name}/>)
            }
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default AddItem
