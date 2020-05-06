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

  nameChangedHandler = (event, id) => {
    const productIndex = this.state.products.findIndex(p => {
      return p.id ===id
    })

    const product = {
      ...this.state.products[productIndex]
    }

    product.name = event.target.value;

    const products = [...this.state.products]
    products[productIndex] = product

    this.setState(  {products: products}  )
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
      backgroundColor: 'green',
      color: 'white',
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
              key={product.id}
              changed = {(event) => this.nameChangedHandler(event, product.id)} />
          })}
        </div>
      )

      style.backgroundColor = 'red'

      if(this.state.products.length == 0) {
        style.backgroundColor = 'grey'
      }
    } else {
      if(this.state.products.length == 0) {
        style.backgroundColor = 'grey'
      }
    }

    const classes = []
    if(this.state.products.length <=2 ) {
      classes.push('red')
    }
    if(this.state.products.length <= 1 ) {
      classes.push('bold')
    }


    return (
      <div className="App">
        <h1>My First React App</h1>
        <p className={classes.join(' ')}>Showing a list of products!</p>
        <button
          style={style}
          onClick={this.toggleProductsHandler}>Toggle Product List</button>
        {products}
      </div>
    );
  }
}

export default App;
