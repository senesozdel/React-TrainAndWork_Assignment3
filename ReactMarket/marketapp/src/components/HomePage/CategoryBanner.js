import React from 'react'

const CategoryBanner = () => {

let array = [0,1,2]

  return (
<div className="category-area product-category1-area">
  <div className="container">
    <div className="row category-items1 justify-content-center">
      
{  array.map((i)=>
  <div className="col-md-4 col-sm-6">
        <div className="category-item mb-sm-30">
          <div className="thumb effect-animate-flash">
            <a href="shop.html"><img src="assets/images/category/1.jpg" alt="Image" width={370} height={210} /></a>
          </div>
        </div>
      </div>

)  }


    </div>
  </div>
</div>

  )
}

export default CategoryBanner