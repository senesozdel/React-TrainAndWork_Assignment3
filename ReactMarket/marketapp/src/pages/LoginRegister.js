import React from 'react'
import PageTitleArea from '../components/Common/PageTitleArea'
import LoginRegisComp from '../components/LoginRegister/LoginRegisComp'
import Footer from '../components/Layout/Footer'

const LoginRegister = () => {
  return (
    <div>
        <PageTitleArea />
        <LoginRegisComp />
        <Footer />
    </div>
  )
}

export default LoginRegister