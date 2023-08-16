import Link from "next/link"
import { useEffect, useState } from "react"
import { BiBath, BiBed } from "react-icons/bi"

function AllProduct({ initialProducts }) {
  const [products, setProducts] = useState(initialProducts)

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/products") // Use the API route you created
        const apiData = await response.json()
        setProducts(apiData.products)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    if (initialProducts.length === 0) {
      fetchData()
    }
  }, [])

  return (
    <section className="px-4">
      <div className="grid grid-cols-1 gap-10 mx-auto tablet:grid-cols-2 Sdesktop:grid-cols-3 containers ">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg">
            <img
              src={product.thumbnail}
              alt="..."
              className="object-cover w-full h-48 rounded-t-lg"
            />
            <div className="p-4">
              <div className="flex space-x-2">
                <p className="text-sm text-gray-600">{product.type}</p>
                <p className="text-sm text-gray-600">{product.type_property}</p>
              </div>
              <h2 className="text-lg font-semibold">{product.title}</h2>

              <ul className="mt-2 space-y-1">
                <li>{product.area}</li>
                <div className="flex space-x-2">
                  <li className="flex items-center gap-x-2">
                    <BiBed />
                    {product.kamar_tidur}
                  </li>
                  <li className="flex items-center gap-x-2">
                    <BiBath /> {product.kamar_mandi}
                  </li>
                  <li>LB: {product.luas_bangunan}</li>
                  <li>LT: {product.luas_keseluruhan}</li>
                </div>
                {/* Add more details */}
              </ul>
            </div>
            <div className="flex justify-between px-4 py-2 bg-gray-100 rounded-b-lg">
              <p className="text-base font-medium text-primary">
                {product.harga}
              </p>
              <Link
                href={`/all-listings/${encodeURIComponent(product.title)}`}
                className="font-medium text-primary hover:underline"
              >
                Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export async function getServerSideProps() {
  try {
    const response = await fetch("/api/products") // Use the API route you created
    const apiData = await response.json()

    return {
      props: {
        initialProducts: apiData.products,
      },
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

export default AllProduct
