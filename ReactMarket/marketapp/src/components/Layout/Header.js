import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Logout } from '../../features/user/userSlice'
import { getFavorite } from '../../features/wishlist/wishlistSlice'
import { removeFromCart } from '../../features/cart/shoppingcarSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Header = () => {

const navigate = useNavigate()

  const [acik, setAcik] = useState(false)
  const [loginac, setLoginac] = useState(false)


  const { data, favoriteItems, cart, currentUser } = useSelector((store) => {
    return {
      data: store.products.data,
      favoriteItems: store.favorite.favoriteItems,
      cart: store.cart.items,
      currentUser: store.currentUser.currentUser,
    }
  })

  const[aranan,setAranan] = useState("Product 005")
  const[git,setGit] = useState(data && data.find((i)=>i.name == aranan))

  const dispatch = useDispatch()
  useEffect(() => {
    currentUser && dispatch(getFavorite(currentUser.id))
    !currentUser && dispatch(getFavorite(null))

  }, [dispatch, currentUser])

  const totalAmount = () => {
    let total = 0
    cart.forEach(element => {
      total += element.newPrice * element.quantity
    });
    return total
  }

  const Logoutbtn = () => {
    dispatch(getFavorite(null))
    dispatch(Logout())
  }



  const ayar = () => {

    acik === true ? setAcik(false) : setAcik(true)

  }
  const loginayar = () => {

    loginac === true ? setLoginac(false) : setLoginac(true)

  }
