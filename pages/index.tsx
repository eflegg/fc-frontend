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
import Services from '../components/home-case-study'
import SmallPinkShape from '../components/shapes/small-pink'
import theme from '../components/Theme'





const Main = styled.main`
background: transparent;
border: .25px solid transparent;
width: 100%;


`


export default function Index({ allPosts: { edges }, preview, languageChoice, homePage }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)


  

  return (
    <PageWrapper languageChoice={languageChoice} >
      <Head>
        <title>Flegg Creative</title>
      </Head>


    

  

        <Intro />

    
        <Services  />


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
