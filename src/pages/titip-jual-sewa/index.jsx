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
  const [jenisProperti, setJenisProperti] = useState("Primary")

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
      !deskripsi
    ) {
      alert("Mohon lengkapi semua data sebelum mengirim.")
      return
    }

    const messageText =
      `Judul Iklan: ${judulIklan}%0AJenis Transaksi: ${jenisTransaksi}%0A` +
      `Harga: ${harga}%0ASertifikat: ${sertifikat}%0AKamar Mandi: ${kamarMandi}%0A` +
      `Kamar Tidur: ${kamarTidur}%0ALuas Tanah: ${luasTanah}%0A` +
      `Luas Bangunan: ${luasBangunan}%0AJenis Properti: ${jenisProperti}%0A` +
      `Deskripsi: ${deskripsi}%0A`

    const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(
      "+6285648355728"
    )}&text=${encodeURIComponent(messageText)}`

    window.open(whatsappLink, "_blank")
  }

  return (
    <section>
      <div className="max-w-md p-4 mx-auto bg-gray-100 rounded-lg shadow-md">
        <h1 className="mb-4 text-xl font-semibold">Form Iklan Properti</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Judul Iklan:</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              value={judulIklan}
              onChange={(e) => setJudulIklan(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Jenis Transaksi:</label>
            <select
              className="w-full px-3 py-2 border rounded-md"
              value={jenisTransaksi}
              onChange={(e) => setJenisTransaksi(e.target.value)}
              required
            >
              <option value="Jual">Jual</option>
              <option value="Sewa">Sewa</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Jenis Properti:</label>
            <select
              className="w-full px-3 py-2 border rounded-md"
              value={jenisProperti}
              onChange={(e) => setJenisProperti(e.target.value)}
              required
            >
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Harga:</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Sertifikat:</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              value={sertifikat}
              onChange={(e) => setSertifikat(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Kamar Mandi:</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="number"
              value={kamarMandi}
              onChange={(e) => setKamarMandi(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Kamar Tidur:</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="number"
              value={kamarTidur}
              onChange={(e) => setKamarTidur(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Luas Tanah:</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              value={luasTanah}
              onChange={(e) => setLuasTanah(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Luas Bangunan:</label>
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              value={luasBangunan}
              onChange={(e) => setLuasBangunan(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Deskripsi:</label>
            <textarea
              className="w-full px-3 py-2 border rounded-md"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              rows="4"
              required
            />
          </div>
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            type="submit"
          >
            Kirim ke WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}

export default PropertyForm
