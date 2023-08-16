import React, { useState } from "react"
import logo from "../../public/assets/logo.png"
import { HiMenu } from "react-icons/hi"
import { dataNavLink } from "../data/data"
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }
  const [menu, setMenu] = useState(false)
  return (
    <div className="fixed top-0 z-20 w-full bg-[#BAE5FE] shadow-md ">
      <div className="px-4 py-5 containers ">
        <div className="flex justify-between Sdesktop:items-center">
          <Link href="/">
            <Image src={logo} alt="logo" className="w-[125px]" />
          </Link>
          <nav className="flex items-center">
            <div
              className="text-2xl font-extrabold icon_humberger Sdesktop:hidden"
              onClick={() => setMenu((prev) => !prev)}
            >
              <HiMenu />
            </div>
            <ul>
              <div
                className={`transition-all mobile:bg-[#BAE5FE] tablet:bg-[#BAE5FE] ease-in-out duration-200 mobile:absolute mobile:mt-8 mobile:w-full mobile:p-4 tablet:absolute Sdesktop:flex Sdesktop:gap-x-9 Sdesktop:items-center tablet:w-full tablet:mt-8 tablet:p-5 z-20 ${
                  menu ? "right-0" : "right-[-1500px]"
                }`}
              >
                {dataNavLink.map((result, index) => (
                  <li
                    onClick={() => setMenu((prev) => !prev)}
                    key={index}
                    className="text-base font-medium mobile:border-b tablet:border-b mobile:py-2 text-primary hover:text-accent mobile:space-y-3 mobile:my-3 tablet:my-4"
                  >
                    <Link href={result.path}>{result.name}</Link>
                  </li>
                ))}
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
