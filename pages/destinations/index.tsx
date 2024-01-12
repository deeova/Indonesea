import CtaPart from '@/components/CTAPart'
import BandaPart from '@/components/Destination/BandaPart'
import FloresPart from '@/components/Destination/FloresPart'
import Hero from '@/components/Destination/Hero'
import Hero2 from '@/components/Destination/Hero2'
import LabuanPart from '@/components/Destination/LabuanPart'
import Layout from '@/components/Destination/Layout'
import Raja4Part from '@/components/Destination/Raja4Part'
import React from 'react'

const index = () => {
  return (
    <Layout>
        <Hero/>
        <Hero2/>
        <Raja4Part/>
        <FloresPart/>
        <BandaPart/>
        <LabuanPart/>
        <CtaPart/>
    </Layout>
  )
}

export default index