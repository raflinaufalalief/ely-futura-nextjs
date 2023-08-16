//assets hope
import image5 from "../../public/assets/time.jpg"
import image6 from "../../public/assets/qualitas.jpg"
import image7 from "../../public/assets/invest.jpg"

// import assets
export const dataNavLink = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  {
    id: 3,
    name: "Product",
    path: "/all-listings",
    subLinks: [
      {
        id: 1,
        linkText: "Primary",
      },
      {
        id: 2,
        linkText: "Secondary",
      },
    ],
  },
  { id: 4, name: "Profile", path: "/profile" },
  { id: 5, name: "Contact", path: "/contact" },
  { id: 5, name: "Titip jual/sewa", path: "/titip-jual-sewa" },
]

export const hope = [
  {
    id: 1,
    name: "Proses Transaksi Cepat",
    image: image5,
    text: "Kami akan memberikan solusi yang efektif dan memberikan bantuan yang dibutuhkan dengan cepat dan efisien.",
  },
  {
    id: 2,
    name: "Properti Berkualitas Baik",
    image: image6,
    text: "Properti yang memenuhi standar tinggi dalam segala aspek, baik dari segi desain, konstruksi, kualitas bahan, maupun fasilitas yang disediakan.",
  },
  {
    id: 3,
    name: "Investasi Jangka Panjang",
    image: image7,
    text: "Tindakan membeli atau memiliki properti dengan tujuan mendapatkan keuntungan finansial melalui apresiasi nilai properti dan pendapatan sewa.",
  },
]

export const stats = [
  {
    startNumber: "1",
    endNumber: "10",
    unit: "",
    title: "Property Listed",
  },
  {
    startNumber: "1",
    endNumber: "5",
    unit: "K",
    title: "Property Sold",
  },
  {
    startNumber: "1",
    endNumber: "15",
    unit: "",
    title: "Property Partner",
  },
  {
    startNumber: "1",
    endNumber: "24",
    unit: "",
    title: "Professional Agent",
  },
]
