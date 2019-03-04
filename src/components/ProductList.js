import React, {Component} from 'react';
import Title from "./Title";
import {storeProducts} from "../data";
import {ProductConsumer} from "../context";

class ProductList extends Component {
  state = {
    productList: [storeProducts]
  };

  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {value => {
                  return <h1>{value}</h1>
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
