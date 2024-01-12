import Head from "next/head";
import Footer from "../Footer";

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <Head>
    <title>Phinisi Heritage & Tradition</title>
        <meta name="description" content="Discover more about the heritage and origin of Phinisi. From its function as a trading vessels to its revival as a luxury cruise ship."/>
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
          href="https://indonesea.com/heritage"
          key="canonical"
        />
    </Head>
    {children}
    <Footer />
    </>
  )
}

export default Layout