import React from 'react'

const ContactComp = () => {
  return (
<section className="contact-area">
  <div className="container">
    <div className="row">
      <div className=" col-lg-7">
        <div className="contact-form">
          <form className="contact-form-wrapper form-style" id="contact-form" action="http://whizthemes.com/mail-php/raju/arden/mail.php" method="post">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2 className="title">Contact us for any questions</h2>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input className="form-control" type="text" name="con_name" placeholder="Name*" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input className="form-control" type="email" name="con_email" placeholder="Email*" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <input className="form-control" type="text" name="con_phone" placeholder="Phone Number" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-0">
                  <textarea className="form-control" name="con_message" placeholder="How can we help?" defaultValue={""} />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-0">
                  <button className="btn btn-theme" type="submit">Send Message</button>
                </div>
              </div>
            </div>
          </form>
          <div className="form-message" />
        </div>
      </div>
      <div className=" col-lg-5">
        <div className="contact-info-wrapper">
          <div className="section-title">
            <h2 className="title">Get info</h2>
          </div>
          <div className="contact-info-content">
            <div className="align-top">
              <div className="contact-info-item">
                <div className="icon">
                  <i className="icon-location-pin icons" />
                </div>
                <div className="content">
                  <h4>FULO Store 1</h4>
                  <p>PO Box 16122 Collins Street West Victoria 8007 Australia</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="icon">
                  <span><i className="icon-location-pin icons" /></span>
                </div>
                <div className="content">
                  <h4>FULO Store 2</h4>
                  <p>8134 Budd Rd Terre Haute, In 3548</p>
                </div>
              </div>
            </div>
            <div className="align-bottom">
              <div className="contact-info-item info-item2">
                <div className="icon">
                  <span><i className="icon-envelope icons" /></span>
                </div>
                <div className="content">
                  <a href="mailto://demo@example.com">demo@example.com</a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="icon">
                  <span><i className="icon-phone icons" /></span>                      
                </div>
                <div className="content">
                  <a href="tel://+354-354-4861">+354-354-4861</a>
                </div>
              </div>
              <div className="contact-info-item social-icons-item mb-0 pb-0">
                <div className="content">
                  <div className="social-widget">
                    <a href="#/"><i className="icon-social-facebook icons" /></a>
                    <a href="#/"><i className="icon-social-pinterest icons" /></a>
                    <a href="#/"><i className="icon-social-twitter icons" /></a>
                    <a href="#/"><i className="icon-social-instagram icons" /></a>
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

export default ContactComp