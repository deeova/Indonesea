import CtaPart from '@/components/CTAPart'
import AboutPart from '@/components/Responsible/AboutPart'
import Diver from '@/components/Responsible/Diver'
import EnvironPart from '@/components/Responsible/EnvironPart'
import Hero from '@/components/Responsible/Hero'
import Hero2 from '@/components/Responsible/Hero2'
import Layout from '@/components/Responsible/Layout'

const index = () => {
  return (
    <Layout>
        <Hero/>
        <Hero2/>
        <Diver/>
        <EnvironPart/>
        <AboutPart/>
        <CtaPart/>
    </Layout>
  )
}

export default index