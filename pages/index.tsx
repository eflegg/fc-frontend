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
import LargeOrangeShape from '../components/shapes/large-orange'
import Services from '../components/services'
import SmallPinkShape from '../components/shapes/small-pink'
import theme from '../components/Theme'
import Link from 'next/link'





const ShapeContainer = styled.div`
background: seagreen;
width: 100%;


`


export default function Index({ allPosts: { edges }, preview, languageChoice, homePage }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  console.log('language choice: ', languageChoice);
  

  return (
    <PageWrapper languageChoice={languageChoice} preview={preview}>
      <Head>
        <title>Flegg Creative</title>
      </Head>
  
      <ShapeContainer className="shape-container">
        <SmallPinkShape customClass="shape-pink" />
        <LargeOrangeShape customClass='shape-orange' />
      </ShapeContainer>

      <main className="mx-auto px-5" id="main-content">
<Link href="/about">About Page</Link>
<Link href="/case-studies">Case Studies Page</Link>
        <Intro heroText={homePage.homeHero} languageChoice={languageChoice} />

    
        <Services aboutData={homePage.homeAbout} serviceData={homePage.homeServices} languageChoice={languageChoice} />
      </main>
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
