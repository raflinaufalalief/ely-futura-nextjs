// pages/404.js atau pages/404.tsx
import Image from "next/image"
import Link from "next/link"
import img from "../../public/assets/404.jpg"

export default function Custom404() {
  return (
    <div className="px-4 mx-auto containers">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="mb-2 text-4xl font-bold">
          <Image src={img} width={500} height={300} alt="404" />
        </h1>
        <p className="mb-4 text-xl text-center Sdesktop:text-left">
          Maaf, halaman yang Anda cari tidak ada.
        </p>
        <Link href="/">
          <div className="text-blue-500 underline">Kembali ke Beranda</div>
        </Link>
      </div>
    </div>
  )
}
