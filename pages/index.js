// next.js components
import Head from 'next/head'

// custom component
import Layout, { siteTitle } from '../components/layout'
import Button from '../components/button'
import Row from '../components/row'
import Col from '../components/col'

// styles


export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section>
                <h1>Chaofan Chen</h1>
                <p>Student</p>
                <Row>
                    <Col>
                        <Button
                            label ='View menu' 
                            path = '/menu'
                            type = "primary"
                        />
                        <Button
                            label ='View portfolio' 
                            path = '/portfolio'
                            type = "primary"
                        />
                        <Button
                            label ='About me' 
                            path = '/about'
                            type = "secondary"
                        />
                    </Col>
                    <Col>
                        <Button
                            label ='Locations' 
                            path = '/locations'
                            type = "secondary"
                        />
                        <Button
                            label ='People' 
                            path = '/people'
                            type = "secondary"
                        />
                    </Col>
                </Row>
            </section>
        </Layout>
    )
}