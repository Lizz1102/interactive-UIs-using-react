import React, { Component } from 'react';
import './App.css';
import Product from './Products/Product';
//edit multiple lines: alt
//shift alt f format document

class App extends Component {
  state = {
    products: [
      { id: 'asas', name: 'Macbook Pro', price: 1700 },
      { id: 'dddd', name: 'Surface Pro', price: 1400 },
      { id: 'rere', name: 'iPad', price: 650 }
    ],
    extraState: 'some additional value',
    showProducts: false
  }

  nameChangedHandler = (event) => {
    this.setState({
      products: [
        { name: 'Macbook Pro', price: 1700 },
        { name: event.target.value, price: 1400 },
        { name: 'iPad', price: 650 }
      ]
    })
  }

  deleteProductHandler = (productIndex) => {
    const products = [...this.state.products]
    products.splice(productIndex, 1)
    this.setState({ products: products })
  }

  toggleProductsHandler = () => {
    const doesShow = this.state.showProducts;
    this.setState({ showProducts: !doesShow })
  }

  render() {
    const style = {
      backgroundColor: 'coral',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let products = null

    if (this.state.showProducts) {
      products = (
        <div>
          {this.state.products.map((product, index) => {
            return <Product
              click={() => this.deleteProductHandler(index)}
              name={product.name}
              price={product.price}
              key={product.id} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>My First React App</h1>
        <p>Showing a list of products!</p>
        <button
          style={style}
          onClick={this.toggleProductsHandler}>Toggle Product List</button>
        {products}
      </div>
    );
  }
}

export default App;
