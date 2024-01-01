import React from 'react'

const Footer = () => {
  return (
<footer className="footer-area">
  <div className="footer-top">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-xs-12 col-md-6 mb-sm-30 mb-xs-20">
          <div className="newsletter-content">
            <h4>Subscribe Newsletter and Get Discount</h4>
          </div>
        </div>
        <div className="col-xs-12 col-md-6">
          <form className="newsletter-form" action="#">
            <input className="form-control" type="text" id="email" placeholder="Your email address" />
            <button className="btn btn-theme" type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-middle">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="widget-item">
            <h4 className="widget-title">Home Decor</h4>
            <h4 className="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-1">Home Decor</h4>
            <div id="dividerId-1" className="collapse widget-collapse-body">
              <nav className="widget-menu-wrap">
                <ul className="nav-menu nav">
                  <li><a href="shop.html">Wall Mirrors</a></li>
                  <li><a href="shop.html">Floor Mirrors</a></li>
                  <li><a href="shop.html">Lamps &amp; Lighting</a></li>
                  <li><a href="shop.html">Wall Decor</a></li>
                  <li><a href="shop.html">Rugs</a></li>
                  <li><a href="shop.html">Clocks</a></li>
                  <li><a href="shop.html">Candles</a></li>
                  <li><a href="shop.html">Candleholders</a></li>
                  <li><a href="shop.html">Runners</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="widget-item">
            <h4 className="widget-title">Furniture</h4>
            <h4 className="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-2">Furniture</h4>
            <div id="dividerId-2" className="collapse widget-collapse-body">
              <nav className="widget-menu-wrap">
                <ul className="nav-menu nav">
                  <li><a href="shop.html">Sofas &amp; Couches</a></li>
                  <li><a href="shop.html">Coffee Tables</a></li>
                  <li><a href="shop.html">Chairs</a></li>
                  <li><a href="shop.html">Ottomans</a></li>
                  <li><a href="shop.html">Living Room</a></li>
                  <li><a href="shop.html">Console Tables</a></li>
                  <li><a href="shop.html">End Tables</a></li>
                  <li><a href="shop.html">TV Stands</a></li>
                  <li><a href="shop.html">Bedroom Furniture</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="widget-item">
            <h4 className="widget-title">Kitchen &amp; Dining</h4>
            <h4 className="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-3">Kitchen &amp; Dining</h4>
            <div id="dividerId-3" className="collapse widget-collapse-body">
              <nav className="widget-menu-wrap">
                <ul className="nav-menu nav">
                  <li><a href="shop.html">Dinnerware Sets</a></li>
                  <li><a href="shop.html">Glassware &amp; Drinkware</a></li>
                  <li><a href="shop.html">Serveware</a></li>
                  <li><a href="shop.html">Flatware</a></li>
                  <li><a href="shop.html">Cups, Mugs</a></li>
                  <li><a href="shop.html">Plates</a></li>
                  <li><a href="shop.html">Bowls</a></li>
                  <li><a href="shop.html">Knife Sets</a></li>
                  <li><a href="shop.html">Cutting Boards</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="widget-item">
            <h4 className="widget-title">Bed &amp; Bath</h4>
            <h4 className="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-4">Bed &amp; Bath</h4>
            <div id="dividerId-4" className="collapse widget-collapse-body">
              <nav className="widget-menu-wrap">
                <ul className="nav-menu nav">
                  <li><a href="shop.html">Bed Frames</a></li>
                  <li><a href="shop.html">Headboards</a></li>
                  <li><a href="shop.html">Bedroom Armoires</a></li>
                  <li><a href="shop.html">Dressers</a></li>
                  <li><a href="shop.html">Nightstands</a></li>
                  <li><a href="shop.html">Organization</a></li>
                  <li><a href="shop.html">Baskets</a></li>
                  <li><a href="shop.html">Hangers</a></li>
                  <li><a href="shop.html">Shoe Organizers</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-main">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-4">
          <div className="widget-item">
            <h4 className="widget-title">Contact Info</h4>
            <h4 className="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-5">Contact Info Us</h4>
            <div id="dividerId-5" className="collapse widget-collapse-body">
              <div className="widget-contact-info">
                <div className="contact-info-item mb-20 mb-sm-10">
                  <div className="icon-box">
                    <i className="icon-home" />
                  </div>
                  <span>45 Grand Central New York NY 1017 United State USA</span>
                </div>
                <div className="contact-info-item">
                  <div className="icon-box">
                    <i className="icon-envelope" />
                  </div>
                  <span>Email: <a href="mailto://contact@domain.com">Contact@domain.com</a></span>
                </div>
                <div className="contact-info-item">
                  <div className="icon-box">
                    <i className="icon-call-in" />
                  </div>
                  <span>Phone: <a href="tel://+0123456789">01: +00 (9) 123 3456 789</a></span>
                </div>
                <div className="contact-info-item">
                  <div className="icon-box">
                    <i className="icon-printer" />
                  </div>
                  <span>Fax: +00 (9) 643 6543 898</span>
                </div>
                <div className="contact-info-item">
                  <div className="icon-box">
                    <i className="icon-calendar" />
                  </div>
                  <span>Mon-Sat 9:00pm - 5:00pm Sun:Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-2">
          <div className="widget-item">
            <h4 className="widget-title">Information</h4>
            <h4 className="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-6">Information</h4>
            <div id="dividerId-6" className="collapse widget-collapse-body">
              <nav className="widget-menu-wrap">
                <ul className="nav-menu nav">
                  <li><a href="index.html">Delivery</a></li>
                  <li><a href="index.html">Legal Notice</a></li>
                  <li><a href="about.html">About us</a></li>
                  <li><a href="index.html">Secure payment</a></li>
                  <li><a href="index.html">Sitemap</a></li>
                  <li><a href="index.html">Stores</a></li>
                  <li><a href="login-register.html">Login</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3">
          <div className="widget-item">
            <h4 className="widget-title">My Account</h4>
            <h4 className="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-7">My Account</h4>
            <div id="dividerId-7" className="collapse widget-collapse-body">
              <nav className="widget-menu-wrap">
                <ul className="nav-menu nav">
                  <li><a href="index.html">Terms And Conditions Of Use</a></li>
                  <li><a href="about.html">About us</a></li>
                  <li><a href="index.html">Secure payment</a></li>
                  <li><a href="index.html">Sitemap</a></li>
                  <li><a href="index.html">Stores</a></li>
                  <li><a href="login-register.html">Login</a></li>
                  <li><a href="login-register.html">My account</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3">
          <div className="widget-item">
            <h4 className="widget-title">Products</h4>
            <h4 className="widget-title widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#dividerId-8">Products</h4>
            <div id="dividerId-8" className="collapse widget-collapse-body">
              <nav className="widget-menu-wrap">
                <ul className="nav-menu nav">
                  <li><a href="index.html">Delivery</a></li>
                  <li><a href="index.html">Legal Notice</a></li>
                  <li><a href="index.html">Secure payment</a></li>
                  <li><a href="index.html">Prices drop</a></li>
                  <li><a href="index.html">New products</a></li>
                  <li><a href="index.html">Best sales</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container">
      <div className="footer-bottom-content">
        <div className="row">
          <div className="col-sm-5">
            <div className="widget-copyright">
              <p>© 2021 <span>FULO</span>. Made with <i className="icon-heart icon-heart-color" /> by <a target="_blank" href="../../../themeforest.net/user/hastech/portfolio.html">Hastech</a></p>
            </div>
            <ul className="widget-social-icons">
              <li><i className="icon-social-facebook" /></li>
              <li><i className="icon-social-twitter" /></li>
              <li><i className="icon-social-youtube" /></li>
              <li><i className="icon-social-instagram" /></li>
            </ul>
          </div>
          <div className="col-sm-2">
            <a className="footer-logo" href="index.html">
              <img src="assets/images/logo.png" alt="Logo" width={102} height={45} />
            </a>
          </div>
          <div className="col-sm-5">
            <div className="widget-payment-info">
              <span>Allow payment base on</span>
              <div className="thumb">
                <a href="shop.html"><img src="assets/images/photos/payment1.png" alt="Image" width={343} height={33} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  
  )
}

export default Footer