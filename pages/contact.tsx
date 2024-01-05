import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import PageWrapper from '../components/pagewrapper'
import SignUp from '../components/signup'
import { getAllPostsForHome, getHomeData } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import styled from 'styled-components'
import theme from '../components/Theme'



const ContactSection = styled.div`

`


export default function About({ languageChoice }) {
    return (

        <PageWrapper languageChoice={languageChoice}>
            <Head>
                <title>Flegg Creative</title>
            </Head>

            <ContactSection>
                <article className="contact">
                    <h1>Tell us about your project</h1>
                </article>



            </ContactSection>

        </PageWrapper>
    )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const allPosts = await getAllPostsForHome(preview)
    const homePage = await getHomeData()

    return {
        props: { allPosts, preview, homePage },
        revalidate: 10,
    }
}