import AboutPart from '@/components/About/AboutPart'
import DestinationsPart from '@/components/About/DestinationsPart'
import Hero from '@/components/About/Hero'
import Hero2 from '@/components/About/Hero2'
import Layout from '@/components/About/Layout'
import PartnerPart from '@/components/About/PartnerPart'
import CtaPart from '@/components/CTAPart'

const index = () => {
  return (
    <Layout>
        <Hero/>
        <Hero2/>
        <DestinationsPart/>
        <AboutPart/>
        <PartnerPart/>
        <CtaPart/>
    </Layout>
  )
}

export default index