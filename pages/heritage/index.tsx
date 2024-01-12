import CtaPart from '@/components/CTAPart'
import DestinationsPart from '@/components/Heritage/DestinationsPart'
import HeritagePart from '@/components/Heritage/HeritagePart'
import Hero from '@/components/Heritage/Hero'
import Hero2 from '@/components/Heritage/Hero2'
import Layout from '@/components/Heritage/Layout'
import PhinisiPart from '@/components/Heritage/PhinisiPart'

const index = () => {
  return (
    <Layout>
        <Hero/>
        <Hero2/>
        <HeritagePart/>
        <PhinisiPart/>
        <DestinationsPart/>
        <CtaPart/>
    </Layout>
  )
}

export default index