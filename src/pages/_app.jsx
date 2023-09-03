import Head from "next/head"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
  // Define default SEO metadata
  const defaultSEO = {
    title: "Punyaasset | home",
    description:
      "mencari properti yang sesuai dengan keinginan dan kebutuhan Anda",
    author: "punyaasset",
    keywords: "jual beli property",
    url: "https://www.punyaasset.com",
  }

  // Merge default SEO with page-specific SEO (if available)
  const seo = { ...defaultSEO, ...pageProps.seo }

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="author" content={seo.author} />
        <meta name="keywords" content={seo.keywords} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={seo.url} />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
