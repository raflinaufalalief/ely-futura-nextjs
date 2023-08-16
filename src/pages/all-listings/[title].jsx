import ProfileCard from "@/components/ProfileCard"
import SpekLengkap from "@/components/SpekLengkap"
import SpekSingkat from "@/components/SpekSingkat"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ImageGallery from "react-image-gallery"
import "react-image-gallery/styles/css/image-gallery.css"
// import { BiBath, BiBed } from "react-icons/bi"

function ProductDetail({ initialProduct }) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [galleryImages, setGalleryImages] = useState([])
  const router = useRouter()
  const [product, setProduct] = useState(initialProduct)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://staging-api.punyaasset.com/api/produk-rafli`
        )
        const apiData = await response.json()

        const productWithTitle = apiData.products.find(
          (product) =>
            product.title.toLowerCase() === router.query.title.toLowerCase()
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
  }, [product.id, router.query.title])

  if (!product.id) {
    return <div>Loading...</div>
  }

  useEffect(() => {
    // Load gallery images as you did before
    const detailImages = initialProduct.detail_image.map((detail_image) => ({
      original: detail_image.detail_images,
      thumbnail: detail_image.detail_images,
    }))
    setGalleryImages(detailImages)
  }, [initialProduct])

  // Handle zoom change
  const handleZoomChange = (zoomed) => {
    setIsZoomed(zoomed)
  }

  return (
    <section className="mobile:py-16">
      <div className="mx-auto containers">
        <div className="Sdesktop:px-24">
          <ImageGallery
            items={galleryImages}
            showThumbnails={false}
            showNav={false}
            showIndex={true}
            renderPlayPauseButton={() => null}
            renderCustomControls={null}
            showBullets={true}
            onScreenChange={handleZoomChange} // Detect zoom changes
            renderItem={({ original }) => (
              <div className="rounded-md aspect-w-2 aspect-h-1">
                <img
                  src={original}
                  className={`w-full h-full Sdesktop:rounded-lg ${
                    isZoomed ? "object-contain" : "object-center"
                  }`}
                  alt=""
                />
              </div>
            )}
          />
        </div>
        <hr className="mt-10 mobile:hidden bg-primary/10 h-[2px]" />
        <div className="Sdesktop:flex Sdesktop:gap-x-7 Sdesktop:justify-between">
          <div className="">
            <div className="px-4 py-4">
              <div className="">
                <div className="bg-accent w-fit px-4 py-[.30rem] rounded-md">
                  <h1 className="text-xs font-medium text-white">
                    {product.type}
                  </h1>
                </div>
                <div className="mt-4">
                  <h2 className="font-semibold text-black/70">
                    {product.market.toUpperCase()}
                  </h2>
                  <h1 className="text-2xl font-bold text-black/80">
                    Rp {product.harga}
                  </h1>
                  <h3 className="mt-2 text-lg font-medium text-black/80">
                    {product.title}
                  </h3>
                  <h4 className="font-medium text-black/80">{product.area}</h4>
                </div>
                <hr className="my-3 rounded-full bg-black/10" />
                <div className="">
                  <h1 className="text-lg font-bold text-black/70">
                    Informasi Properti
                  </h1>
                  <h2 className="font-medium text-black/70">Spesifikasi</h2>
                </div>
              </div>
            </div>
            <SpekSingkat props={product} />

            <div className="px-4 py-2">
              <SpekLengkap props={product} />
            </div>
            <hr />
            <div className="py-4 px-4 z-[-1]">
              <h1 className="font-medium text-black/70">Deskripsi</h1>
              <h2 className="mt-2 text-sm font-medium text-black/80">
                {product.deskripsi}
              </h2>
            </div>
          </div>
          {/* Profile left */}
          <div className="flex flex-col mx-4">
            <div className="mt-10">
              <ProfileCard pesanwa={product.title} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps(context) {
  const { params } = context

  try {
    const response = await fetch(
      `https://staging-api.punyaasset.com/api/produk-rafli`
    )
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
