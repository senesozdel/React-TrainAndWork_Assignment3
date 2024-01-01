import React from 'react'
import { Link } from 'react-router-dom'

const Slider = () => {
  return (
<section className="home-slider-area slider-default">
  <div className="home-slider-content">
    <div className="swiper-container home-slider-container swiper-fade swiper-initialized swiper-horizontal swiper-pointer-events">
      <div className="swiper-wrapper" id="swiper-wrapper-8510c73e9a101a9760" aria-live="polite" style={{transitionDuration: '0ms'}}><div className="swiper-slide swiper-slide-duplicate swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index={1} role="group" aria-label="2 / 2" style={{width: '1122px', transitionDuration: '0ms', opacity: 0, transform: 'translate3d(0px, 0px, 0px)'}}>
          <div className="home-slider-item">
            <div className="thumb-one bg-img" data-bg-img="assets/img/slider/s1-1.webp" style={{backgroundImage: 'url("assets/img/slider/s1-1.webp")'}} />
            <div className="slider-content-area slider-content-item2">
              <div className="container">
                <div className="row">
                  <div className="col-sm-9 offset-lg-3">
                    <div className="content">
                      <div className="inner-content animate-style1">
                        <div className="wrap-one">
                          <h5>Colorful Fresh Fruits Vegetables</h5>
                        </div>
                        <div className="wrap-two">
                          <h2>One Must Eat To Live</h2>
                        </div>
                        <div className="wrap-three">
                          <h2>Not Live To Eat 40% off</h2>
                        </div>
                        <div className="wrap-four">
                          <Link to="/shop-left-sidebar" className="btn-theme">Shop Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide swiper-slide-visible swiper-slide-active" data-swiper-slide-index={0} role="group" aria-label="1 / 2" style={{width: '1122px', transitionDuration: '0ms', opacity: 1, transform: 'translate3d(-1122px, 0px, 0px)'}}>
          <div className="home-slider-item">
            <div className="thumb-one bg-img" data-bg-img="assets/img/slider/s1-2.webp" style={{backgroundImage: 'url("assets/img/slider/s1-2.webp")'}} />
            <div className="slider-content-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 offset-xl-2 offset-lg-1 text-center">
                    <div className="content">
                      <div className="inner-content animate-style2">
                        <div className="wrap-one">
                          <h5>Colorful Fresh Fruits Vegetables</h5>
                        </div>
                        <div className="wrap-two">
                          <h2>One Must Eat To Live</h2>
                        </div>
                        <div className="wrap-three">
                          <h2>Not Live To Eat  40% off</h2>
                        </div>
                        <div className="wrap-four">
                          <Link to="/shop-left-sidebar" className="btn-theme">Shop Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide swiper-slide-next swiper-slide-duplicate-prev" data-swiper-slide-index={1} role="group" aria-label="2 / 2" style={{width: '1122px', transitionDuration: '0ms', opacity: 0, transform: 'translate3d(-2244px, 0px, 0px)'}}>
          <div className="home-slider-item">
            <div className="thumb-one bg-img" data-bg-img="assets/img/slider/s1-1.webp" style={{backgroundImage: 'url("assets/img/slider/s1-1.webp")'}} />
            <div className="slider-content-area slider-content-item2">
              <div className="container">
                <div className="row">
                  <div className="col-sm-9 offset-lg-3">
                    <div className="content">
                      <div className="inner-content animate-style1">
                        <div className="wrap-one">
                          <h5>Colorful Fresh Fruits Vegetables</h5>
                        </div>
                        <div className="wrap-two">
                          <h2>One Must Eat To Live</h2>
                        </div>
                        <div className="wrap-three">
                          <h2>Not Live To Eat 40% off</h2>
                        </div>
                        <div className="wrap-four">
                          <a href="shop.html" className="btn-theme">Shop Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index={0} role="group" aria-label="1 / 2" style={{width: '1122px', transitionDuration: '0ms', opacity: 0, transform: 'translate3d(-3366px, 0px, 0px)'}}>
          <div className="home-slider-item">
            <div className="thumb-one bg-img" data-bg-img="assets/img/slider/s1-2.webp" style={{backgroundImage: 'url("assets/img/slider/s1-2.webp")'}} />
            <div className="slider-content-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 offset-xl-2 offset-lg-1 text-center">
                    <div className="content">
                      <div className="inner-content animate-style2">
                        <div className="wrap-one">
                          <h5>Colorful Fresh Fruits Vegetables</h5>
                        </div>
                        <div className="wrap-two">
                          <h2>One Must Eat To Live</h2>
                        </div>
                        <div className="wrap-three">
                          <h2>Not Live To Eat  40% off</h2>
                        </div>
                        <div className="wrap-four">
                          <a href="shop.html" className="btn-theme">Shop Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></div>
      <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabIndex={0} role="button" aria-label="Go to slide 1" /><span className="swiper-pagination-bullet" tabIndex={0} role="button" aria-label="Go to slide 2" /></div>
      <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
  </div>
</section>



  )
}

export default Slider