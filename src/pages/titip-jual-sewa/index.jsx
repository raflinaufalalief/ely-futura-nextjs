import { useState } from "react"

const PropertyForm = () => {
  const [judulIklan, setJudulIklan] = useState("")
  const [harga, setHarga] = useState("")
  const [jenisTransaksi, setJenisTransaksi] = useState("Jual")
  const [sertifikat, setSertifikat] = useState("")
  const [kamarMandi, setKamarMandi] = useState("")
  const [kamarTidur, setKamarTidur] = useState("")
  const [luasTanah, setLuasTanah] = useState("")
  const [luasBangunan, setLuasBangunan] = useState("")
  const [deskripsi, setDeskripsi] = useState("")
  const [kategori, setKategori] = useState("Rumah")
  const [product, setProduct] = useState("Primary")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !judulIklan ||
      !harga ||
      !sertifikat ||
      !kamarMandi ||
      !kamarTidur ||
      !luasTanah ||
      !luasBangunan ||
      !deskripsi ||
      !product
    ) {
      alert("Mohon lengkapi semua data sebelum mengirim.")
      return
    }

    const messageText =
      `Judul Iklan: ${judulIklan}\n` +
      `Jenis Transaksi: ${jenisTransaksi}\n` +
      `Harga: ${harga}\n` +
      `Sertifikat: ${sertifikat}\n` +
      `Kamar Mandi: ${kamarMandi}\n` +
      `Kamar Tidur: ${kamarTidur}\n` +
      `Luas Tanah: ${luasTanah}\n` +
      `Luas Bangunan: ${luasBangunan}\n` +
      `Kategori: ${kategori}\n` +
      `Product: ${product}\n` +
      `Deskripsi: ${deskripsi}\n`

    const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      "+6285648355728"
    )}&text=${encodeURIComponent(messageText)}`

    window.open(whatsappLink, "_blank")
  }

  return (
    <section className="bg-gray-100 ">
      <div className="px-4 pt-10 mx-auto containers">
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-3 text-3xl font-semibold text-center title ">
            Form Titip Jual/Sewa Properti
          </h1>
          <p className="mb-5 text-base text-center subtitle">
            Kami sangat antusias untuk memberikan bantuan dalam menjual atau
            menyewakan properti Anda. Mohon lengkapi informasi properti pada
            formulir di bawah ini.
          </p>
        </div>
        <div className="p-4 bg-white rounded shadow-md ">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1">Judul Iklan:</label>
              <input
                className="w-full px-3 py-2 border rounded"
                type="text"
                value={judulIklan}
                onChange={(e) => setJudulIklan(e.target.value)}
                required
              />
            </div>
            <div className="Sdesktop:grid Sdesktop:grid-cols-3 Sdesktop:gap-6">
              <div className="mb-4">
                <label className="block mb-1">Kategori:</label>
                <select
                  className="w-full px-3 py-2 border rounded"
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                  required
                >
                  <option value="Rumah">Rumah</option>
                  <option value="Apartemen">Apartemen</option>
                  <option value="Ruko">Ruko</option>
                  <option value="Kos">Kos</option>
                  <option value="Tanah">Tanah</option>
                  <option value="Office Space">Office Space</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-1">Kondisi:</label>
                <select
                  className="w-full px-3 py-2 border rounded"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  required
                >
                  <option value="Primary">Primary</option>
                  <option value="Secondary">Secondary</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-1">Status Pemasaran:</label>
                <select
                  className="w-full px-3 py-2 border rounded"
                  value={jenisTransaksi}
                  onChange={(e) => setJenisTransaksi(e.target.value)}
                  required
                >
                  <option value="Jual">DiJual</option>
                  <option value="Sewa">DiSewa</option>
                  <option value="Jual-Sewa">DiJual/Disewa</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-1">Harga:</label>
                <input
                  className="w-full px-3 py-2 border rounded"
                  type="text"
                  value={harga}
                  onChange={(e) => setHarga(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Sertifikat:</label>
                <input
                  className="w-full px-3 py-2 border rounded"
                  type="text"
                  value={sertifikat}
                  onChange={(e) => setSertifikat(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Kamar Mandi:</label>
                <input
                  className="w-full px-3 py-2 border rounded"
                  type="text"
                  value={kamarMandi}
                  onChange={(e) => setKamarMandi(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Kamar Tidur:</label>
                <input
                  className="w-full px-3 py-2 border rounded"
                  type="text"
                  value={kamarTidur}
                  onChange={(e) => setKamarTidur(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Luas Tanah:</label>
                <input
                  className="w-full px-3 py-2 border rounded"
                  type="text"
                  value={luasTanah}
                  onChange={(e) => setLuasTanah(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Luas Bangunan:</label>
                <input
                  className="w-full px-3 py-2 border rounded"
                  type="text"
                  value={luasBangunan}
                  onChange={(e) => setLuasBangunan(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block mb-1">Deskripsi:</label>
              <textarea
                className="w-full px-3 py-2 border rounded"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                rows="4"
                required
              />
            </div>

            <button
              className="px-4 py-2 text-white rounded bg-accent hover:bg-accent/70"
              type="submit"
            >
              Kirim ke WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default PropertyForm
