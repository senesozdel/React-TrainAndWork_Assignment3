import React from 'react'

const OffCanvas = () => {
  return (
<aside className="off-canvas-area offcanvas offcanvas-start" data-bs-scroll="true" tabIndex={-1} id="offcanvasWithSideMenu">
  <div className="offcanvas-top">
    <div className="header-top-info">
      <div className="info-link">
        <a href="shop-compare.html"><i className="icon-layers" />  My Compare (0)</a>
      </div>
      <div className="info-link info-link-style2">
        <a href="login-register.html"><i className="icon-heart icons" />  Wishlist (0)</a>
      </div>
    </div>
  </div>
  <div className="sidemenu-top-inner">
    <div className="header-top-action-area">
      <div className="header-currency-dropdown">
        <button type="button" className="btn-currency dropdown-toggle" id="dropdownCurrency2" data-bs-toggle="dropdown" aria-expanded="false"><span>USD $</span></button>
        <ul className="dropdown-menu" aria-labelledby="dropdownCurrency2">
          <li className="dropdown-item active"><span>USD $</span></li>
          <li className="dropdown-item"><span>EUR €</span></li>
        </ul>
      </div>
      <div className="header-lang-dropdown">
        <button type="button" className="btn-lang dropdown-toggle" id="dropdownLang2" data-bs-toggle="dropdown" aria-expanded="false"><img src="assets/img/photos/4.jpg" alt="Image" width={16} height={11} /> <span>English</span></button>
        <ul className="dropdown-menu" aria-labelledby="dropdownLang2">
          <li className="dropdown-item active"><img src="assets/img/photos/4.jpg" alt="Image" width={16} height={11} /> <span>English</span></li>
          <li className="dropdown-item"><img src="assets/img/photos/2.jpg" alt="Image" width={16} height={11} /> <span>Français</span></li>
        </ul>
      </div>
    </div>
  </div>
  <div className="offcanvas-header">
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">Menu <i className="icon-close" /></button>
  </div>
  <div className="offcanvas-body">
    <div className="res-mobile-menu">
      <nav id="offcanvasNav" className="offcanvas-menu">
        <ul>
          <li><a href="javascript:void(0)">Home</a>
            <ul>
              <li><a href="index.html">Home One</a></li>
              <li><a href="index-2.html">Home Two</a></li>
              <li><a href="index-3.html">Home Three</a></li>
              <li><a href="index-4.html">Home Four</a></li>
            </ul>
          </li>
          <li className="offcanvas-nav-parent">
            <a className="offcanvas-nav-item" href="javascript:void(0)">Shop</a>
            <ul>
              <li>
                <a className="offcanvas-nav-item" href="javascript:void(0)">Shop Layouts</a>
                <ul>
                  <li><a href="shop-3-column.html">Shop 3 Column</a></li>
                  <li><a href="shop.html">Shop 4 Column</a></li>
                  <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                  <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                  <li><a href="shop.html">Shop No Sidebar</a></li>
                </ul>
              </li>
              <li>
                <a className="offcanvas-nav-item" href="javascript:void(0)">Shop Pages</a>
                <ul>
                  <li><a href="shop-cart.html">Cart page</a></li>
                  <li><a href="shop-checkout.html">Checkout</a></li>
                  <li><a href="my-account.html">My Account</a></li>
                  <li><a href="shop-wishlist.html">Wishlist</a></li>
                  <li><a href="shop-compare.html">Compare</a></li>
                </ul>
              </li>
              <li>
                <a className="offcanvas-nav-item" href="javascript:void(0)">Product Types</a>
                <ul>
                  <li><a href="shop-single-product.html">Product Details</a></li>
                  <li><a href="shop-single-product-variable.html">Product Variable</a></li>
                  <li><a href="shop-single-product-grouped.html">Product Grouped</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="javascript:void(0)">Pages</a>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="login-register.html">Login / Register</a></li>
              <li><a href="coming-soon.html">Coming soon</a></li>
              <li><a href="page-not-found.html">404</a></li>
            </ul>
          </li>
          <li><a href="javascript:void(0)">Blog</a>
            <ul>
              <li><a href="blog.html">Blog 3 Column</a></li>
              <li><a href="blog-4-column.html">Blog 4 Column</a></li>
              <li><a href="blog-left-sidebar.html">Blog Left Sidebar</a></li>
              <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
              <li><a href="blog.html">Blog No Sidebar</a></li>
              <li><a href="blog-details.html">Blog Details</a></li>
            </ul>
          </li>
          <li><a href="contact.html">Contact</a></li>
          <li className="offcanvas-nav-parent">
            <a className="offcanvas-nav-item" href="javascript:void(0)">Vegetables</a>
            <ul>
              <li>
                <a className="offcanvas-nav-item" href="javascript:void(0)">Laura Mercier</a>
                <ul>
                  <li><a href="shop.html">Bananas</a></li>
                  <li><a href="shop.html">Apples &amp; Pears</a></li>
                  <li><a href="shop.html">Berries &amp; Cherries</a></li>
                  <li><a href="shop.html">Oranges &amp; Citrus Fruit</a></li>
                  <li><a href="shop.html">Grapes</a></li>
                </ul>
              </li>
              <li>
                <a className="offcanvas-nav-item" href="javascript:void(0)">Nutrition</a>
                <ul>
                  <li><a href="shop.html">Potatoes</a></li>
                  <li><a href="shop.html">Sweet Potatoes</a></li>
                  <li><a href="shop.html">Onions &amp; Leeks</a></li>
                  <li><a href="shop.html">Root Vegetables</a></li>
                  <li><a href="shop.html">Broccoli &amp; Cauliflower</a></li>
                </ul>
              </li>
              <li>
                <a href="shop.html"><img src="assets/img/photos/vc-bammer.jpg" alt="Image" width={350} height={164} /></a>
              </li>
            </ul>
          </li>
          <li><a href="shop.html">Bed &amp; Bath</a></li>
          <li><a href="shop.html">Living Room Sets</a></li>
          <li><a href="shop.html">Console Tables</a></li>
          <li><a href="shop.html">End Tables</a></li>
          <li><a href="shop.html">TV Stands</a></li>
          <li><a href="shop.html">Bedroom</a></li>
          <li><a href="shop.html">Dining Tables</a></li>
          <li><a href="shop.html">Vegetables</a></li>
        </ul>
      </nav>
    </div>
  </div>
</aside>

  )
}

export default OffCanvas