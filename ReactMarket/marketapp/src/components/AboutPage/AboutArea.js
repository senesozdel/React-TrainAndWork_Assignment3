import React from 'react'

const AboutArea = () => {
  return (
    <section className="about-area">
  <div className="container">
    <div className="row align-items-lg-center">
      <div className="col-lg-6 col-md-5">
        <div className="about-thumb effect-animate-flash">
          <img src="assets/images/photos/1.jpg" alt="Image" width={500} height={700} />
        </div>
      </div>
      <div className="col-lg-6 col-md-7">
        <div className="about-content">
          <h4 className="title-underline"><span>It is a long established fact that a reader will be distracted readable</span></h4>
          <h4 className="title">The standard chunk Lorem used since the is reproduced below for those interested.</h4>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,</p>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered fore alteration in some form, by injected humour</p>
          <a className="btn-theme" href="contact.html">Contact US</a>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default AboutArea