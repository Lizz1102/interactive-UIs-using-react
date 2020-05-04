import React, { Component } from 'react';
import './App.css';
import Product from './Products/Product';

class App extends Component {
  state = {
    products: [
      { name: 'Macbook Pro', price: 1700 },
      { name: 'Surface Pro', price: 1400 },
      { name: 'iPad', price: 650 }
    ],
    extraState: 'some additional value',
    showProducts: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      products: [
        { name: newName, price: 1700 },
        { name: 'Surface Pro', price: 1400 },
        { name: 'iPad', price: 600 }
      ]
    })
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
          <Product
            name={this.state.products[0].name}
            price={this.state.products[0].price} />
          <Product
            name={this.state.products[1].name}
            price={this.state.products[1].price}
            click={this.switchNameHandler.bind(this, 'Changed Product Name!')}
            changed={this.nameChangedHandler} >Manufacturer: Microsoft Corporation</Product>
          <Product
            name={this.state.products[2].name}
            price={this.state.products[2].price} />
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
