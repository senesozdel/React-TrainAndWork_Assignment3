import React from 'react'
import ShoppingCart from '../components/CartPage/ShoppingCart'
import PageTitleArea from '../components/Common/PageTitleArea'
import Footer from '../components/Layout/Footer'

const CartPage = () => {
  return (
    <div>
        <PageTitleArea />
        <ShoppingCart />
        <Footer />
    </div>
  )
}

export default CartPage