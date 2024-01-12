import CtaPart from '@/components/CTAPart'
import DestinationsPart from '@/components/Yachts/DestinationsPart'
import HeritagePart from '@/components/Yachts/HeritagePart'
import Hero from '@/components/Yachts/Hero'
import Hero2 from '@/components/Yachts/Hero2'
import Layout from '@/components/Yachts/Layout'
import PackagePart from '@/components/Yachts/PackagePart'
import React from 'react'

const index = () => {
  return (
    <Layout>
        <Hero/>
        <Hero2/>
        <PackagePart/>
        <DestinationsPart/>
        <HeritagePart/>
        <CtaPart/>
    </Layout>
  )
}

export default index