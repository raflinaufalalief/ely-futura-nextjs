import FilterProduct from "@/components/FilterProduct"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { BiBath, BiBed } from "react-icons/bi"
import ReactPaginate from "react-paginate"
import { IoAlertCircleOutline } from "react-icons/io5"
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from "react-icons/ri"
import Head from "next/head"
import { defaultSEO } from "@/components/Seo"

function Alllistings({ initialProducts }) {
  const seo = {
    ...defaultSEO,
    title: "All-listing | Koleksiproperty", // Judul khusus untuk halaman About
  }
  const [currentPage, setCurrentPage] = useState(0)

  const router = useRouter()
  const { query } = router

  const itemsPerPage = 12
  const filteredProducts = initialProducts.filter((product) => {
    return (
      (!query.location || product.kota[0]?.name === query.location) &&
      (!query.typeProperty || product.type[0]?.name === query.typeProperty) &&
      (!query.conditionProp ||
        product.typeproperty[0]?.name === query.conditionProp) &&
      (!query.PilihanMenu || product.market.includes(query.PilihanMenu))
    )
  })

  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage)

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected)
  }

  const offset = currentPage * itemsPerPage
  const paginatedProducts = filteredProducts.slice(
    offset,
    offset + itemsPerPage
  )

  const isFirstPage = currentPage === 0
  const isLastPage = currentPage === pageCount - 1
  const isDataAvailable = filteredProducts.length > 0

  return (
    <section>
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
      <div className="px-4 mx-auto containers">
        <div className="ListinganTerbaru">
          <div className="grid gap-5 tablet:grid-cols-2 Sdesktop:grid-cols-3">
            <div className="row-span-1">
              <FilterProduct />
            </div>
            {paginatedProducts.length === 0 ? (
              <div className="px-4 py-3 bg-yellow-100 border border-yellow-500 rounded h-fit">
                <div className="flex items-center">
                  <IoAlertCircleOutline className="mr-1 text-yellow-700" />
                  <p className="text-sm font-semibold text-yellow-700 ">
                    Pesan Informasi
                  </p>
                </div>
                <p className="mt-1 text-xs font-medium">
                  Mohon Maaf Property Belum Tersedia
                </p>
              </div>
            ) : (
              paginatedProducts.map((product) => (
                <div key={product.id}>
                  <div className="relative w-full mx-auto ">
                    <div className="p-4 bg-white border rounded shadow-lg">
                      <div className="relative flex justify-center overflow-hidden rounded h-52">
                        <div className="w-full transition-transform duration-500 ease-in-out transform hover:scale-110">
                          <div className="absolute inset-0 bg-black">
                            <img
                              src={product.thumbnail}
                              alt={product.title}
                              className="w-full h-52"
                            />
                          </div>
                        </div>
                        <span className="absolute top-0 left-0 z-10 inline-flex px-3 py-2 mt-3 ml-3 text-sm font-medium text-white bg-red-500 rounded select-none">
                          {product.market
                            .replace(/\[|\]|"/g, "")
                            .replace(/,/g, "/")}
                        </span>
                      </div>
                      <div className="mt-4">
                        <div className="flex mb-4 text-sm">
                          <div className="px-2 text-white rounded bg-accent">
                            {product.type.map((type) => (
                              <div key={type.id}>{type.name}</div>
                            ))}
                          </div>
                        </div>
                        <h2 className="mt-2 text-sm font-medium text-black/80 line-clamp-1">
                          {product.title}
                        </h2>
                        <div className="mt-2 text-sm font-medium text-black/80 line-clamp-1">
                          {product.kota.map((type) => (
                            <div key={type.id}>{type.name}</div>
                          ))}
                        </div>
                        <p className="mt-2 text-sm text-black/80 line-clamp-1">
                          {product.area}
                        </p>
                      </div>
                      <div className="flex mt-2 text-sm">
                        <div className="flex space-x-5 overflow-hidden">
                          <p className="flex items-center font-medium text-black/80">
                            <BiBed className="mr-1 text-sm" />{" "}
                            {product.kamar_tidur}
                          </p>
                          <p className="flex items-center font-medium text-black/80">
                            <BiBath className="mr-1 text-sm" />{" "}
                            {product.kamar_mandi}
                          </p>
                          <p className="flex items-center font-medium text-black/80">
                            LB : {product.luas_bangunan}
                          </p>
                          <p className="flex items-center font-medium text-black/80">
                            LT : {product.luas_keseluruhan}
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 mt-5">
                        <div className="flex items-center">
                          <p className="font-medium text-black/80 line-clamp-1">
                            Rp {product.harga}
                          </p>
                        </div>
                        <div className="flex items-end justify-end">
                          <Link
                            href={{
                              pathname: "/all-listings/[slug]",
                              query: { slug: product.slug },
                            }}
                          >
                            <div className="font-medium text-accent hover:underline">
                              Detail
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="flex justify-center pt-20 mobile:pt-10 Sdesktop:justify-end">
          <ReactPaginate
            previousLabel={
              <RiArrowLeftDoubleFill
                className={`text-2xl font-bold ${
                  isFirstPage || !isDataAvailable
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-primary"
                }`}
              />
            }
            nextLabel={
              <RiArrowRightDoubleFill
                className={`text-2xl font-bold  ${
                  isLastPage || !isDataAvailable
                    ? "text-gray-300 cursor-not-allowed"
                    : "text-primary"
                }`}
              />
            }
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageChange}
            containerClassName="flex items-center"
            pageClassName="px-2 py-1 border text-primary hover:bg-accent/70"
            activeClassName="bg-accent text-white border"
            previousClassName={`px-2 py-1 border rounded-l border-[#ECECEC] ${
              isFirstPage || !isDataAvailable
                ? "cursor-not-allowed"
                : "hover:bg-accent/70"
            }`}
            nextClassName={`px-2 py-1 border  rounded-r border-[#ECECEC] ${
              isLastPage || !isDataAvailable
                ? "cursor-not-allowed"
                : "hover:bg-accent/70"
            }`}
          />
        </div>
      </div>
    </section>
  )
}

export async function getStaticProps() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL)
    const apiData = await response.json()

    return {
      props: {
        initialProducts: apiData.products,
      },
      revalidate: 10,
    }
  } catch (error) {
    console.error("Error fetching data:", error)
    return {
      props: {
        initialProducts: [],
      },
    }
  }
}

export default Alllistings
