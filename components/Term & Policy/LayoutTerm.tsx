import Head from "next/head";
import Footer from "../Footer";
const LayoutTerm = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <Head>
    <title>Welcome to INDONESEA: Terms & Conditions</title>
        <meta name="description" content=""/>
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
          href="https://indonesea.com/terms"
          key="canonical"
        />
    </Head>
    {children}
    <Footer />
    </>
  )
}

export default LayoutTerm