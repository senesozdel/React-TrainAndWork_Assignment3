import React, { useEffect } from 'react'
import Footer from '../components/Layout/Footer'
import Slider from '../components/HomePage/Slider'
import CategoryBanner from '../components/HomePage/CategoryBanner'
import CategoryArea from '../components/HomePage/CategoryArea'
import FeaturedArea from '../components/HomePage/FeaturedArea'
import BrandArea from '../components/HomePage/BrandArea'
import ProductBanner from '../components/HomePage/Product/ProductBanner'
import ProductTab from '../components/HomePage/Product/ProductTab'
import Services from '../components/Common/Services'
import OffCanvas from '../components/Asides/OffCanvas'
import ProductQuickView from '../components/Asides/ProductQuickView'
import ScrollTop from '../components/Asides/ScrollTop'
import ProductWishlist from '../components/Asides/ProductWishlist'
import SearchBox from '../components/Asides/SearchBox'
import ProductCompare from '../components/Asides/ProductCompare'
import ProductAddCart from '../components/Asides/ProductAddCart'
import ProductArea from '../components/HomePage/Product/ProductArea'

const Home = () => {


  return (
    <div>
 
      <Slider />
      <CategoryBanner />
      <ProductBanner />
      <ProductTab />
      <CategoryArea />
      <ProductArea />
      <Services />
      <BrandArea />
      <Footer />
      <div>
      <OffCanvas />
      <ProductAddCart />
      <SearchBox />
      <ProductQuickView  />
      <ProductWishlist />
      <ScrollTop />
      <ProductCompare />
      </div>

    </div>
  )
}

export default Home