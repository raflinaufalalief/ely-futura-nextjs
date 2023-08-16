import React from "react"
import Hero from "../components/hero/Hero"
import CTA from "../components/CTA"
import ContactUs from "../components/ContactUs"
import OurHope from "../components/OurHope"
import WhyChoose from "../components/choose/WhyChoose"
import Product from "../components/Product"
import Filter from "../components/Filter"

const Home = () => {
  return (
    <>
      <Hero />
      <Filter />
      <WhyChoose />
      <OurHope />
      <Product />
      <CTA />
      <ContactUs />
    </>
  )
}

export default Home
