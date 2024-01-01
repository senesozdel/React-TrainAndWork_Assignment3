import React from 'react'

const ProductCompare = () => {
  return (
<div className="product-action-modal modal fade" id="action-CompareModal" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body">
        <div className="product-action-view-content">
          <button type="button" className="btn-close" data-bs-dismiss="modal">
            <span className="icon-close" />
          </button>
          <div className="modal-action-messages">Added to compare successfully!</div>
          <div className="modal-action-product">
            <div className="thumb">
              <img src="assets/img/shop/1.jpg" alt="CRAS NEQUE METUS" width={300} height={300} />
            </div>
            <h4 className="product-name"><a href="shop-single-product.html">CRAS NEQUE METUS</a></h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ProductCompare