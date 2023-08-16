import React from "react"
import logo from "../../public/assets/logo-futura.png"
import { BsTelephone, BsWhatsapp } from "react-icons/bs"
import profile from "../../public/assets/profile.png"
import Image from "next/image"

const ProfileCard = ({ pesanwa }) => {
  const pesan = `https://wa.me/+6287789070758?text=Saya ingin beli property ini ${pesanwa}`
  return (
    <div className="flex flex-col mx-4 border">
      <div className="mt-10 gap-x-4 rounded-md w-[300px]  mobile:w-full desktop:sticky desktop:top-28 bg-white shadow-lg px-5 py-5 h-fit">
        <div className="flex items-center justify-center gap-x-3">
          <div>
            <Image src={profile} className="w-24 rounded-md" alt="" />
          </div>
          <div className="">
            <h1 className="mt-5 text-xl font-semibold text-black/80 ">Ely</h1>
            <h3 className="text-xs">Property Consultant at Futura Property</h3>
          </div>
          <div className="">
            <Image src={logo} className="w-28" alt="" />
          </div>
        </div>
        <div className="mobile:sticky">
          <hr className="my-5 rounded-full bg-black/10" />
          <div className="my-5">
            <a className="flex items-center justify-center w-full py-2 text-sm font-normal bg-transparent border rounded-lg shadow-md gap-x-2 hover:bg-slate-200 ">
              <BsTelephone className="text-lg" />
              +62 822-3333-5227
            </a>
          </div>
          <div>
            <a
              href={pesan}
              className="flex items-center justify-center w-full py-2 text-sm font-normal bg-transparent border rounded-lg shadow-md gap-x-2 hover:bg-slate-200 "
            >
              <BsWhatsapp className="text-lg text-green-700" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
