import React from 'react'

const Services = () => {
  return (
    <section className="featured-area featured-default-area">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-6 mb-md-30">
        <div className="featured-item">
          <div className="icon">
            <img src="assets/images/icons/f1.png" alt="Image" width={44} height={44} />
          </div>
          <div className="featured-info">
            <h4 className="title">Free Shipping</h4>
            <p>On all orders over $75.00</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 mb-md-30">
        <div className="featured-item">
          <div className="icon">
            <img src="assets/images/icons/f2.png" alt="Image" width={44} height={44} />
          </div>
          <div className="featured-info">
            <h4 className="title">Easy 30 Days Returns</h4>
            <p>30 days money back</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6 mb-xs-30">
        <div className="featured-item">
          <div className="icon">
            <img src="assets/images/icons/f3.png" alt="Image" width={44} height={44} />
          </div>
          <div className="featured-info">
            <h4 className="title">100% Payment Secure</h4>
            <p>PayPal / MasterCard / Visa</p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-6">
        <div className="featured-item">
          <div className="icon">
            <img src="assets/images/icons/f4.png" alt="Image" width={44} height={44} />
          </div>
          <div className="featured-info">
            <h4 className="title">24/7 Support</h4>
            <p>We will be at your service</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Services