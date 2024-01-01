import React from 'react'
import { Link } from 'react-router-dom'

const PageTitleArea = () => {
  return (
<section className="page-title-area overlay bg-img" data-bg-img="assets/img/photos/bg-page1.webp" style={{backgroundImage: 'url("assets/img/photos/bg-page1.webp")'}}>
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-12 m-auto">
        <div className="page-title-content text-center">
            {/* title ve href değişecek */}
          <h2 className="title">Cart</h2>
          <div className="bread-crumbs"><Link to="/">Home</Link><span className="breadcrumb-sep"><i className="icon-arrow-right" /></span><span>Cart</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default PageTitleArea