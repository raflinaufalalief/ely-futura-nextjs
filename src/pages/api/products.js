export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://staging-api.punyaasset.com/api/produk-rafli"
    )
    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" })
  }
}
