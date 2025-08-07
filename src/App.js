// FILE: src/App.js

import React, { Component } from 'react';
import './App.css';

import Product from './components/Product/Product';
import WishList from './components/WishList/WishList';
import HttpService from './services/http-service';

const http = new HttpService();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      wishlist: [],
      selectedProduct: null
    };

    this.loadData = this.loadData.bind(this);
    this.addToWishlist = this.addToWishlist.bind(this);
    this.showProductDetails = this.showProductDetails.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }
  

  loadData() {
    http.getProducts().then(data => {
      this.setState({ products: data });
    });
  }

  addToWishlist(product) {
    const exists = this.state.wishlist.find(p => p._id === product._id);
    if (!exists) {
      this.setState({ wishlist: [...this.state.wishlist, product] });
    }
  }

  showProductDetails(product) {
    this.setState({ selectedProduct: product });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Fashion Store</h1>
        </header>

        <div className="App-main">
          <div className="product-area">
            {this.state.products.map(product => (
              <Product
                key={product._id}
                product={product}
                onAddToWishlist={this.addToWishlist}
                onViewDetails={this.showProductDetails}
              />
            ))}
          </div>

          <WishList wishlist={this.state.wishlist} />

          {this.state.selectedProduct && (
            <div className="modal">
              <div className="modal-content">
                <h2>{this.state.selectedProduct.title}</h2>
                <img src={this.state.selectedProduct.imgUrl} alt={this.state.selectedProduct.title} />
                <p>{this.state.selectedProduct.description}</p>
                <button onClick={() => this.setState({ selectedProduct: null })}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
