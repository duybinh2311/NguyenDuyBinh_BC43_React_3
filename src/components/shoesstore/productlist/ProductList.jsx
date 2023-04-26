import React, { Component } from 'react'
import ProductItem from '../productitem/ProductItem'

export default class ProductList extends Component {
  render() {
    const { productList, getProductDetail } = this.props
    return (
      <div className="row row-gap-4">
        {productList.map((product) => {
          return (
            <div className="col-3" key={product.id}>
              <ProductItem
                item={product}
                setProductModal={() => getProductDetail(product)}
              />
            </div>
          )
        })}
      </div>
    )
  }
}
