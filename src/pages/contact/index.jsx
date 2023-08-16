import React from "react"
import { ImOffice } from "react-icons/im"
import { BiLogoGmail } from "react-icons/bi"
import { IoLogoWhatsapp } from "react-icons/io"
import contact from "../../../public/assets/homecta.jpg"
import Image from "next/image"

const ContactPage = () => {
  return (
    <section className="pt-0">
      {/* // <!-- Container --> */}
      <div className="relative flex flex-col items-center mx-auto Sdesktop:flex-row-reverse containers">
        {/* <!-- Image Column --> */}
        <div className="w-full h-64 Sdesktop:w-1/2 Sdesktop:h-auto">
          <Image
            className="object-cover w-full h-full"
            src={contact}
            alt=".."
          />
        </div>
        {/* <!-- Close Image Column --> */}

        {/* <!-- Text Column --> */}
        <div className="bg-white max-w-Sdesktop Sdesktop:max-w-2xl Sdesktop:z-10 Sdesktop:shadow-lg Sdesktop:absolute Sdesktop:top-0 Sdesktop:mt-48 Sdesktop:w-3/5 Sdesktop:left-0 tablet:mt-20 Sdesktop:ml-20 ">
          {/* <!-- Text Wrapper --> */}
          <div className="flex flex-col p-10 Sdesktop:px-16">
            <h2 className="text-2xl font-semibold uppercase text-primary Sdesktop:text-3xl">
              Hubungi Saya
            </h2>
            <p className="mt-4 text-primary">
              Jika ada pertanyaan atau konsultasi seputar property silahkan
              Hubungi saya di bawah.
            </p>

            <div className="flex items-center mt-4 text-base font-medium text-primary Sdesktop:text-lg gap-x-2">
              <ImOffice /> +62 822-3333-5227
            </div>
            <p className="flex items-center mt-4 text-base font-medium text-primary Sdesktop:text-lg gap-x-2 ">
              <BiLogoGmail />
              elyfuturaproperty@gmail.com
            </p>

            <p className="flex items-center mt-4 text-base font-medium text-primary Sdesktop:text-lg gap-x-2 ">
              <IoLogoWhatsapp />
              +62 877-8907-0758
            </p>
          </div>
          {/* <!-- Close Text Wrapper --> */}
        </div>
        {/* <!-- Close Text Column --> */}
      </div>
    </section>
  )
}

export default ContactPage
