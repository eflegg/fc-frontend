import Head from 'next/head'
import { GetStaticProps } from 'next'

import Intro from '../components/home/intro'
import PageWrapper from '../components/pagewrapper'

import { getAllPostsForHome, getHomeData } from '../lib/api'

import styled from 'styled-components'

import HomeCaseStudy from '../components/home/home-case-study'

import theme from '../components/Theme'
import HomeProcess from '../components/home/home-process'
import HomeWho from '../components/home/home-who'
import HomeHow from '../components/home/home-how'







export default function Index({ allPosts: { edges }, preview, languageChoice, homePage }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)



  return (
    <PageWrapper   >
      <Head>
        <title>Flegg Creative</title>
      </Head>

        <Intro />
        <HomeCaseStudy  />
        <HomeProcess />
        <HomeWho />
      <HomeHow />

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
