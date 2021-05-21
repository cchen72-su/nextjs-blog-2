import Layout,{ siteTitle }from '../../components/layout'
import Card from '../../components/card'
import Row from '../../components/row'
import Col from '../../components/col'
import Section from '../../components/section'
import Head from 'next/head'


import { getMenuTypesAndMenuItems } from '../../lib/api-menu'

export async function getStaticProps() {

    const menuTypes = await getMenuTypesAndMenuItems()

    return {
        props: { menuTypes }, // will be passed to the page component as props
    }
}

export default function Menu({menuTypes}) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle} - Menu</title>
            </Head>
           <h1>Menu</h1>
           <p>This is the menu introduction.</p>
           {menuTypes.edges.map(edge=>{
                const {name,items} = edge.node;
                return (
                <Section title={name}>
                    <Row justifyContentCenter>
                        {items.edges.map((edge, index) => {
                            const { node } = edge;
                            return <Col sm={6} md={4} lg={3} key={index}>
                                <Card node={node} root='menu'/>
                            </Col>
                        })}
                    </Row>
               </Section>
                )
           })}
        </Layout>
    )
}
