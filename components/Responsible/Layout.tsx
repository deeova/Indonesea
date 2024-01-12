import Head from "next/head";
import Footer from "../Footer";

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <Head>
    <title>INDONESEA Contribution to Environmental Conservation</title>
        <meta name="description" content="20% of INDONESEA Revenue is dedicated to supporting environmental causes and preservation efforts. Read more about our environmental responsibility here."/>
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
          href="https://indonesea.com/responsible"
          key="canonical"
        />
    </Head>
    {children}
    <Footer />
    </>
  )
}

export default Layout