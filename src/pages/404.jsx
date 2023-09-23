import Image from "next/image"
import Link from "next/link"

const Custom404 = () => {
  return (
    <div className="py-28">
      <div className="px-4 mx-auto containers">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="w-[400px]">
            <Image
              src="/assets/error.jpg"
              width={1000}
              height={1000}
              alt="CustomError"
            />
          </div>
          <p className="mb-4 text-xl text-center Sdesktop:text-left">
            Maaf, halaman yang Anda cari tidak ada.
          </p>
          <Link href="/">
            <div className="text-blue-500 underline">Kembali ke Beranda</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Custom404
