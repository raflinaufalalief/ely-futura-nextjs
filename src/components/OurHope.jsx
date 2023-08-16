import React from "react"
import { hope } from "../data/data"
import { BsArrowRight } from "react-icons/bs"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/autoplay"
import Link from "next/link"
import Image from "next/image"

const OurHope = () => {
  return (
    <section className="bg-gradient-to-br from-[#e4f9ff] via-[#ffffff] to-[#e5f3f6]">
      <div className="px-4 mx-auto containers ">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <h1 className="title">
              Apa yang Anda <br />
              Harapkan dari Kami ?
            </h1>
            <div className="pl-3 mt-5 border-l-4 border-accent">
              <p className="subtitle">
                Sebagai pelanggan atau pengguna layanan kami, ada beberapa hal
                yang dapat Anda harapkan dari kami:
              </p>
            </div>
          </div>
        </div>
        {/* end section */}
        <>
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1170: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {hope.map((result, index) => {
              const { name, image, text } = result
              return (
                <SwiperSlide
                  className="w-full px-4 mt-5 border rounded-md shadow-md pt-9"
                  key={index}
                >
                  <div className="mx-auto mb-10 max-w-[500px] mobile:max-w-[300px]  ">
                    <div className="mb-8 overflow-hidden rounded-md">
                      <Image src={image} alt="image" />
                    </div>
                    <div>
                      <h3 className="mb-4 text-xl font-semibold text-primary mobile:text-xl Sdesktop:text-xl">
                        {name}
                      </h3>
                      <p className="mobile:text-base Sdesktop:text-base Sdesktop:h-36 mobile:h-32 text-secondary">
                        {text}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </>
      </div>
    </section>
  )
}

export default OurHope
