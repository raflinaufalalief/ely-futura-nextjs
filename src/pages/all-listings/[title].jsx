import ProfileCard from "@/components/ProfileCard"
import SpekLengkap from "@/components/SpekLengkap"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { SlideshowLightbox } from "lightbox.js-react"
import "lightbox.js-react/dist/index.css"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import ProductSerupa from "@/components/ProductSerupa"
import ProductSekitar from "@/components/ProductSekitar"
import Link from "next/link"
import { AiFillHome } from "react-icons/ai"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}

function ProductDetail({ initialProduct }) {
  const router = useRouter()
  const [product, setProduct] = useState(initialProduct)
  const queryType = router.query.type
  const queryKota = router.query.kota

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${process.env.NEXT_URL}/api/produk-rafli`)
        const apiData = await response.json()

        const productWithTitle = apiData.products.find(
          (product) =>
            product.title.toLowerCase() === router.query.title.toLowerCase() &&
            product.type.some((type) => type.name === queryType) &&
            product.kota.some((kota) => kota.name === queryKota)
        )

        if (productWithTitle) {
          setProduct(productWithTitle)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    if (!product.id) {
      fetchData()
    }
  }, [product.id, router.query.title, queryType, queryKota])

  if (!product.id) {
    return <div>Loading...</div>
  }
  //
  const lightboxImages = product.detail_image.map((type) => type.detail_images)

  return (
    <section className="mobile:py-16 tablet:py-16">
      <div className="mx-auto containers">
        {/* <!-- Breadcrumb --> */}
        <div className="Sdesktop:px-4">
          <nav className="flex mt-4 mb-4 text-primary">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-primary hover:text-accent "
                >
                  <AiFillHome className="mr-1 text-sm" />
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <MdOutlineKeyboardArrowRight />
                  <Link
                    href={"/all-listings"}
                    className="ml-1 text-sm font-medium text-primary hover:text-accent md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    All-listings
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <MdOutlineKeyboardArrowRight />
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                    {product.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="flex flex-col Sdesktop:flex-row ">
          <div className="Sdesktop:w-[65%] Sdesktop:px-4 w-full ">
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlay
              autoPlaySpeed={2000}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite={true}
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
              showDots={true}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {lightboxImages.map((imageUrl, index) => (
                <div
                  key={index}
                  className="w-full pb-[75%] tablet:pb-[55%] rounded  relative  overflow-hidden"
                >
                  <img
                    className="absolute inset-0 object-cover w-full h-full"
                    src={imageUrl}
                    alt={`Image ${index}`}
                  />
                </div>
              ))}
            </Carousel>
          </div>

          <div className=" mobile:flex-col-reverse mobile:flex tablet:flex-col-reverse tablet:flex">
            <div className="px-4">
              <div className="text-base font-medium text-black/70">
                <div className="flex mt-10 mb-4 text-xs gap-x-4 Sdesktop:mt-0">
                  <h4 className="px-2 py-2 font-medium text-white rounded bg-bg ">
                    {product.type.map((city) => (
                      <div key={city.id}>{city.name}</div>
                    ))}
                  </h4>
                  <h4 className="px-1 py-2 font-medium text-black bg-transparent rounded shadow">
                    {product.typeproperty.map((city) => (
                      <div key={city.id}>{city.name}</div>
                    ))}
                  </h4>
                </div>
                <h1>{product.market.replace(/\[|\]|"/g, "")}</h1>
                <p>{product.title}</p>
                <p>Rp {product.harga}</p>
                <h4>
                  {product.kota.map((city) => (
                    <div key={city.id}>{city.name}</div>
                  ))}
                </h4>
                <div className="mt-4 text-lg">
                  <h1 className="font-semibold text-black/70">Deskripsi</h1>
                </div>
                <h2
                  className="mb-5 text-sm font-medium text-black/50 "
                  dangerouslySetInnerHTML={{ __html: product.deskripsi }}
                >
                  {/* {product.deskripsi.replace(/<[^>]+>|&nbsp;/g, " ")} */}
                </h2>
              </div>
            </div>
            {/* mobile */}
            <div className="block Sdesktop:hidden ">
              <div className="flex justify-between px-4 pt-4 ">
                <div className="pt-3 Sdesktop:px-0 Sdesktop:pt-0">
                  <SlideshowLightbox className="flex h-20 overflow-auto tablet:h-28 gap-x-3">
                    {lightboxImages.map((imageUrl, index) => (
                      <img
                        key={index}
                        className="w-full rounded aspect-1"
                        src={imageUrl}
                        alt={`Image ${index}`}
                      />
                    ))}
                  </SlideshowLightbox>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* desktop */}
        <div className="hidden Sdesktop:block ">
          <div className="flex items-center justify-between px-4 pt-5 ">
            <div className="w-[64%] ">
              <SlideshowLightbox className="flex overflow-hidden aspect-7 gap-x-3">
                {lightboxImages.map((imageUrl, index) => (
                  <img
                    key={index}
                    className="w-full rounded aspect-1"
                    src={imageUrl}
                    alt={`Image ${index}`}
                  />
                ))}
              </SlideshowLightbox>
            </div>
          </div>
        </div>
        <hr className="my-5 mobile:hidden bg-primary/10 h-[2px]" />
        <div className="px-4 ">
          <div className=" Sdesktop:justify-between Sdesktop:flex tablet:justify-between tablet:flex">
            <SpekLengkap props={product} />

            <div className="sticky flex items-center justify-end mt-5 Sdesktop:mt-0">
              <ProfileCard pesanwa={product.title} />
            </div>
          </div>
        </div>
      </div>
      <ProductSerupa />
      <ProductSekitar />
    </section>
  )
}

export async function getServerSideProps(context) {
  const { params } = context

  try {
    const response = await fetch(`${process.env.NEXT_URL}/api/produk-rafli`)
    const apiData = await response.json()

    const initialProduct = apiData.products.find(
      (product) => product.title.toLowerCase() === params.title.toLowerCase()
    )

    return {
      props: {
        initialProduct,
      },
    }
  } catch (error) {
    console.error("Error fetching data:", error)
    return {
      props: {
        initialProduct: {},
      },
    }
  }
}

export default ProductDetail
