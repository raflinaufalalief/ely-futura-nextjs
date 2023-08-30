import React from "react"
import VisiMisi from "./VisiMisi"
import Statistic from "../choose/Statistic"
import Test from "./Services"
import ContactUs from "../ContactUs"
import CTA from "../CTA"
import profile from "../../../public/assets/heo.jpg"
import Image from "next/image"

const AboutHero = () => {
  return (
    <>
      <section>
        <div className="relative">
          <div className="block py-16 text-center bg-white rounded shadow-lg mx-aut containers">
            <h1 className="pb-10 mt-2 text-4xl font-bold text-primary">
              Ely Futura
            </h1>
            <p className="px-2 tracking-tight subtitle">
              Ely Futura adalah perusahaan properti yang berfokus pada
              pengembangan dan pemasaran properti dengan berbagai jenis dan
              segmen. Memiliki portofolio yang mencakup berbagai macam proyek,
              mulai dari perumahan, apartemen, komersial, dan properti lainnya.
            </p>
            <Image
              className=" mobile:hidden absolute left-0 object-cover w-full  mt-0 -top-20 -z-10 h-[500px] brightness-[.4]"
              src={profile}
              alt=""
            />
          </div>
        </div>
      </section>
      <Statistic />
      <VisiMisi />
      <Test />
      <ContactUs />
      <CTA />
    </>
  )
}

export default AboutHero
