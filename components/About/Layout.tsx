import Head from "next/head";
import Footer from "../Footer";

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <Head>
    <title>About INDONESEA</title>
        <meta name="description" content="Your tailor-made adventures in remote destinations are planned by our team of experts. Charter your exotic adventure with INDONESEA Phinisi Yacht Cruise."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex,nofollow" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/fav.png"
        />
        <link
          rel="canonical"
          href="https://indonesea.com/about"
          key="canonical"
        />
    </Head>
    {children}
    <Footer />
    </>
  )
}

export default Layout