import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import PageWrapper from '../components/pagewrapper'
import SignUp from '../components/signup'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import styled from 'styled-components'
import LargeOrangeShape from '../components/shapes/large-orange'
import Services from '../components/services'
import SmallPinkShape from '../components/shapes/small-pink'
import theme from '../components/Theme'
import Services from '../components/services'




const ShapeContainer = styled.div`
background: seagreen;
width: 100%;


`


export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    <PageWrapper preview={preview}>
      <Head>
        <title>Flegg Creative</title>
      </Head>
      < ShapeContainer className="shape-container">
        <SmallPinkShape customClass="shape-pink" />
        <LargeOrangeShape customClass='shape-orange' />
      </ShapeContainer>

      <Container>

        <Intro />

        {/* {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
        <Services />
      </Container>
    </PageWrapper>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPosts, preview },
    revalidate: 10,
  }
}
