import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    const { content } = this.props
    return (
      <div
        className="modal fade"
        id="modalId"
        tabIndex={-1}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                Product Detail
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body row align-items-center">
              <div className="col-5 p-5">
                <img src={content.image} className="w-100" />
              </div>
              <div className="col-7">
                <h4 className="mb-5">{content.name}</h4>
                <p>{content.description}</p>
                <p className="text-primary fw-bold">$ {content.price}</p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
