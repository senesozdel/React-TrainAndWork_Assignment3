import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../features/products/productsSlice'
import { addToCart } from '../../features/cart/shoppingcarSlice'
import { addToFavorite, getFavorite } from '../../features/wishlist/wishlistSlice'
import { Link } from 'react-router-dom'
import axios from 'axios'
import SingleProductonList from '../Common/SingleProductonList'


const ProductLayout = () => {

  const [categories, setCategories] = useState([])
  const [selectedCategory,setSelectedCategory] = useState(1)
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);


  const { data, currentUser } = useSelector((store) => {
      return {
          data: store.products.data,
          currentUser: store.currentUser.currentUser,
      }
  })
  const[mappedSelectedfCategory,setmappedSelectedfCategory] = useState(data &&  data.filter((i)=>i.categoryId == selectedCategory))
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


  const addCart = (product) => {
      dispatch(addToCart(product))
  }

  const addfavorite = async (product) => {
      if (currentUser) {
          await dispatch(addToFavorite({ ...product, "currentUser": currentUser.id }))
          await dispatch(getFavorite(currentUser.id))
      }
      else {
          alert("Lütfen Giriş Yapınız")
      }
  }

  const filterProduct = (id) => {
    dispatch(fetchProducts(id))
}

const filterbyPrice = ()=>{

  if(isChecked1){
   setmappedSelectedfCategory(data && data.filter ((i)=>parseInt(i.newPrice) > 30.00 && parseInt(i.newPrice) <= 40.00)) 
  }
  if(isChecked2){
    setmappedSelectedfCategory(data && data.filter ((i)=>parseInt(i.newPrice) > 40.00 && parseInt(i.newPrice) <= 50.00)) 
  }
  if(isChecked3){
    setmappedSelectedfCategory(data && data.filter ((i)=>parseInt(i.newPrice) > 50.00 && parseInt(i.newPrice) <= 60.00)) 
  }
  if(isChecked4){
    setmappedSelectedfCategory(data && data.filter ((i)=>parseInt(i.newPrice) > 60.00 && parseInt(i.newPrice) <= 70.00)) 
  }
}
console.log(mappedSelectedfCategory)


  return (
    <div className="product-area product-grid-area">
  <div className="container">
    <div className="row">
      <div className="col-lg-9 order-0 order-lg-1">
        <div className="shop-toolbar-wrap">
          <div className="row">
            <div className="col-sm-6">
              <div className="product-sorting-menu product-sorting">
                <div className="row">
                  <div className="col-5 col-sm-3">
                    <span className="current">Sort By:</span>
                  </div>
                  <div className="col-7 col-sm-6">
                    <select  value={selectedCategory} onClick={()=>setmappedSelectedfCategory(data &&  data.filter((i)=>i.categoryId == selectedCategory))} onChange={(e)=>setSelectedCategory(e.target.value)}>
                      <option value={3}>Featured Products</option>
                      <option value={1}>Best sellers</option>
                      <option value={2}>New Items</option>

                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="product-view-mode">
                <div className="product-showing-status">
                  <p className="count-result">There are {mappedSelectedfCategory && mappedSelectedfCategory.length} products.</p>
                </div>
                <nav>
                  <div className="nav nav-tabs active" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="column-three-tab" data-bs-toggle="tab" data-bs-target="#column-three" type="button" role="tab" aria-controls="column-three" aria-selected="true"><i className="icon-grid icons" /></button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
    {
      mappedSelectedfCategory  &&    <SingleProductonList mappedSelectedfCategory={mappedSelectedfCategory} />
    }
  

        {/* Dbden gelen productlar listelenecek. SingleProductonList */} 
        <div className="row">
          <div className="col-lg-12">
            <div className="pagination-area">
              <nav>
                <ul className="page-numbers">
                  <li>
                    <a className="page-number active" href="shop.html">1</a>
                  </li>
                  <li>
                    <a className="page-number" href="shop.html">2</a>
                  </li>
                  <li>
                    <a className="page-number next" href="shop.html">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 order-1 order-lg-0">
        <div className="sidebar-area shop-sidebar-area">

          <div className="widget">
            <h3 className="widget-title">Categories</h3>
            <div className="widget-body">
              <div className="widget-categorie">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked1" />
                  <label className="form-check-label" htmlFor="flexCheckChecked1">Fresh Fruit (13)</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked2" />
                  <label className="form-check-label" htmlFor="flexCheckChecked2">Fresh Salad (12)</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckChecked3" />
                  <label className="form-check-label" htmlFor="flexCheckChecked3">Fresh Vegetables (12)</label>
                </div>
              </div>
            </div>
          </div>
          <div className="widget">
            <h3 className="widget-title">Price</h3>
            <div className="widget-body">
              <div className="widget-categorie widget-size">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox"  onChange={()=>setIsChecked1(!isChecked1)}    checked={isChecked1}  defaultValue id="flexCheckChecked4" />
                  <label className="form-check-label" htmlFor="flexCheckChecked4">30.00$-40.00$ (4)</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox"   onChange={()=>setIsChecked2(!isChecked2)}     checked={isChecked2}  defaultValue id="flexCheckChecked5" />
                  <label className="form-check-label" htmlFor="flexCheckChecked5">40.00$-50.00$  (7)</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" onChange={()=>setIsChecked3(!isChecked3)}     checked={isChecked3}  defaultValue id="flexCheckChecked6" />
                  <label className="form-check-label" htmlFor="flexCheckChecked6">50.00$-60.00$  (0)</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox"  onChange={()=>setIsChecked4(!isChecked4)}      checked={isChecked4}  defaultValue id="flexCheckChecked7" />
                  <label className="form-check-label" htmlFor="flexCheckChecked7">60.00$-70.00$  (1)</label>
                </div>
                <div className="form-check">
                  <button onClick={()=>filterbyPrice()}>Filter</button>
                </div>
              </div>
            </div>
          </div>



          <div className="widget mb-0">
            <div className="widget-body pt-10">
              <div className="widget-content">
                <div className="thumb effect-animate-zoom">
                  <a href="shop.html"><img src="assets/images/category/27.jpg" alt="Image" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ProductLayout