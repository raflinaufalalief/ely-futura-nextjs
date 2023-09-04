import AboutHero from "@/components/about/AboutHero"
import React from "react"
import { defaultSEO } from "@/components/Seo"
import Head from "next/head"

const AboutPage = () => {
  const seo = {
    ...defaultSEO,
    title: "About | Koleksiproperti", // Judul khusus untuk halaman About
  }
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

      <AboutHero />
    </>
  )
}

export default AboutPage
