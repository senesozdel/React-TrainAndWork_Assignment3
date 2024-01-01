import React from 'react'

const ProductQuickView = () => {
  return (
    <aside className="product-cart-view-modal modal fade" id="action-QuickViewModal" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-body">
          <div className="product-quick-view-content">
            <button type="button" className="btn-close" data-bs-dismiss="modal">
              <span className="icon-close" />
            </button>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 mb-md-30">
                  <div className="single-product-slider">
                    <div className="single-product-thumb">
                      <div className="swiper-container single-product-quick-view-slider swiper-nav-style2">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="thumb-item">
                              <img src="assets/img/shop/details/1.jpg" alt="Image" width={800} height={800} />
                              <div className="ribbons">
                                <span className="ribbon ribbon-new">New</span>
                              </div>
                            </div>
                          </div>
                            {/* Dönecek kisim */}
                        </div>
                        <div className="swiper-button-next" />
                        <div className="swiper-button-prev" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="single-product-info">
                    <div className="prices">
                      <span className="price-old">$65.30</span>
                      <span className="price">$59.42</span>
                      <span className="price-save">Save 9%</span>
                    </div>
                    <h4 className="title">Sante Granola with chocolate</h4>
                    <div className="comments-advices">
                      <div className="rating">
                        <span className="rating-color icon-star" />
                        <span className="rating-color icon-star" />
                        <span className="rating-color icon-star" />
                        <span className="rating-color icon-star" />
                        <span className="rating-color icon-star" />
                      </div>
                      <a className="btn-comments" href="shop-single-product.html"><i className="icon-bubble icons" />Read reviews (1)</a>
                      <a className="btn-review" href="shop-single-product.html"><i className="icon-note icons" />Write a review</a>
                    </div>
                    <p className="product-desc">The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                    <div className="product-variants">
                      <div className="product-action-size">
                        <span className="title">Size</span>
                        <select className="form-control form-control-select" id="group_1" data-product-attribute={1} name="group[1]">
                          <option value={1} title="S">S</option>
                          <option value={2} title="M" selected="selected">M</option>
                          <option value={3} title="L">L</option>
                          <option value={4} title="XL">XL</option>
                        </select>
                      </div>
                    </div>
                    <div className="quick-product-action">
                      <div className="action-top">
                        <div className="pro-qty">
                          <input type="text" id="quantity1" title="Quantity" defaultValue={1} />
                        </div>
                        <button className="btn btn-black"><i className="icon-handbag icons" /> Add to cart</button>
                      </div>
                      <div className="product-additional-info">
                        <a className="btn-wishlist" href="shop-wishlist.html"><i className="icon-heart icons" />Add to wishlist</a>
                        <a className="btn-wishlist" href="shop-compare.html"><i className="icon-shuffle icons" />Add to compare</a>
                      </div>
                    </div>
                    <div className="widget-social-icons">
                      <span>Share</span>
                      <a className="facebook" href="#/"><i className="icon-social-facebook" /></a>
                      <a className="twitter" href="#/"><i className="icon-social-twitter" /></a>
                      <a className="pinterest" href="#/"><i className="icon-social-pinterest" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
  
  )
}

export default ProductQuickView