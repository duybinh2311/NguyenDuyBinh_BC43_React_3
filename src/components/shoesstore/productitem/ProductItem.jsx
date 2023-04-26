import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const { item, setProductModal } = this.props
    return (
      <div className="card">
        <img src={item.image} className="card-img-top w-50 mx-auto" />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.shortDescription}</p>
          <button
            className="btn btn-primary"
            onClick={setProductModal}
            data-bs-toggle="modal"
            data-bs-target="#modalId"
          >
            More Detail
          </button>
        </div>
      </div>
    )
  }
}
