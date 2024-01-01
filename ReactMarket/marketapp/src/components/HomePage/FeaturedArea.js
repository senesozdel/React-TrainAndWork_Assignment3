import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const FeaturedArea = () => {


  const { data, currentUser } = useSelector((store) => {
    return {
        data: store.products.data,
        currentUser: store.currentUser.currentUser,
    }
})
const newItems = data && data.filter(x => x.categoryId == 2)

  return (
    <section className="product-area product-style3-area">
  <div className="container">
    <div className="row">
      <div className="col-xl-3">
        <div className="product-list-area">
          <div className="row">
            <div className="col-md-12 m-auto">
              <div className="section-title text-center">
                <h2 className="title">Recently Added</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="product-slider-content">
                <div className="swiper product-slider3-container product-list-slider1 swiper-pagination-style">
                  <div className="swiper-wrapper group-mt-0">
{
  newItems !== null && newItems.map((i)=>
  <div className="swiper-slide">
  <div className="product-list-item">
    <div className="product-thumb">
      <a href="shop-single-product.html">
        <img src={i.image} alt="Image" width={360} height={360} />
      </a>
    </div>
    <div className="product-info">
      <div className="prices">
        <span className="price-old">${i.oldPrice}</span>
        <span className="price">${i.newPrice}</span>
      </div>
      <h6 className="title"><a href="shop-single-product.html">{i.name}</a></h6>
    </div>
  </div>
</div>

  )
}

                   
                  </div>
                  <div className="swiper-pagination" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="row">
          <div className="col-md-12 m-auto">
            <div className="section-title text-center">
              <h2 className="title">Deal Of The Week</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="product-slider-content">
              <div className="swiper-container product-slider4-container swiper-pagination-style">
                <div className="swiper-wrapper">
                {
  newItems !== null && newItems.map((i)=>
  <div className="swiper-slide">
  <div className="product-list-item">
    <div className="product-thumb">
      <a href="shop-single-product.html">
        <img src={i.image} alt="Image" width={360} height={360} />
      </a>
    </div>
    <div className="product-info">
      <div className="prices">
        <span className="price-old">${i.oldPrice}</span>
        <span className="price">${i.newPrice}</span>
      </div>
      <h6 className="title"><a href="shop-single-product.html">{i.name}</a></h6>
    </div>
  </div>
</div>

  )
}
                </div>
                <div className="swiper-pagination" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 category-items3">
        <div className="row">
          <div className="col-xl-12 col-lg-6 col-md-6 col-sm-6">
            <div className="category-item mb-23">
              <div className="thumb effect-animate-flash">
                <a href="shop.html"><img src="assets/images/category/15.jpg" alt="Image" width={262} height={290} /></a>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-lg-6 col-md-6 col-sm-6">
            <div className="category-item">
              <div className="thumb effect-animate-flash">
                <a href="shop.html"><img src="assets/images/category/16.jpg" alt="Image" width={262} height={290} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default FeaturedArea