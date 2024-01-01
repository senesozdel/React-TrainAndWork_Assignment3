import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchProducts } from '../../features/products/productsSlice';
import axios from 'axios';
import { addToFavorite, getFavorite } from '../../features/wishlist/wishlistSlice';
import { addToCart } from '../../features/cart/shoppingcarSlice';
import { decreaseQuantity, increaseQuantity } from '../../features/cart/shoppingcarSlice';


const SingleProduct = () => {
 

  const dispatch = useDispatch()
  const { id } = useParams();

  const { data, currentUser, } = useSelector((store) => {
    return {
      data: store.products.data,
      currentUser: store.currentUser.currentUser,

    }
  })

  const product = data && data.find(i => i.id == id)



console.log(product)


const addCart = (product) => {
  if (currentUser) {
    dispatch(addToCart(product))
  }
  else {
    alert("Lütfen Giriş Yapınız")
  }
}


const addfavorite = async (product) => {
  if (currentUser) {
    await dispatch(addToFavorite({ ...product, "currentUser": currentUser.id }))
    await dispatch(getFavorite(currentUser.id))
  }
  else {
    alert("Lütfen Giriş Yapınız")
  }
}


  return (
    <section className="product-area shop-single-product">
      <div className="container">

     {
  product && 
      
        <div className="row">

        <div className="col-lg-7">
          <div className="single-product-slider">
            <div className="single-product-thumb">
              <div className="swiper-container single-product-thumb-slider swiper-initialized swiper-horizontal swiper-pointer-events">
                <div className="swiper-wrapper" id="swiper-wrapper-37dd4448a2a881f8" aria-live="polite" style={{ transform: 'translate3d(-1659px, 0px, 0px)', transitionDuration: '0ms' }}>
                  <div className="swiper-slide zoom zoom-hover" role="group" aria-label="1 / 4" style={{ width: '553px', position: 'relative', overflow: 'hidden' }}>
                    <div className="thumb-item">
                      <a className="lightbox-image" data-fancybox="gallery" href="assets/img/shop/details/1.jpg">
                        <img width={800} height={800} src={`/${product.image}` }alt="Image" />
                      </a>
                      <div className="ribbons">
                        <span className="ribbon ribbon-new">New</span>
                      </div>
                    </div>
                    <img role="presentation" alt="" src={`/${product.image}` }className="zoomImg" style={{ position: 'absolute', top: '-84.4177px', left: '-0.80398px', opacity: 0, width: '800px', height: '800px', border: 'none', maxWidth: 'none', maxHeight: 'none' }} /></div>
                  <div className="swiper-slide zoom zoom-hover" role="group" aria-label="2 / 4" style={{ width: '553px', position: 'relative', overflow: 'hidden' }}>
                    <div className="thumb-item">
                      <a className="lightbox-image" data-fancybox="gallery" href="assets/img/shop/details/6.jpg">
                        <img width={800} height={800} src={`/${product.image}` }alt="Image" />
                      </a>
                      <div className="ribbons">
                        <span className="ribbon ribbon-new">New</span>
                      </div>
                    </div>
                    <img role="presentation" alt="" src={`/${product.image}` }className="zoomImg" style={{ position: 'absolute', top: '0px', left: '0px', opacity: 0, width: '800px', height: '800px', border: 'none', maxWidth: 'none', maxHeight: 'none' }} /></div>
                  <div className="swiper-slide zoom zoom-hover swiper-slide-prev" role="group" aria-label="3 / 4" style={{ width: '553px', position: 'relative', overflow: 'hidden' }}>
                    <div className="thumb-item">
                      <a className="lightbox-image" data-fancybox="gallery" href="assets/img/shop/details/7.jpg">
                        <img width={800} height={800} src={`/${product.image}` }alt="Image" />
                      </a>
                      <div className="ribbons">
                        <span className="ribbon ribbon-new">New</span>
                      </div>
                    </div>
                    <img role="presentation" alt="" src={`/${product.image}` }className="zoomImg" style={{ position: 'absolute', top: '-168.389px', left: '-219px', opacity: 0, width: '800px', height: '800px', border: 'none', maxWidth: 'none', maxHeight: 'none' }} /></div>
                  <div className="swiper-slide zoom zoom-hover swiper-slide-visible swiper-slide-active" role="group" aria-label="4 / 4" style={{ width: '553px', position: 'relative', overflow: 'hidden' }}>
                    <div className="thumb-item">
                      <a className="lightbox-image" data-fancybox="gallery" href="assets/img/shop/details/3.jpg">
                        <img width={800} height={800} src={`/${product.image}` }alt="Image" />
                      </a>
                      <div className="ribbons">
                        <span className="ribbon ribbon-new">New</span>
                      </div>
                    </div>
                    <img role="presentation" alt="" src={`/${product.image}` }className="zoomImg" style={{ position: 'absolute', top: '-59.8517px', left: '-243.784px', opacity: 0, width: '800px', height: '800px', border: 'none', maxWidth: 'none', maxHeight: 'none' }} /></div>
                </div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
            </div>

          </div>
        </div>



        <div className="col-lg-5">
          <div className="single-product-info">
            <div className="prices">
              <span className="price-old">${product.oldPrice}</span>
              <span className="price">${product.newPrice}</span>
              <span className="price-save">Save {Math.round((((product.oldPrice-product.newPrice)/product.oldPrice)*100))}%</span>
            </div>
            <h4 className="title">{product.name}</h4>
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
            <p className="product-desc">{product.desc}</p>
            <div className="product-variants">

            </div>
            <div className="quick-product-action">
              <div className="action-top">

                <button className="btn btn-black" onClick={()=>addCart(product)}><i className="icon-handbag icons" /> Add to cart</button>
              </div>
              <div className="product-additional-info">
                <button className="btn-wishlist" onClick={()=>addfavorite(product)}><i className="icon-heart icons" />Add to wishlist</button>
              
              </div>
            </div>
            <div className="widget-social-icons">
              <span>Share</span>
              <a className="facebook" href="#/"><i className="icon-social-facebook" /></a>
              <a className="twitter" href="#/"><i className="icon-social-twitter" /></a>
              <a className="pinterest" href="#/"><i className="icon-social-pinterest" /></a>
            </div>
            <div className="card-info-area">
              <div className="card-item">
                <div className="icon">
                  <img src="/assets/images/icons/d1.svg" alt="Image" />
                </div>
                <div className="info-content">
                  <h6>Security policy</h6>
                  <p>(edit with the Customer Reassurance module)</p>
                </div>
              </div>
              <div className="card-item">
                <div className="icon">
                  <img src="/assets/images/icons/d2.svg" alt="Image" />
                </div>
                <div className="info-content">
                  <h6>Delivery policy</h6>
                  <p>(edit with the Customer Reassurance module)</p>
                </div>
              </div>
              <div className="card-item">
                <div className="icon">
                  <img src="/assets/images/icons/d3.svg" alt="Image" />
                </div>
                <div className="info-content">
                  <h6>Return policy</h6>
                  <p>(edit with the Customer Reassurance module)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

 
     }

     



      </div>
    </section>

  )
}

export default SingleProduct