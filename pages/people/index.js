import Layout, { siteTitle } from '../../components/layout'
import Head from 'next/head'
import Card from '../../components/card'
import Row from '../../components/row'
import Col from '../../components/col'
import Heading from '../../components/heading'
import {getPeopleList} from '../../lib/api-people'

export async function getStaticProps() {
    const people = await getPeopleList();
    return {
        props: { people },
    }
}

export default function displayPeople ({people}) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle} - People</title>
            </Head>
            <Heading type='h1'>People</Heading>
            <p>These are our wonderful employees.</p>
            <Row>
                {people.edges.map((edge, index) => {
                const {node} = edge;
                    return (
                        <Col sm={6} md={4} lg={3} key={index}>
                            <Card node={node} root="people"/>  
                        </Col>
                    )
                })}
            </Row>
        </Layout>
    )
}

