// next.js components
import Head from 'next/head'

// custom component
import Layout, { siteTitle } from '../components/layout'
import Button from '../components/button'

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
            </section>
        </Layout>
    )
}