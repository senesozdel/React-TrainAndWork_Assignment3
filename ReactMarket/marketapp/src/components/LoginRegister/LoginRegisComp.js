import React from 'react'
import  { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../features/user/userSlice'
import { SignUp } from '../../features/user/userSlice'



const LoginRegisComp = () => {

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const dispatch = useDispatch()
  const { currentUser } = useSelector((store) => {
      return {
          currentUser: store.currentUser.currentUser,
      }
  })

  const Login = () => {
      const user = {
          "userName": userName,
          "password": password
      }
      dispatch(login(user))
      alert("Giriş Başarılı")
  }
  const Register = () => {
    const newUSer = {
        "userName": userName,
        "email": email,
        "password": password
    }
    dispatch(SignUp(newUSer))
    alert("Kayıt Başarılı")
}

  return (
    <section className="login-register-area">
      <div className="container">
        <div className="row">

      <div className="col-md-5 login-register-border">
      <div className="login-register-content">
        <div className="login-register-title mb-30">
          <h2>Login</h2>
          <p>Welcome back! Please enter your username and password to login. </p>
        </div>
        <div className="login-register-style login-register-pr">
          <form action="#" method="post">
            <div className="login-register-input">
            <input onChange={(e) => setUserName(e.target.value)} placeholder='User Name' />
            </div>
            <div className="login-register-input">
            <input  onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
              <div className="forgot">
                <a href="#">Forgot?</a>
              </div>
            </div>
            <div className="remember-me-btn">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <div className="btn-style-3">
              <button className="btn" onClick={() => Login()}  type="button">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
      <div className="col-md-7">
        <div className="login-register-content login-register-pl">
          <div className="login-register-title mb-30">
            <h2>Register</h2>
            <p>Create new account today to reap the benefits of a personalized shopping experience. </p>
          </div>
          <div className="login-register-style">
            <form action="#" method="post">
              <div className="login-register-input">
              <input  onChange={(e) => setUserName(e.target.value)} type="text" name="user-name" placeholder="User Name" />
              </div>
              <div className="login-register-input">
              <input  onChange={(e) => setEmail(e.target.value)} name="user-email" placeholder="Email" type="email" />
              </div>
              <div className="login-register-input">
              <input  onChange={(e) => setPassword(e.target.value)} type="password" name="user-password" placeholder="Password" />
              </div>
              <div className="login-register-paragraph">
                <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#">privacy policy.</a></p>
              </div>
              <div className="btn-style-3">

                <button className="btn"  onClick={() => Register()} type="button">Register</button>
              </div>
            </form>
            <div className="register-benefits">
              <h3>Sign up today and you will be able to :</h3>
              <p>The Loke Buyer Protection has you covered from click to delivery. Sign up <br />or sign in and you will be able to:</p>
              <ul>
                <li><i className="icon-check" /> Speed your way through checkout</li>
                <li><i className="icon-check" /> Track your orders easily</li>
                <li><i className="icon-check" /> Keep a record of all your purchases</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default LoginRegisComp