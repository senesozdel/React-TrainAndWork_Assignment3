import React from 'react'
import axios from 'axios'
import { useState ,useEffect} from 'react'
import { fetchProducts } from '../../features/products/productsSlice'
import { useSelector,useDispatch } from 'react-redux'

const CategoryArea = () => {


  const [categories, setCategories] = useState([])


  const fetchCategories = async () => {
      let res = await axios.get("http://localhost:3000/Categories");
      let categories = res.data;
      setCategories(categories)
  }

  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(fetchProducts())
      fetchCategories()
  }, [dispatch])



  return (
    <div className="category-area product-category2-area">
  <div className="container">
    <div className="row">
      <div className="col-md-6 m-auto">
        <div className="section-title text-center">
          <h2 className="title">Popular Categories</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 category-items2">
        <div className="category-slider-content swiper-nav-style">
          <div className="swiper-container category-slider-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
              <div className="category-item">
                {
                  categories != null && categories.map((i)=>
                
                  <div className="category-thumb">
                    <a href="shop.html">
                      <img src={i.image}  alt="Image" width={101} height={101} />
                    </a>
                  </div>
                
                  )
                }
 </div>
              </div>
                {/* Dönecek kisim swiper-slide */}
            </div>
          </div>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default CategoryArea