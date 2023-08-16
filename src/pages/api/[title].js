// pages/api/[title].js
export default async function handler(req, res) {
  const { title } = req.query

  try {
    const response = await fetch(
      `https://staging-api.punyaasset.com/api/produk-rafli`
    )
    const apiData = await response.json()

    const product = apiData.products.find(
      (product) => product.title.toLowerCase() === title.toLowerCase()
    )

    if (!product) {
      res.status(404).json({ error: "Produk tidak ditemukan" })
      return
    }

    res.status(200).json({ product })
  } catch (error) {
    console.error("Terjadi kesalahan saat mengambil data:", error)
    res.status(500).json({ error: "Kesalahan server internal" })
  }
}
