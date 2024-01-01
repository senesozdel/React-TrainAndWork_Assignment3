import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../features/cart/shoppingcarSlice';

const ShoppingCart = () => {

  const dispatch = useDispatch()
  const { cart } = useSelector((store) => {
    return {
      cart: store.cart.items,
    }
  })

  const totalAmount = () => {
    let total = 0
    cart.forEach(element => {
      total += element.newPrice * element.quantity
    });
    return total
  }



  return (
    <section className="product-area cart-page-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-40 mb-md-20">
              <h5 className="title">Shopping Cart</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="cart-table-wrap">
              <div className="cart-table table-responsive">
                <table>
                  <thead>
                    <tr>
                      <th className="width-thumbnail" />
                      <th className="width-name">Product</th>
                      <th className="width-price"> Price</th>
                      <th className="width-quantity">Quantity</th>
                      <th className="width-subtotal">Subtotal</th>
                      <th className="width-remove" />
                    </tr>
                  </thead>
                  <tbody>

                    {cart && cart.map((item, index) => (

                      <tr key={index}>
                        <td className="product-thumbnail">
                          <Link to={`productdetail/${item.id}`}><img className="w-100" src={item.image} alt="Image" width={80} height={80} /></Link>
                        </td>
                        <td className="product-name">
                          <h5><Link to={`productdetail/${item.id}`}>{item.name}</Link></h5>
                        </td>
                        <td className="product-price"><span className="amount">${item.newPrice}</span></td>

                        <td className="plantmore-product-quantity">
                          <span onClick={() => dispatch(increaseQuantity(item.id))} style={{ cursor: "pointer", padding: "10px", margin: "5px" }}><i class="icon-arrow-up"></i></span>
                          <span>{item.quantity}</span>
                          <span onClick={() => dispatch(decreaseQuantity(item.id))} style={{ cursor: "pointer", padding: "10px", margin: "5px" }}><i class="icon-arrow-down"></i></span>
                        </td>

                        <td className="product-total"><span>${item.newPrice * item.quantity}</span></td>
                        <td className="product-remove"><button onClick={() => dispatch(removeFromCart(item.id))} ><i className="icon-trash" /></button></td>
                      </tr>

                    ))}

                    {/* Dönecek kısım */}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="cart-shiping-update-wrapper">
              <div className="cart-shiping-btn continure-btn">
                <a className="btn btn-link" href="shop.html"><i className="icon-arrow-left" /> Back To Shop</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
          </div>
        </div>
        <div className="row">

          <div className="col-md-12 col-lg-4">
            <div className="grand-total-wrap">
            <div className="grand-total-content">
                <h3>SubTotal
                <span className="total">${totalAmount()}</span>
                </h3>
                
              </div>
              <div className="grand-total-content">
                <h3>Shipping
                <span className="total">$7.00</span>
                </h3>
                
              </div>
              <div className="grand-total-content">
                <h3>Taxes
                <span className="total">$15.00</span>
                </h3>
              
              </div>
              <div className="grand-total-content">
                <h3>Total <span>${totalAmount()+22.00}</span></h3>
              </div>
              <div className="grand-total-btn">
                <Link to="/checkout" className="btn btn-link" >Proceed to checkout</Link>

              </div>
            </div>
          </div>





        </div>
      </div>
    </section>

  )
}

export default ShoppingCart