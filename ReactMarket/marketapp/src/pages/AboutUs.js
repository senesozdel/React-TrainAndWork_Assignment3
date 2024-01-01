import React from 'react'
import Services from '../components/Common/Services'
import AboutArea from '../components/AboutPage/AboutArea'
import Testimonial from '../components/AboutPage/Testimonial'
import TeamMembers from '../components/AboutPage/TeamMembers'
import BrandArea from '../components/HomePage/BrandArea'
import Footer from '../components/Layout/Footer'
import PageTitleArea from '../components/Common/PageTitleArea'


const AboutUs = () => {
  return (
    <div>
      <PageTitleArea />
      <Services />
      <AboutArea />
      <Testimonial />
      <TeamMembers />
      <BrandArea />
      <Footer />
    </div>
  )
}

export default AboutUs