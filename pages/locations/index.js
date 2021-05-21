import Layout,{ siteTitle } from '../../components/layout'
import Card from '../../components/card'
import Row from '../../components/row'
import Col from '../../components/col'
import Section from '../../components/section'
import Head from 'next/head'
import Heading from '../../components/heading';


import { getLocationItems } from '../../lib/api-locations'

export async function getStaticProps() {

    const locations = await getLocationItems()

    return {
        props: { locations }, // will be passed to the page component as props
    }
}

export default function Locations({locations}) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle} - Locations</title>
            </Head>
            <Heading type='h1'>Locations</Heading>
            <p>Find the nearest starbucks store form here.</p>
            <Row justifyContentCenter>
                {locations.edges.map((edge, index) => {
                const {node} = edge;
                    return (    
                        <Col sm={6} md={4} lg={3} key={index}>
                            <Card node={node} root="locations"/>  
                        </Col>
                    )
                })}
            </Row>
        </Layout>
        
    )
}