console.log(git)
  return (
    <header className="header-wrapper">
      <div className="header-top">
        <div className="header-resmobile d-block">
          <div className="header-top-inner d-block d-lg-none">
            <div className="header-top-info">
              <a href="shop.html">Free Shipping for all orders of <span>$200</span></a>
            </div>
            <div className="header-top-action-area">
              <div className="info-link info-link-style2">
                <a href="login-register.html"><i className="icon-envelope" /> Newsletter</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-none d-lg-block">
          <div className="row">
            <div className="col-12">
              <div className="header-top-inner">
                <div className="header-top-info">
                  <a href="shop.html">Free Shipping for all orders of <span>$200</span></a>
                </div>
                <div className="header-top-action-area">
                  <div className="header-currency-dropdown">
                    <button type="button" className="btn-currency dropdown-toggle" id="dropdownCurrency" data-bs-toggle="dropdown" aria-expanded="false"><span>USD $</span></button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownCurrency">
                      <li className="dropdown-item active"><span>USD $</span></li>
                      <li className="dropdown-item"><span>EUR €</span></li>
                    </ul>
                  </div>
                  <div className="header-lang-dropdown">
                    <button type="button" className="btn-lang dropdown-toggle" id="dropdownLang" data-bs-toggle="dropdown" aria-expanded="false"><img src="assets/images/photos/4.jpg" alt="Image" width={16} height={11} /> <span>English</span></button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownLang">
                      <li className="dropdown-item active"><img src="assets/images/photos/4.jpg" alt="Image" width={16} height={11} /> <span>English</span></li>
                      <li className="dropdown-item"><img src="assets/images/photos/2.jpg" alt="Image" width={16} height={11} /> <span>Français</span></li>
                    </ul>
                  </div>
                  <div className="info-link">
                    <a href="shop-compare.html"><i className="icon-layers" /> My Compare (3)</a>
                  </div>
                  <div className="info-link info-link-style2">
                    <a href="login-register.html"><i className="icon-envelope" /> Newsletter</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-middle">
        <div className="header-resmobile d-block d-lg-none">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4 col-sm-4 col-3">
                <div className="header-action-area btn-action-menu">
                  <button className="btn-menu d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithSideMenu" aria-controls="offcanvasWithSideMenu">
                    <i className="icon-menu" />
                  </button>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-6">
                <div className="header-logo-area">
                  <a href="index.html">
                    <img className="logo-main" src="assets/images/logo.png" alt="Logo" width={102} height={45} />
                    <img className="logo-light" src="assets/images/logo.png" alt="Logo" width={102} height={45} />
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-3">
                <div className="header-middle-action-area">
                  <div className="header-action-dropdown-acc header-action-dropdown-toggle">
                    <span className="current-item"><i className="icon-user-following icons" /></span>
                    <ul className="info-dropdown info-dropdown-toggle">
                      <li><a href="my-account.html">My Account</a></li>
                      <li><Link to="/checkout">Checkout</Link></li>
                      <li><button onClick={() => Logoutbtn()}>Sign Out</button></li>
                    </ul>
                  </div>
                  <div className="header-action-cart header-minicart">
                    <a className="btn-cart cart-icon" href="shop-cart.html">
                      <span className="cart-count">2</span>
                      <i className="icon-handbag icons" />
                    </a>
                    <div className="header-minicart-content">
                      <div className="minicart-inner">
                        <div className="minicart-list">

                          {
                            cart && cart.map((item, index) => (
                              <li key={index} className="cart-item">
                                <div className="cart-image">
                                  <Link to={`product-detail/${item.slug}`}><img alt="" src={`/assets/images/${item.image}`} /></Link>
                                </div>
                                <div className="cart-title">
                                  <Link to={`product-detail/${item.slug}`}>
                                    <h4>{item.name}</h4>
                                  </Link>
                                  <div className="quanti-price-wrap">
                                    <span className="quantity">{item.quantity}</span>
                                    <div className="price-box">
                                      <span className="new-price">${item.newPrice}</span>
                                    </div>
                                  </div>
                                  <div style={{ cursor: "pointer" }} onClick={() => dispatch(removeFromCart(item.id))} className="remove_from_cart"><i className="icon_close" /></div>
                                </div>
                              </li>
                            ))
                          }
                        </div>
                        <div className="minicart-total">
                          <div className="minicart-price">
                            <span>Subtotal</span>
                            <span className="total">$85.00</span>
                          </div>
                          <div className="minicart-price">
                            <span>Shipping</span>
                            <span className="total">$7.00</span>
                          </div>
                          <div className="minicart-price">
                            <span>Taxes</span>
                            <span className="total">$15.00</span>
                          </div>
                          <div className="minicart-price minicart-subtotal">
                            <span>Total</span>
                            <span className="total">22.00</span>
                          </div>
                        </div>
                        <div className="minicart-buttons">
                          <Link className="cart-button" to="/checkout">Checkout</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="header-search-box">
                  <div>
                    <div className="form-input-group">
                      <input onChange={((e)=>setAranan(e.target.value))}  type="text" className="search-field rounded-2" placeholder="Search product (at least 3 word) ..." />
                      <button onClick={()=>setGit(data && data.find((i)=>i.name == aranan))}  className="btn-src">
                        <i className="icon-magnifier" />
                      </button>
                   
                    </div>
                    { git && <Link to={`/productdetail/${git.id}`}>Go to searched product</Link>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-none d-lg-block">
          <div className="row align-items-center">
            <div className="col-3 col-xl-3 col-lg-2">
              <div className="header-logo-area">
                <a href="index.html">
                  <img className="logo-main" src="assets/images/logo.png" alt="Logo" width={102} height={45} />
                  <img className="logo-light" src="assets/images/logo.png" alt="Logo" width={102} height={45} />
                </a>
              </div>
            </div>
            <div className="col-9 col-xl-9 col-lg-10">
              <div className="header-middle-right">
                <div className="header-action-phone">
                  <div className="icon">
                    <img src="assets/images/icons/phone.png" alt="Icon" width={41} height={43} />
                  </div>
                  <div className="phone">
                    <span>need help?</span> <a href="tel:+00(9)3456789">+00 (9) 3456 789</a>
                  </div>
                </div>
                <div className="header-search-box">
                  <div >
                  <div className="form-input-group">
                      <input onChange={((e)=>setAranan(e.target.value))}  type="text" className="search-field rounded-2" placeholder="Search product (at least 3 word) ..." />
                      <button onClick={()=>setGit(data && data.find((i)=>i.name == aranan))}  className="btn-src">
                        <i className="icon-magnifier" />
                      </button>
               
                    </div>
                    { git &&  <Link to={`/productdetail/${git.id}`}>Go to searched product</Link>}
                  </div>
                </div>
                <div className="header-middle-action-area">
                  <div className="header-action-wishlist">
                    <Link to="wishlist">
                      {favoriteItems && favoriteItems.length > 0 && <span className="cart-total">{favoriteItems.length}</span>}
                      <i className="icon-heart" />
                    </Link>
                  </div>
                  <div className="header-action-cart header-minicart">

                    <Link to="cart">
                      {cart && cart.length > 0 && <span className="cart-total">{cart.length}</span>
                      } <i className="icon-handbag" />
                    </Link>
                    {
                      cart && cart.length == 0 && <span className="cart-amount">$0</span>

                    }
                    {
                      cart && cart.length > 0 && <span className="cart-amount">${totalAmount()}</span>

                    }

                    <div className="header-minicart-content">
                      <div className="minicart-inner">
                        <div className="minicart-list">

                          {
                            cart && cart.map((item, index) => <div key={index} className="minicart-item">
                              <a className="thumb" href="shop-single-product.html">
                                <img src={item.image} alt="Image-HasTech" width={125} height={125} />
                                <span>{item.name}</span>
                                <span className="quantity-number">{item.quantity}x</span>
                              </a>
                              <p className="quantity-price">${item.newPrice}</p>
                              <button onClick={() => dispatch(removeFromCart(item.id))} className="minicart-remove" type="button">×</button>
                            </div>


                            )
                          }

                        </div>
                        <div className="minicart-total">
                          <div className="minicart-price">
                            <span>Subtotal</span>
                            <span className="total">$ {totalAmount()}</span>
                          </div>
                          {
                            cart && cart.length == 0 ? <div className="minicart-price">
                              <span>Shipping</span>
                              <span className="total">$0.00</span>
                            </div> :
                              <div className="minicart-price">
                                <span>Shipping</span>
                                <span className="total">$7.00</span>
                              </div>
                          }
                          {
                            cart && cart.length == 0 ? <div className="minicart-price">
                              <span>Taxes</span>
                              <span className="total">$0.00</span>
                            </div> :
                              <div className="minicart-price">
                                <span>Taxes</span>
                                <span className="total">$15.00</span>
                              </div>

                          }
                          {
                            cart && cart.length == 0 ? <div className="minicart-price minicart-subtotal">
                              <span>Total</span>
                              <span className="total">${totalAmount() + 22.00}</span>
                            </div> :
                              <div className="minicart-price minicart-subtotal">
                                <span>Total</span>
                                <span className="total">${totalAmount() + 22.00}</span>
                              </div>

                          }
                        </div>
                        <div className="minicart-buttons">
                          <Link className="cart-button" to="/checkout">Checkout</Link>
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
      <div className="header-area header-default sticky-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-sm-5 col-md-4 col-lg-3">
              <div className="vertical-menu menu-style-two">
                <button onClick={() => ayar()} className="menu-btn"><span>All Department</span></button>
                {
                  acik && <ul className="vmenu-content vmenu-content-none" >
                    <li className="menu-item">
                      <a className="menu-item-title" href="shop.html">Home Decor<i className="icon-arrow-right" /></a>

                      {/* sub menu */}
                    </li>
                    <li className="menu-item">
                      <a className="menu-item-title" href="shop.html">Fresh Food<i className="icon-arrow-right" /></a>
  
                    </li>
                    <li className="menu-item">
                      <a className="menu-item-title" href="shop.html">Kitchen &amp; Dinning<i className="icon-arrow-right" /></a>
      
                    </li>

                    <li className="menu-item"><a className="menu-item-title" href="shop.html">More Categories</a></li>
                  </ul>
                }

                {/* menu content */}
              </div>
            </div>
            <div className="col-xl-7 col-lg-8 d-none d-lg-block">
              <div className="header-navigation-area">
                <ul className="main-menu nav position-relative">
                  <li className="active"><Link to="/">Home</Link>
                  </li>
                  <li className="has-submenu position-static"><a href="#/"><span>Shop</span></a>
                    <ul className="submenu-nav submenu-nav-mega submenu-nav-banner">
                      <li className="mega-menu-item"><Link to='/shop-left-sidebar' className="mega-title"><span>Shop Layouts</span></Link>
                                              <ul>
                          <li><Link to="/shop-left-sidebar">Shop page</Link></li>
                        </ul>
                      </li>
                      <li className="mega-menu-item"><a href="#/" className="mega-title"><span>Shop Pages</span></a>
                        <ul>
                          <li><Link to="/cartpage">Cart page</Link></li>
                          <li><Link to="/checkout">Checkout</Link></li>
                          <li><Link to="/myaccount">My Account</Link></li>
                          <li><Link to="/wishlist">Wishlist</Link></li>
                          <li><a href="shop-compare.html">Compare</a></li>
                        </ul>
                      </li>
                      <li className="mega-menu-item"><a href="#/" className="mega-title"><span>Product Types</span></a>
                        <ul>
                          <li><Link to="/productdetail">Product Details</Link></li>

                        </ul>
                      </li>
                      <li className="megamenu-banner-item"><a href="shop.html" className="megamenu-banner" data-bg-img="assets/images/photos/megamenu-banner.webp" /></li>
                    </ul>
                  </li>
                  <li className="has-submenu"><a href="index.html">Pages</a>
                    <ul className="submenu-nav">
                      <li><Link to="/login-register">Login / Register</Link></li>
                      <li><a href="coming-soon.html">Coming soon</a></li>
                      <li><a href="page-not-found.html">404</a></li>
                    </ul>
                  </li>
                  <li ><Link to="/blogs">Blog</Link>
                  </li>
                  <li><Link to="/about-us">About Us</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>

            <div className="col-6 col-xl-2 col-lg-1  d-lg-block">
              <div onClick={() => loginayar()} className="header-action-dropdown-acc header-action-dropdown-toggle">
                <span className="current-item">Login</span>
                {
                  loginac &&
                  <ul className="info-dropdown info-dropdown-toggle">
                    <li><Link to='/myaccount'>My Account</Link></li>
                    <li><Link to='/checkout'>Checkout</Link></li>
                    <li><a href="login-register.html">Sign Out</a></li>
                  </ul>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header