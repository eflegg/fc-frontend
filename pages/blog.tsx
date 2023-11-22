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

import SmallPinkShape from '../components/shapes/small-pink'
import theme from '../components/Theme'
import BlogCard from '../components/blog/blog-card'






const ShapeContainer = styled.div`
background: transparent;
border: .25px solid transparent;
width: 100%;

`
 const BlogListContainer = styled.div`
        
       display: grid;
       grid-template-columns: repeat(auto-fill, minmax(min(38.5rem, 100%), 1fr));
       grid-row-gap: 30px;
       grid-column-gap: 30px;
       justify-content: center;
       width: 90%;
       margin: 100px auto 75px;
       list-style: none;
       max-width: 1000px;

  
 `


export default function Index({ allPosts: { edges }, preview, languageChoice }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

console.log('all posts: ', edges);
  

  return (
    <PageWrapper languageChoice={languageChoice} preview={preview}>
      <Head>
        <title>Flegg Creative</title>
      </Head>
  
      <ShapeContainer className="shape-container">
        <SmallPinkShape customClass="shape-pink" />
        <LargeOrangeShape customClass='shape-orange' />
      </ShapeContainer>
      <BlogListContainer>

    
      {edges && edges.map((blog, index)=> {
        return (
            <BlogCard  title={blog.node.title} excerpt={blog.node.excerpt} slug={blog.node.slug}  />
        )
      })}


      </BlogListContainer>


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
