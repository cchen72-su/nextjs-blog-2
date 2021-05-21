import Layout from '../../components/layout'
import Row from '../../components/row'
import Col from '../../components/col'


import Image from 'next/image'
import Link from 'next/link'


import { getAllMenuItemSlugs ,getMenuItemBySlug} from '../../lib/api-menu'

export async function getStaticPaths() {
    const allSlugs = await getAllMenuItemSlugs()
  
    const paths = allSlugs.edges.map(edge => {
        const {slug} = edge.node
        return {
            params: {
                id: slug
            }
        }
    })
    /*
    [
        {params: {id:"cheesecake"}},
        {params: {id:"cheesecake"}},
        {params: {id:"cheesecake"}}
    ]
    */
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {

    const menuItemData = await getMenuItemBySlug(params.id)
    return {
      props: {
        menuItemData
      }
    }
}


export default function MenuItem ({menuItemData} ) {

    const {title, featuredImage, content } = menuItemData;

    const {sourceUrl, mediaDetails, altText} = featuredImage.node;

    const {width, height} = mediaDetails;

    return (
        <Layout>
            <Row>
                <Col>
                    <Link href='/menu'>
                        <a>Back to menu</a>
                    </Link>
                </Col>
            </Row>
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