import CTA from "@/components/CTA"
import ContactUs from "@/components/ContactUs"
import Filter from "@/components/Filter"
import Hero from "@/components/Hero"
import OurHope from "@/components/OurHope"
import Product from "@/components/Product"
import ProductRuko from "@/components/ProductSerupa"
import WhyChoose from "@/components/choose/WhyChoose"
// import { Inter } from "next/font/google"

// const inter = Inter({ subsets: ["latin"] })

export default function Home() {
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
