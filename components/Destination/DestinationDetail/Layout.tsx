
import Footer from "@/components/Footer";
import Head from "next/head";

interface Props {
  children: React.ReactNode
  title: string
  desc: string
  slug: string
}

const Layout = ({children, title, desc, slug}: Props) => {
  return (
    <>
    <Head>
    <title>{`Welcome to INDONESEA: ${title}`}</title>
        <meta name="description" content={desc}/>
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
          href={`https://indonesea.com/destinations/${slug}`}
          key="canonical"
        />
    </Head>
    {children}
    <Footer />
    </>
  )
}

export default Layout