import React from 'react'

const ProductWishlist = () => {
  return (
<aside className="product-action-modal modal fade" id="action-WishlistModal" tabIndex={-1} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body">
        <div className="product-action-view-content">
          <button type="button" className="btn-close" data-bs-dismiss="modal">
            <span className="icon-close" />
          </button>
          <div className="modal-action-messages">Added to wishlist successfully!</div>
          <div className="modal-action-product">
            <div className="thumb">
              <img src="assets/img/shop/1.jpg" alt="Organic Food Juice" width={360} height={360} />
            </div>
            <h4 className="product-name"><a href="shop-single-product.html">Organic Food Juice</a></h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</aside>

  )
}

export default ProductWishlist