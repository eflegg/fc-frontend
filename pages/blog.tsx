import Head from 'next/head'
import { GetStaticProps } from 'next'

import PageWrapper from '../components/pagewrapper'
import SignUp from '../components/signup'
import { getAllPostsForHome, getHomeData } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import styled from 'styled-components'

import theme from '../components/Theme'
import BlogCard from '../components/blog/blog-card'










const BlogListContainer = styled.div`
    .inner {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px , 1fr)); 
      column-gap: 2rem ;
      @media ${theme.devices.small}{
           flex-direction: row;
        }  
      }
    
    background-color: ${theme.colours.cream};
    padding: 2rem;
    margin: 12rem 0 4rem 0;

    h1 {
      color: ${theme.colours.blue};
    }
 `


export default function Blog({ allPosts: { edges }, preview, languageChoice }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  console.log('all posts: ', edges);


  return (
    <PageWrapper  >
      <Head>
        <title>Flegg Creative</title>
      </Head>


      <BlogListContainer>

        <h1>Articles</h1>

        <div className="inner">

        {edges && edges.map((blog, index) => {
          return (
            <BlogCard title={blog.node.title} excerpt={blog.node.excerpt} slug={blog.node.slug} />
          )
        })}

</div>
      </BlogListContainer>


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
