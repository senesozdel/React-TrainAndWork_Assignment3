import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorite, getFavorite } from '../../features/wishlist/wishlistSlice'
import { Link } from 'react-router-dom'
import { addToCart } from '../../features/cart/shoppingcarSlice'

const WishListComp = () => {


  const dispatch = useDispatch()
  useEffect(() => {
    currentUser &&
      dispatch(getFavorite(currentUser.id))
  }, [])


  const { data, currentUser } = useSelector((store) => {
    return {
      data: store.favorite.favoriteItems,
      currentUser: store.currentUser.currentUser,
    }
  })


  const addCart = (item) => {
    dispatch(addToCart(item))
  }

  const removeFavorite = async (product) => {
    if (currentUser) {
      await dispatch(addToFavorite({ ...product, "currentUser": currentUser.id }))
      await dispatch(getFavorite(currentUser.id))
    }
    else {
      alert("Lütfen Giriş Yapınız")
    }
  }



  return (
    <section className="product-area wishlist-page-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-40 mb-md-20">
              <h5 className="title">Wishlist</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <form action="#">
              <div className="wishlist-table-content">
                <div className="table-content table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th className="width-remove" />
                        <th className="width-thumbnail" />
                        <th className="width-name">Product</th>
                        <th className="width-price"> Unit price </th>
                        <th className="width-stock-status"> Stock status </th>
                        <th className="width-wishlist-cart" />
                      </tr>
                    </thead>

                    <tbody>

                      {/* {
                        data && data.map((item, index) => (
                          <tr key={index}>
                            <td className="plantmore-product-thumbnail">
                              <Link onClick={() => handleLinkScrollClick()} to={`/product-detail/${item.slug}`}>
                                <img style={{ width: "100px" }} src={item.image} alt="" />
                              </Link>
                            </td>
                            <td className="plantmore-product-name">
                              <Link onClick={() => handleLinkScrollClick()} to={`/product-detail/${item.slug}`}>{item.name}</Link>
                            </td>
                            <td className="plantmore-product-price">
                              <span className="amount">{item.newPrice}</span>
                            </td>
                            <td className="plantmore-product-add-cart">
                              <div onClick={() => addCart(item)} className='btn btn-black p-2'>add to cart</div>
                            </td>
                            <td onClick={() => removeFavorite(item)} className="plantmore-product-remove">
                              <div style={{ cursor: "pointer" }}>
                                <i className="fa fa-times" />
                              </div>
                            </td>
                          </tr>
                        ))
                      } */}
                      {
                         data && data.map((item, index) => (
                          <tr key={index}>
                          <td className="product-remove"  onClick={() => removeFavorite(item)} ><a href="#">×</a></td>
                          <td className="product-thumbnail">
                            <Link href="shop-single-product.html"><img src={item.image} alt="Image" width={125} height={125} /></Link>
                          </td>
                          <td className="product-name">
                            <h5><Link href="shop-single-product.html">{item.name}</Link></h5>
                          </td>
                          <td className="product-price"><span className="amount">${item.newPrice}</span></td>
                          <td className="stock-status">
                            <span><i className="icon-check" /> In Stock</span>
                          </td>
                          <td className="wishlist-cart"><Link onClick={() => addCart(item)}>Add to Cart</Link></td>
                        </tr> ))
                      }
                
                      {/* <tr>
                        <td className="product-remove"><a href="#">×</a></td>
                        <td className="product-thumbnail">
                          <a href="shop-single-product.html"><img src="assets/img/shop/12.jpg" alt="Image" width={125} height={125} /></a>
                        </td>
                        <td className="product-name">
                          <h5><a href="shop-single-product.html">Mug Today is a good day</a></h5>
                        </td>
                        <td className="product-price"><span className="amount">$120.00</span></td>
                        <td className="stock-status">
                          <span><i className="icon-check" /> In Stock</span>
                        </td>
                        <td className="wishlist-cart"><a href="shop-cart.html">Add to Cart</a></td>
                      </tr>
                      <tr className="no-border">
                        <td className="product-remove"><a href="#">×</a></td>
                        <td className="product-thumbnail">
                          <a href="shop-single-product.html"><img src="assets/img/shop/13.jpg" alt="Image" width={125} height={125} /></a>
                        </td>
                        <td className="product-name">
                          <h5><a href="shop-single-product.html">Mushroom noodles  with 2</a></h5>
                        </td>
                        <td className="product-price"><span className="amount">$120.00</span></td>
                        <td className="stock-status">
                          <span><i className="icon-check" /> In Stock</span>
                        </td>
                        <td className="wishlist-cart"><a href="shop-cart.html">Add to Cart</a></td>
                      </tr> */}
                    </tbody>

                  </table>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}

export default WishListComp