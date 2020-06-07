import React, { Component } from 'react';
import { MyProvider } from './components/MyProider';
import { ProductList } from './components/ProductList';


export default class App extends Component {
  

  render() {
      return (
          <MyProvider>
              <ProductList/>
        </MyProvider>
        
    );
  }
}
