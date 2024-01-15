import Head from "next/head";
import Footer from "../Footer";
const LayoutPolicy = ({children}: {children: React.ReactNode}) => {
  return (
    <>
    <Head>
    <title>Welcome to INDONESEA: Privacy Policy</title>
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
          href="https://indonesea.com/privacy-policy"
          key="canonical"
        />
    </Head>
    {children}
    <Footer />
    </>
  )
}

export default LayoutPolicy