import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productBestSellers, productGetAll, productNewItems } from '../../../features/products/productsSlice'
import { Link } from 'react-router-dom'
const ProductTab = () => {

  const { data, currentUser } = useSelector((store) => {
    return {
        data: store.products.data,
        currentUser: store.currentUser.currentUser,
    }
})

  return (
    <section className="product-area product-style2-area">
  <div className="container">
    <div className="row">
      <div className="col-md-6 m-auto">
        <div className="section-title text-center">
          <h2 className="title">Fresh Fruit</h2>
        </div>
      </div>
    </div>
    <div className="row row-gutter-0 category-items1">
      <div className="col-md-5">
        <div className="category-item mb-sm-30">
          <div className="thumb effect-animate-flash">
            <Link ><img src="assets/images/category/4.jpg" alt="Image" width={473} height={723} /></Link>
          </div>
        </div>
      </div>
      <div className="col-md-7">
        <div className="product-slider-content product-slider1">
          <div className="swiper-container product-slider2-container swiper-pagination-style3">
            <div className="swiper-wrapper">
                {/* Dönecek kısım swiper-slide */}
              <div className="swiper-slide row">
                {
                  data != null && 
                  data.slice(0,5).map((i)=>
                  <div className="product-item col-4">
                  <div className="product-thumb">
                    <Link to={`/productdetail/${i.id}`}>
                    <img src={i.image} alt="Image" width={60} height={60} />
                      <span className="bg-thumb" data-bg-img="assets/img/shop/2.webp" />
                    </Link>
                    <div className="ribbons">
                      <span className="ribbon ribbon-discount">-9%</span>
                      <span className="ribbon ribbon-new">new</span>
                    </div>
                  </div>
                  <div className="product-info">
                    <div className="product-info-action">
                      <button className="action-bag" type="button" data-bs-toggle="modal" data-bs-target="#action-CartAddModal"> <i className="icon-handbag icons" /></button>
                      <button className="action-wishlist" type="button" data-bs-toggle="modal" data-bs-target="#action-WishlistModal"><i className="icon-heart icons" /></button>
                      <button className="action-compare" type="button" data-bs-toggle="modal" data-bs-target="#action-CompareModal"><i className="icon-shuffle icons" /></button>
                      <button className="action-quick-view" type="button" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal"><i className="icon-magnifier icons" /></button>
                    </div>
                    <div className="prices">
                      <span className="price-old">${i.oldPrice}</span>
                      <span className="price">${i.newPrice}</span>
                    </div>
                    <h6 className="title"><Link to={`/productdetail/${i.id}`}>{i.name}</Link></h6>
                    <div className="rating">
                      <span className="rating-color icon-star" />
                      <span className="rating-color icon-star" />
                      <span className="rating-color icon-star" />
                      <span className="rating-color icon-star" />
                      <span className="rating-color icon-star" />
                    </div>
                  </div>
                </div>
                  )
                }
            

              </div>
            </div>
            <div className="swiper-pagination" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default ProductTab