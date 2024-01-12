
import Head from "next/head";
import Footer from "../Footer";
const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <Head>
    <title>Luxury Destination of INDONESEA</title>
        <meta name="description" content="Set sail with INDONESEA to the most exquisite corners of Indonesia. Raja Ampat, Flores, Banda Neira, and Labuan Bajo with our private phinisi yachts."/>
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
          href="https://indonesea.com/destinations"
          key="canonical"
        />
    </Head>
    {children}
    <Footer />
    </>
  )
}

export default Layout