import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearCart } from '../../../features/cart/shoppingcarSlice'
import uuid from 'react-uuid'
import axios from 'axios'

const CheckComp = () => {


  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [address1, setAddress1] = useState("")
  const [address2, setAddress2] = useState("")
  const [town, setTown] = useState("")
  const [state, setState] = useState("")
  const [postCode, setPostCode] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const dispatch = useDispatch()

  const CheckoutSubmit = async () => {
    const date = new Date()
    if (currentUser) {
      const newBill = {
        "currentUser": currentUser.id,
        "id": uuid().slice(0, 13),
        "name": name,
        "surname": surname,
        "address1": address1,
        "address2": address2,
        "town": town,
        "state": state,
        "postCode": postCode,
        "phone": phone,
        "email": email,
        "orders": cart,
        "date": `${date.getDate()}.${date.getMonth() + 1}.${date.getUTCFullYear()}`
      }

      await axios.post('http://localhost:3000/orders', newBill)
        .catch(error => {
          console.error('İstek hatası:', error);
        });
      setName("")
      setSurname("")
      setAddress1("")
      setAddress2("")
      setEmail("")
      setPhone("")
      setPostCode("")
      setState("")
      setTown("")
      dispatch(clearCart())


    }
    else {
      alert("Please Signin")
    }


  }
  const { cart, currentUser } = useSelector((store) => {
    return {
      cart: store.cart.items,
      currentUser: store.currentUser.currentUser,
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
    <section className="product-area shop-checkout-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-40 mb-md-20">
              <h5 className="title">Checkout</h5>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7">
            <div className="billing-info-wrap">
              <h3>Billing Details</h3>
              <div className="row">
                <div className="col-12">
                  <div className="billing-info mb-20">
                    <label>First name <abbr className="required" title="required">*</abbr></label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="billing-info mb-20">
                    <label>Last name <abbr className="required" title="required">*</abbr></label>
                    <input value={surname} onChange={(e) => setSurname(e.target.value)} type="text" name="Last name" />                  </div>
                </div>
                <div className="col-12">
                  <div className="billing-select mb-20">
                    <label>Country / Region <abbr className="required" title="required">*</abbr></label>
                    <div className="select-style">
                      <select className="select-active" value={state} onChange={(e) => setState(e.target.value)}>
                        <option value={"Bangladesh"}>Bangladesh</option>
                        <option value={"Azerbaijan"}>Azerbaijan</option>
                        <option value={"Barbados"}>Barbados</option>
                        <option value={"Turkiye"}>Turkiye</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="billing-info mb-20">
                    <label>Street Address <abbr className="required" title="required">*</abbr></label>
                    <input value={address1} onChange={(e) => setAddress1(e.target.value)}
                      name="address" className="billing-address" placeholder="House number and street name" type="text" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="billing-info mb-20">
                    <label>Town / City <abbr className="required" title="required">*</abbr></label>
                    <input
                      value={town} onChange={(e) => setTown(e.target.value)}
                      type="text" name="address" />
                  </div>
                </div>

                <div className="col-12">
                  <div className="billing-info mb-20">
                    <label>Phone <abbr className="required" title="required">*</abbr></label>
                    <input
                      value={phone} onChange={(e) => setPhone(e.target.value)}
                      type="text" name="address" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="billing-info mb-20">
                    <label>Email Address <abbr className="required" title="required">*</abbr></label>
                    <input
                      value={email} onChange={(e) => setEmail(e.target.value)}
                      type="text" name="Email address " />
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div className="col-lg-5">
            <div className="your-order-area">
              <h3>Your order</h3>
              <div className="your-order-wrap">
                <div className="your-order-info-wrap">
                  <div className="your-order-title">
                    <h4>Product <span>Subtotal</span></h4>
                  </div>
                  <div className="your-order-product">
                    <ul>


                      {
                        cart && cart.map((item, index) => (
                          <li key={index} className="cart_item">
                            <div className="product-name">
                              {item.name}{" "}
                              <strong className="product-quantity"> × {item.quantity}</strong>
                            </div>
                            <div className="product-total">
                              <span className="amount">$ {item.newPrice }</span>
                            </div>
                          </li>
                        ))
                      }


{/* 
                      <li>Brother Hoodies in Grey × 4 <span>$140.00 </span></li>



                      <li>Enjoy The Rest T-Shirt × 1 <span>$39.59 </span></li> */}
                    </ul>
                  </div>
                  <div className="your-order-subtotal">
                    <h3>Taxes and Fees <span>$22</span></h3>
                  </div>
                  <div className="your-order-total">
                    <h3>Total <span>${totalAmount()+22.00} </span></h3>
                  </div>
                </div>
                <div className="payment-method">
                  <div className="pay-top sin-payment">
                    <input id="payment_method_1" className="input-radio" type="radio" defaultValue="cheque" defaultChecked="checked" name="payment_method" />
                    <label htmlFor="payment_method_1"> Direct Bank Transfer </label>
                    <div className="payment-box payment_method_bacs" style={{ display: 'block' }}>
                      <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                    </div>
                  </div>
                  <div className="pay-top sin-payment">
                    <input id="payment-method-2" className="input-radio" type="radio" defaultValue="cheque" name="payment_method" />
                    <label htmlFor="payment-method-2">Check payments</label>
                    <div className="payment-box payment_method_bacs">
                      <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                    </div>
                  </div>
                  <div className="pay-top sin-payment">
                    <input id="payment-method-3" className="input-radio" type="radio" defaultValue="cheque" name="payment_method" />
                    <label htmlFor="payment-method-3">Cash on delivery </label>
                    <div className="payment-box payment_method_bacs">
                      <p>Pay with cash upon delivery. </p>
                    </div>
                  </div>
                  <div className="pay-top sin-payment sin-payment-3">
                    <input id="payment-method-4" className="input-radio" type="radio" defaultValue="cheque" name="payment_method" />
                    <label htmlFor="payment-method-4">PayPal <img alt="" src="assets/images/icons/payment-3.png" width={35} height={32} /><a href="#">What is PayPal?</a></label>
                    <div className="payment-box payment_method_bacs">
                      <p>Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                    </div>
                  </div>
                </div>
                <div className="payment-condition mb-1">
                  <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#">privacy policy</a>.</p>
                </div>
              </div>
              <div className="place-order">
                <input value={"Place Order"} type='submit'  onClick={() => CheckoutSubmit()} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default CheckComp