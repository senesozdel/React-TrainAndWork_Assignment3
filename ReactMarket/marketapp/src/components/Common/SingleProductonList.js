import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../features/products/productsSlice'
import { addToCart } from '../../features/cart/shoppingcarSlice'
import { addToFavorite, getFavorite } from '../../features/wishlist/wishlistSlice'
import { Link } from 'react-router-dom'
import axios from 'axios'


const SingleProductonList = ({mappedSelectedfCategory}) => {


  const [categories, setCategories] = useState([])

  const { data, currentUser } = useSelector((store) => {
    return {
      data: store.products.data,
      currentUser: store.currentUser.currentUser,
    }
  })

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





  return (
    <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade show active" id="column-three" role="tabpanel" aria-labelledby="column-three-tab">
        <div className="row row-gutter-0">
          {
            mappedSelectedfCategory &&
            mappedSelectedfCategory.map((item, index) => (<div key={index} className="col-md-4 col-sm-6">
              <div className="product-item product-item-style4 product-animation">
                <div className="product-thumb">
                  <Link to={`/productdetail/${item.id}`}>
                    <img src={item.image} alt="Image" width={360} height={360} />
                    <span className="bg-thumb" data-bg-img="assets/img/shop/2.webp" style={{ backgroundImage: 'url("assets/img/shop/2.webp")' }} />
                  </Link>
                  <div className="ribbons">
                    <span className="ribbon ribbon-discount">-9%</span>
                    <span className="ribbon ribbon-new">new</span>
                  </div>
                </div>
                <div className="product-info">

                  <div className="prices">
                    <span className="price-old">${item.oldPrice}</span>
                    <span className="price">${item.newPrice}</span>
                  </div>
                  <h6 className="title"><Link to={`/productdetail/${item.id}`}>{item.name}</Link></h6>
                  <div className="rating">
                    <span className="rating-color icon-star" />
                    <span className="rating-color icon-star" />
                    <span className="rating-color icon-star" />
                    <span className="rating-color icon-star" />
                    <span className="rating-color icon-star" />
                  </div>
                </div>
              </div>
            </div>))
          }



        </div>
      </div>
      <div className="tab-pane fade" id="nav-list" role="tabpanel" aria-labelledby="nav-list-tab">
        <div className="row product-list-item2">

          {/* dbden gelen ürün bu nun içine girecek */}

          <div className="col-lg-12">
            <div className="product-item">
              <div className="row row-gutter-0">
                <div className="col-md-4">
                  <div className="product-thumb">
                    <Link >
                      <img src="assets/img/shop/1.jpg" alt="Image" width={360} height={360} />
                      <span className="bg-thumb" data-bg-img="assets/img/shop/2.webp" style={{ backgroundImage: 'url("assets/img/shop/2.webp")' }} />
                    </Link>
                    <div className="ribbons">
                      <span className="ribbon ribbon-discount">-9%</span>
                      <span className="ribbon ribbon-new">new</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="product-info">
                    <h4 className="title"><Link >Sante Granola with chocolate</Link></h4>
                    <div className="rating">
                      <span className="icon-star" />
                      <span className="icon-star" />
                      <span className="icon-star" />
                      <span className="icon-star" />
                      <span className="icon-star" />
                    </div>
                    <div className="prices">
                      <span className="price-old">$65.30</span>
                      <span className="price">$59.42</span>
                    </div>
                    <p>The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>

                    <span className="product-stock">Availability: 300 In Stock</span>
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

export default SingleProductonList