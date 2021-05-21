// next.js components
import Head from 'next/head'
import Image from 'next/image'


// custom component
import Layout, { siteTitle } from '../components/layout'
import Button from '../components/button'
import Row from '../components/row'
import Col from '../components/col'
import Section from '../components/section'
import Heading from '../components/heading'

// styles

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <Section>
                <Image
                src="/images/making-coffee.jpg" 
                width={857}
                height={450}
                alt='Making coffee'
                />
                <Heading type="h1">Menu</Heading>
                <p>The highest quality coffees from farms around the world, freshly roasted by hand to bring out every nuance, so you can taste the craft in every cup.</p>
                <Button label="View Menu" path="/menu" type="primary"/>
            </Section>
            <Section>
                <Image
                src="/images/location.jpg" 
                width={783}
                height={450}
                alt='a Starbucks location'
                />
                <Heading type="h1">Locations</Heading>
                <p>Find a Starbucks location near your and pick up your favorite coffee and food items today.</p>
                <Button label="View Locations" path="/locations" type="primary"/>
            </Section>
            <Section>
                <Image
                src="/images/making-coffee-2.jpg" 
                width={783}
                height={450}
                alt='Our excellent employees'
                />
                <Heading type="h1">People</Heading>
                <p>Our most diligent employee will provide you the best service.</p>
                <Button label="View People" path="/people" type="primary"/>
            </Section>
            <Section>
                <Heading type="h1">Other information</Heading>
                <Row>
                    <Col>
                    <Button
                            label ='View portfolio' 
                            path = '/portfolio'
                            type = "secondary"
                        />
                    </Col>
                    <Col>
                        <Button
                            label ='About me' 
                            path = '/about'
                            type = "secondary"
                        />
                    </Col>
                </Row>
            </Section>
        </Layout>
    )
}