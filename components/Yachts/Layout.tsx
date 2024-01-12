import Head from "next/head";
import Footer from "../Footer";

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <Head>
    <title>INDONESEA Phinisi Yachts</title>
        <meta name="description" content="Plan and enquire for your own phinisi yacht cruises with INDONESEA. Discover the beauty of Indonesia in the most luxurious way."/>
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
          href="https://indonesea.com/yachts"
          key="canonical"
        />
    </Head>
    {children}
    <Footer />
    </>
  )
}

export default Layout