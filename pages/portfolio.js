// next.js components
import Head from 'next/head'

// custom components
import Layout from "../components/layout";


export default function portfolio () {
    return(
        <Layout>
            <Head>
                <title>portfolio | Chaofan Chen</title>
                <meta name='description' content='A robust portfolio of web design projects'/>
            </Head>
            <h1>Portfolio</h1>
        </Layout>
    ) 
}