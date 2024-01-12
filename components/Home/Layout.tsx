import Head from "next/head";
import Footer from "../Footer";
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <Head>
    <title>Welcome to INDONESEA: Luxury Yacht Cruises with a Heart</title>
        <meta name="description" content="Experience luxury and sustainability with INDONESEA's phinisi yacht cruises. Explore Indonesia's beauty and support environmental causes with each journey."/>
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
          href="https://indonesea.com"
          key="canonical"
        />
    </Head>
    {children}
    <Footer />
    </>
  )
}

export default Layout