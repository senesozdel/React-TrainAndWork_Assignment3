import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Logout } from '../../features/user/userSlice'
import axios from 'axios'

const AccountComp = () => {


  const [orders, setOrders] = useState([])
  const dispatch = useDispatch()
  const { currentUser } = useSelector((store) => {
    return {
      currentUser: store.currentUser.currentUser,
    }
  })


  const fetchOrder = async () => {
    let res = await axios.get("http://localhost:3000/orders");
    let response = res.data.filter(x => x.currentUser == currentUser.id);
    console.log(response.orders)
    console.log(response)

    setOrders(response)
  }

  useEffect(() => {
    fetchOrder()
  }, [currentUser])


  const totalPrice = (items) => {
    let total = 0
    items.forEach(item => {
      total += item.newPrice * item.quantity
    });
    return total
  }




  return (
    <section className="my-account-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center mb-40 mb-md-20">
              <h5 className="title">My account</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="myaccount-page-wrapper">
              <div className="row">
                <div className="col-lg-3 col-md-4">
                  <nav>
                    <div className="myaccount-tab-menu nav nav-tabs" id="nav-tab" role="tablist">
                      <button className="nav-link active" id="dashboad-tab" data-bs-toggle="tab" data-bs-target="#dashboad" type="button" role="tab" aria-controls="dashboad" aria-selected="true">Dashboard</button>
                      <button className="nav-link" id="orders-tab" data-bs-toggle="tab" data-bs-target="#orders" type="button" role="tab" aria-controls="orders" aria-selected="false" tabIndex={-1}> Orders</button>
                      <button className="nav-link" id="address-edit-tab" data-bs-toggle="tab" data-bs-target="#address-edit" type="button" role="tab" aria-controls="address-edit" aria-selected="false" tabIndex={-1}>address</button>
                      <button className="nav-link" onClick={() => dispatch(Logout())}  type="button" aria-selected="false" tabIndex={-1} role="tab">Logout</button>
                    </div>
                  </nav>
                </div>
                <div className="col-lg-9 col-md-8">
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade active show" id="dashboad" role="tabpanel" aria-labelledby="dashboad-tab">
                      <div className="myaccount-content">
                        <h3>Dashboard</h3>
                        <div className="welcome">
                          <p>Hello, <strong>{currentUser && currentUser.userName}</strong> (If Not <strong>{currentUser && currentUser.userName}!</strong><Link onClick={() => dispatch(Logout())} className="logout"> Logout</Link>)</p>
                        </div>
                        <p className="mb-0">From your account dashboard. you can easily check &amp; view your recent orders, manage your shipping and billing addresses and edit your password and account details.</p>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                      <div className="myaccount-content">
                        <h3>Orders</h3>
                        <div className="myaccount-table table-responsive text-center">
                          <table className="table table-bordered">
                            <thead className="thead-light">
                              <tr>
                                <th>Order</th>
                                <th>Date</th>
                                <th>Total</th>
                              </tr>
                            </thead>
                            <tbody>

                              {
                                orders && orders.map((item, index) => (
                                  <tr>
                                    <td>{item.id}</td>
                                    <td>{item.date}</td>
                                    <td>$ {totalPrice(item.orders)}</td>
                                  </tr>
                                ))
                              }



                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="address-edit" role="tabpanel" aria-labelledby="address-edit-tab">
                      <div className="myaccount-content">
                        <h3>Billing Address</h3>
                        <address>
                          <p><strong>{currentUser && currentUser.userName}</strong></p>
                          <p>1355 Market St, Suite 900 <br />
                            San Francisco, CA 94103</p>
                          <p>Mobile: (123) 456-7890</p>
                        </address>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default AccountComp