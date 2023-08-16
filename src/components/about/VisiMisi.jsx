import React from "react"
import visi from "../../../public/assets/visii.jpg"
import misi from "../../../public/assets/misii.jpg"
import Image from "next/image"

const VisiMisi = () => {
  return (
    <>
      <section>
        <div className="px-4 mx-auto containers ">
          <div className="mx-auto text-center containers ">
            <h2 className="mt-2 text-3xl capitalize title">
              Misi dan Visi kami
            </h2>
            <hr className="h-1 mx-auto mt-4 border-none w-36 bg-accent" />
          </div>

          <div className="grid grid-cols-1 gap-20 mt-10 text-left mobile:px-4 mobile:mx-auto mobile:max-w-sm Sdesktop:mt-20 Sdesktop:max-w-full">
            <div className="flex flex-col items-center justify-center Sdesktop:flex-row">
              <Image
                className="w-[400px] border rounded-md shadow-lg  object-contain Sdesktop:order-2 Sdesktop:object-left"
                src={visi}
                alt=""
              />
              <div className="mx-auto Sdesktop:mr-10 mobile:pt-10">
                <h1 className="text-3xl font-bold text-primary">Visi</h1>
                <p className="mt-6 text-lg text-secondary ">
                  Menjadi perusahaan jual beli properti yang terdepan dan
                  terpercaya, memberikan solusi properti yang inovatif dan
                  memenuhi kebutuhan klien kami dengan profesionalitas dan
                  keunggulan layanan.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center Sdesktop:flex-row">
              <Image
                className="w-[400px] border rounded-md shadow-lg object-contain Sdesktop:ml-0 Sdesktop:object-left"
                src={misi}
                alt=""
              />
              <div className="Sdesktop:ml-10 mobile:pt-10">
                <h3 className="text-3xl font-bold text-primary">Misi</h3>
                <p className="mt-6 text-lg text-secondary">
                  Menawarkan pilihan properti yang beragam dan berkualitas
                  tinggi kepada klien kami.
                  <br /> Memberikan layanan pelanggan yang ramah, responsif, dan
                  terpercaya dalam setiap tahap transaksi jual beli properti.
                  <br />
                  Membantu klien dalam menemukan properti yang sesuai dengan
                  kebutuhan dan anggaran mereka. <br /> Menjalin hubungan yang
                  kuat dengan pemilik properti, pengembang, dan mitra lainnya
                  untuk memastikan pasokan properti yang memadai bagi klien
                  kami.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default VisiMisi
