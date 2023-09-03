import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { hope } from "../data/data"
import Image from "next/image"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}
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
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            ssr={true}
            className=""
            containerClass="multi-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            swipeable
          >
            {hope.map((result, index) => {
              const { name, image, text } = result
              return (
                <div className="px-2">
                  <div
                    className="w-full px-4 mt-5 border rounded-md shadow-md pt-9 "
                    key={index}
                  >
                    <div className="mx-auto  mb-10 max-w-[500px] mobile:max-w-[300px]  ">
                      <div className="mb-8 overflow-hidden rounded-md">
                        <Image src={image} alt="..." />
                      </div>
                      <div>
                        <h3 className="mb-4 text-lg font-semibold text-primary ">
                          {name}
                        </h3>
                        <p className="text-base h-28 text-secondary">{text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </Carousel>
        </>
      </div>
    </section>
  )
}

export default OurHope
