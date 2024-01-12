import {GetStaticPaths, GetStaticProps} from "next";
import {destinations} from "@/pages/api/destinations";
import {useRouter} from "next/router";
import Hero from "@/components/Destination/DestinationDetail/Hero";
import Hero2 from "@/components/Destination/DestinationDetail/Hero2";
import CtaPart from "@/components/CTAPart";
import DestinationHeading from "@/components/Destination/DestinationDetail/DestinationHeading";
import FAQ from "@/components/Destination/DestinationDetail/FAQPart";
import Layout from "@/components/Destination/DestinationDetail/Layout";

interface PathParams {
  slug: string[];
}

interface Props {
  destination: any;
}

const index = ({destination}: Props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={destination.title} desc={destination.desc} slug={destination.slug}>
      <Hero title={destination.title} bg={destination.bg} />
      <Hero2 title={destination.sec1Title} desc={destination.sec1Desc} />
      <DestinationHeading title={destination.sec2Title} desc={destination.sec2Desc} img={destination.img} data={destination.dataSec2}/>
      <CtaPart/>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = destinations.map((destination) => ({
    params: {slug: destination.slug.split("-") as string[]},
  }));

  return {paths, fallback: true};
};

export const getStaticProps: GetStaticProps<Props, {slug: string[]}> = async ({
  params,
}) => {
  const slug = params?.slug.join("-");
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      destination,
    },
    revalidate: 1, // in seconds
  };
};

export default index;
