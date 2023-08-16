import { useState } from "react"
import { IoIosArrowDropdownCircle } from "react-icons/io"

const SpekLengkap = ({ props }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="space-y-2">
      <button
        className="flex items-center justify-between w-full py-4 text-sm font-medium border-t-2 border-black/20 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-black/70">Spesifikasi Lengkap</span>
        <IoIosArrowDropdownCircle
          className={`w-5 h-5 ${isOpen ? "transform rotate-180" : ""}`}
        />
      </button>
      <div
        className={`transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-vit" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex justify-between border-black/20">
          <h1 className="py-3 text-sm font-medium text-black/70">
            Tipe Properti
          </h1>
          <h2 className="py-3 text-sm font-medium text-black/60">
            {props.type ? props.type : "-"}
          </h2>
        </div>
        <div className="flex justify-between border-t-2 border-black/20">
          <h1 className="py-3 text-sm font-medium text-black/70">
            Kamar Tidur
          </h1>
          <h2 className="py-3 text-sm font-medium text-black/60">
            {props.kamar_tidur}
          </h2>
        </div>
        <div className="flex justify-between border-t-2 border-black/20">
          <h1 className="py-3 text-sm font-medium text-black/70">
            Kamar Mandi
          </h1>
          <h2 className="py-3 text-sm font-medium text-black/60">
            {props.kamar_mandi}
          </h2>
        </div>
        <div className="flex justify-between border-t-2 border-black/20">
          <h1 className="py-3 text-sm font-medium text-black/70">
            Luas Bangunan
          </h1>
          <h2 className="py-3 text-sm font-medium text-black/60">
            {props.luas_bangunan}
          </h2>
        </div>

        <div className="flex justify-between border-t-2 border-black/20">
          <h1 className="py-3 text-sm font-medium text-black/70">Luas Tanah</h1>
          <h2 className="py-3 text-sm font-medium text-black/60">
            {props.luas_keseluruhan ? props.luas_keseluruhan : "-"}
          </h2>
        </div>

        <div className="flex justify-between border-t-2 border-black/20">
          <h1 className="py-3 text-sm font-medium text-black/70">Sertifikat</h1>
          <h2 className="py-3 text-sm font-medium text-black/60">
            {props.sertifikat}
          </h2>
        </div>
        <div className="flex justify-between border-t-2 border-black/20">
          <h1 className="py-3 text-sm font-medium text-black/70">Listrik</h1>
          <h2 className="py-3 text-sm font-medium text-black/60">
            {props.listrik}
          </h2>
        </div>

        <div className="flex justify-between border-t-2 border-black/20">
          <h1 className="py-3 text-sm font-medium text-black/70">Lantai</h1>
          <h2 className="py-3 text-sm font-medium text-black/60">
            {props.lantai}
          </h2>
        </div>
        <div className="flex justify-between border-t-2 border-black/20">
          <h1 className="py-3 text-sm font-medium text-black/70">
            Pemandangan
          </h1>
          <h2 className="py-3 text-sm font-medium text-black/60">
            {props.pemandangan}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default SpekLengkap
