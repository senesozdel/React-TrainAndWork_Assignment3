import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../../../features/products/productsSlice'
import { addToCart } from '../../../features/cart/shoppingcarSlice'
import { addToFavorite, getFavorite } from '../../../features/wishlist/wishlistSlice'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'




const ProductBanner = () => {

  const navigate = useNavigate();

  const [bestProduct,setBestProduct] = useState([])
  const [newItems,setNewItems] = useState([])

  const { data, currentUser } = useSelector((store) => {
    return {
        data: store.products.data,
        currentUser: store.currentUser.currentUser,
    }
})

const bestsellersCall = ()=>{
  const bestProduct = data && data.filter(x => x.categoryId == 3)
setBestProduct(bestProduct)
}
const newItemsCall = ()=>{
  const newItems = data && data.filter(x => x.categoryId == 2)
 setNewItems(newItems)
}



const dispatch = useDispatch()
useEffect(() => {
    dispatch(fetchProducts())
}, [dispatch])

const addCart = (product) => {
  if (currentUser) {
  dispatch(addToCart(product))
  alert("ürün sepete eklendi")}
  else {
    alert("Lütfen Giriş Yapınız")
    navigate('/login-register')
}
}

const addfavorite = async (product) => {
  if (currentUser) {
      await dispatch(addToFavorite({ ...product, "currentUser": currentUser.id }))
      await dispatch(getFavorite(currentUser.id))
      alert("ürün favorilere eklendi")
  }
  else {
      alert("Lütfen Giriş Yapınız")
      navigate('/login-register')
  }
}




  return (
    <section className="product-area product-style1-area">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="product-tab-content">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="our-features-tab" data-bs-toggle="tab" data-bs-target="#our-features" type="button" role="tab" aria-controls="our-features" aria-selected="true">Featured Products</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="best-sellers-tab" onClick={()=>bestsellersCall()}   data-bs-toggle="tab" data-bs-target="#best-sellers" type="button" role="tab" aria-controls="best-sellers" aria-selected="false" tabIndex={-1}>New Arrival</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="new-items-tab" onClick={()=>newItemsCall()} data-bs-toggle="tab" data-bs-target="#new-items" type="button" role="tab" aria-controls="new-items" aria-selected="false" tabIndex={-1}>Best Sellers</button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="our-features" role="tabpanel" aria-labelledby="our-features-tab">
              <div className="row">
                <div className="col-lg-12">
                  <div className="product">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="product-slider-content">
                          <div className="swiper-container product-slider-container swiper-pagination-style2 swiper-initialized swiper-horizontal swiper-pointer-events">
                            <div className="swiper-wrapper" id="swiper-wrapper-a4116c187cc8dbf1" aria-live="polite" style={{transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms'}}>
{ data !== null &&
  data.map((i)=>
    <div className="swiper-slide swiper-slide-duplicate swiper-slide-active" role="group" aria-label="12 / 15" style={{width: '285px'}} data-swiper-slide-index={11}>
                                <div className="product-item product-animation">
                                  <div className="product-thumb">
                                    <Link to={`/productdetail/${i.id}`} >
                                      <img src={i.image} alt="Image" width={360} height={360} />
                                      <span className="bg-thumb" data-bg-img="assets/img/shop/2.webp" style={{backgroundImage: 'url("assets/img/shop/2.webp")'}} />
                                    </Link>
                                    <div className="ribbons">
                                      <span className="ribbon ribbon-discount">-9%</span>
                                      <span className="ribbon ribbon-new">new</span>
                                    </div>
                                  </div>
                                  <div className="product-info">
                                    <div className="product-info-action">
                                      <button className="action-bag" onClick={()=>addCart(i)} type="button" > <i className="icon-handbag icons" /></button>
                                      <button className="action-wishlist"onClick={()=>addfavorite(i)}  type="button" ><i className="icon-heart icons" /></button>
                                      <button className="action-compare" type="button" data-bs-toggle="modal" data-bs-target="#action-CompareModal"><i className="icon-shuffle icons" /></button>
                                      <button className="action-quick-view" type="button" data-bs-toggle="modal" data-bs-target="#action-QuickViewModal"><i className="icon-magnifier icons" /></button>
                                    </div>
                                    <div className="prices">
                                      <span className="price-old">${i.oldPrice}</span>
                                      <span className="price">${i.newPrice}</span>
                                    </div>
                                    <h6 className="title"> <Link to={`/productdetail/${i.id}`} >{i.name}</Link></h6>
                                    <div className="rating">
                                      <span className="rating-color icon-star" />
                                      <span className="rating-color icon-star" />
                                      <span className="rating-color icon-star" />
                                      <span className="rating-color icon-star" />
                                      <span className="rating-color icon-star" />
                                    </div>
                                  </div>
                                </div>
   </div>

  )
}
                          
                    
                              </div>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 1" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 3" /></div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade show active" id="new-items" role="tabpanel" aria-labelledby="our-features-tab">
              <div className="row">
                <div className="col-lg-12">
                  <div className="product">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="product-slider-content">
                          <div className="swiper-container product-slider-container swiper-pagination-style2 swiper-initialized swiper-horizontal swiper-pointer-events">
                            <div className="swiper-wrapper" id="swiper-wrapper-a4116c187cc8dbf1" aria-live="polite" style={{transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms'}}>
{newItems !== null &&
  newItems.map((i)=>

  
    <div className="swiper-slide swiper-slide-duplicate swiper-slide-active" role="group" aria-label="12 / 15" style={{width: '285px'}} data-swiper-slide-index={11}>
                                <div className="product-item product-animation">
                                  <div className="product-thumb">
                                    <Link to={`/shopdetail/${i.id}`}>
                                      <img src={i.image} alt="Image" width={360} height={360} />
                                      <span className="bg-thumb" data-bg-img="assets/img/shop/2.webp" style={{backgroundImage: 'url("assets/img/shop/2.webp")'}} />
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
                                    <h6 className="title"> <Link to={`/productdetail/${i.id}`} >{i.title}</Link></h6>
                                    <div className="rating">
                                      <span className="rating-color icon-star" />
                                      <span className="rating-color icon-star" />
                                      <span className="rating-color icon-star" />
                                      <span className="rating-color icon-star" />
                                      <span className="rating-color icon-star" />
                                    </div>
                                  </div>
                                </div>
   </div>

  )
}
                          
                    
                              </div>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 1" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 3" /></div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade show active" id="best-sellers" role="tabpanel" aria-labelledby="our-features-tab">
              <div className="row">
                <div className="col-lg-12">
                  <div className="product">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="product-slider-content">
                          <div className="swiper-container product-slider-container swiper-pagination-style2 swiper-initialized swiper-horizontal swiper-pointer-events">
                            <div className="swiper-wrapper" id="swiper-wrapper-a4116c187cc8dbf1" aria-live="polite" style={{transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms'}}>
{bestProduct != null &&
  bestProduct.map((i)=>
    <div className="swiper-slide swiper-slide-duplicate swiper-slide-active" role="group" aria-label="12 / 15" style={{width: '285px'}} data-swiper-slide-index={11}>
                                <div className="product-item product-animation">
                                  <div className="product-thumb">
                                  <Link to={`/productdetail/${i.id}`} >
                                      <img src={i.image} alt="Image" width={360} height={360} />
                                      <span className="bg-thumb" data-bg-img="assets/img/shop/2.webp" style={{backgroundImage: 'url("assets/img/shop/2.webp")'}} />
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
                                    <h6 className="title"> <Link to={`/productdetail/${i.id}`} >{i.name}</Link></h6>
                                    <div className="rating">
                                      <span className="rating-color icon-star" />
                                      <span className="rating-color icon-star" />
                                      <span className="rating-color icon-star" />
                                      <span className="rating-color icon-star" />
                                      <span className="rating-color icon-star" />
                                    </div>
                                  </div>
                                </div>
   </div>

  )
}
                          
                    
                              </div>
                            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 1" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 3" /></div>
                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

export default ProductBanner