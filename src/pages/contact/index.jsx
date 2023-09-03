import React from "react"
import { ImOffice } from "react-icons/im"
import { BiLogoGmail } from "react-icons/bi"
import { IoLogoWhatsapp } from "react-icons/io"
import contact from "../../../public/assets/homecta.jpg"
import Image from "next/image"

const ContactPage = () => {
  const pesan = `https://wa.me/+6287789070758?text=Saya ingin bertanya atau konsultasi seputar property `
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
          <div className="flex flex-col p-10 mobile:p-5 tablet:p-5 Sdesktop:px-16 ">
            <h2 className="uppercase title ">Hubungi Saya</h2>
            <p className="mt-4 subtitle">
              Jika ada pertanyaan atau konsultasi seputar property silahkan
              Hubungi saya di bawah.
            </p>

            <div className="flex items-center mt-4 text-base font-medium text-primary Sdesktop:text-lg gap-x-2">
              <ImOffice />
              <a className="hover:text-accent" href="tel:+6282233335227">
                +62 822-3333-5227
              </a>
            </div>
            <p className="flex items-center mt-4 text-base font-medium text-primary Sdesktop:text-lg gap-x-2 ">
              <BiLogoGmail />
              <a
                className="hover:text-accent"
                href="mailto:elyfuturaproperty@gmail.com"
              >
                elyfuturaproperty@gmail.com
              </a>
            </p>

            <p className="flex items-center mt-4 text-base font-medium text-primary Sdesktop:text-lg gap-x-2 ">
              <IoLogoWhatsapp />
              <a className="hover:text-accent" href={pesan}>
                +62 877-8907-0758
              </a>
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
