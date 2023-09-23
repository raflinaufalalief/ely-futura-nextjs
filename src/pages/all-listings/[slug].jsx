import Link from "next/link"
import { AiFillHome } from "react-icons/ai"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { PhotoProvider, PhotoView } from "react-photo-view"
import "react-photo-view/dist/react-photo-view.css"
import { defaultSEO } from "@/components/Seo"
import Head from "next/head"
import ProfileCard from "@/components/ProfileCard"
import SpekLengkap from "@/components/SpekLengkap"
// import { useRouter } from "next/router"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
}

function ProductDetail({ product, seo }) {
  // const router = useRouter()

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <section className="mobile:py-16 tablet:py-16">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="author" content={seo.author} />
        <meta name="keywords" content={seo.keywords} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.url} />
      </Head>
      <div className="mx-auto containers">
        <div className="pl-1 Sdesktop:px-4">
          <nav className="flex mt-4 mb-4 text-primary">
            <ol className="inline-flex items-center">
              <li className="flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-xs font-medium Sdesktop:text-sm text-primary hover:text-accent "
                >
                  <AiFillHome className="mr-1 text-xs Sdesktop:text-sm" />
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <MdOutlineKeyboardArrowRight />
                  <Link
                    href={"/all-listings"}
                    className="ml-1 text-xs font-medium Sdesktop:text-sm text-primary hover:text-accent "
                  >
                    All-listings
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <MdOutlineKeyboardArrowRight />
                  <span className="ml-1 text-xs font-medium text-gray-500 Sdesktop:text-sm ">
                    {product.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="flex flex-col Sdesktop:flex-row ">
          <div className="Sdesktop:w-[65%] Sdesktop:px-4 w-full ">
            <div>
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                removeArrowOnDeviceType={["tablet", "mobile"]}
                draggable
                focusOnSelect={false}
                infinite={true}
                itemClass=""
                ssr
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
                {product.detail_image.map((imageUrl, index) => (
                  <div
                    key={index}
                    className="w-full pb-[75%] tablet:pb-[55%] rounded relative overflow-hidden"
                  >
                    <img
                      className="absolute inset-0 object-cover w-full h-full"
                      src={imageUrl.detail_images}
                      alt={`Image ${index}`}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
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
                ></h2>
              </div>
            </div>
            {/* mobile */}
            <div className="block Sdesktop:hidden">
              <PhotoProvider>
                <div className="flex justify-between">
                  <div className="pt-3 ">
                    <div className="flex overflow-auto aspect-4 gap-x-3">
                      {product.detail_image.map((imageUrl, index) => (
                        <PhotoView key={index} src={imageUrl.detail_images}>
                          <img
                            key={index}
                            className="w-full rounded aspect-1"
                            src={imageUrl.detail_images}
                            alt={`Image ${index}`}
                          />
                        </PhotoView>
                      ))}
                    </div>
                  </div>
                </div>
              </PhotoProvider>
            </div>
          </div>
        </div>
        {/* desktop */}
        <div className="hidden Sdesktop:block">
          <PhotoProvider>
            <div className="flex items-center justify-between px-4 cursor-pointer ">
              <div className="w-[64%] pt-3  ">
                <div className="flex overflow-hidden aspect-7 gap-x-3">
                  {product.detail_image.map((imageUrl, index) => (
                    <PhotoView key={index} src={imageUrl.detail_images}>
                      <img
                        key={index}
                        className="w-full rounded aspect-1"
                        src={imageUrl.detail_images}
                        alt={`Image ${index}`}
                      />
                    </PhotoView>
                  ))}
                </div>
              </div>
            </div>
          </PhotoProvider>
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
    </section>
  )
}

export async function getStaticPaths() {
  // Fetch your data and generate all possible paths
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL)
  const apiData = await response.json()
  const paths = apiData.products.map((product) => ({
    params: { slug: product.slug },
  }))

  return {
    paths,
    fallback: false, // Set to true if you want to handle missing paths
  }
}

export async function getStaticProps({ params }) {
  try {
    const slug = params.slug

    // Fetch your data using a client-side fetch or any other method
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL)
    const apiData = await response.json()

    const productWithSlug = apiData.products.find(
      (product) => product.slug === slug
    )

    let seo = defaultSEO

    if (productWithSlug) {
      seo = {
        ...defaultSEO,
        title: `${productWithSlug.title} | Koleksiproperty`,
      }
    }

    return {
      props: {
        product: productWithSlug || null,
        seo,
      },
    }
  } catch (error) {
    console.error("Error fetching data:", error)

    return {
      props: {
        product: null,
        seo: defaultSEO,
      },
    }
  }
}

export default ProductDetail
