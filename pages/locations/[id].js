import Layout from '../../components/layout'

import Image from 'next/image'
import Link from 'next/link'


import { getLocationItems, getLocationItemBySlug} from '../../lib/api-locations'

export async function getStaticPaths() {
    const allSlugs = await getLocationItems();
  
    const paths = allSlugs.edges.map(edge => {
        const {slug} = edge.node
        return {
            params: {
                id: slug
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const locationItemData = await getLocationItemBySlug(params.id)
    return {
      props: {
        locationItemData
      }
    }
}


export default function LocationItem ({locationItemData} ) {

    const {title, featuredImage, content } = locationItemData;

    const {sourceUrl, mediaDetails, altText} = featuredImage.node;

    const {width, height} = mediaDetails;

    return (
        <Layout>
            <div>
            <Link href='/locations'>
                <a>Back to locations</a>
            </Link>
            </div>
            <Image
                src={sourceUrl}
                width={width}
                height={height}
                alt={altText}
            />
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html:content}}/>
        </Layout>
    )
}