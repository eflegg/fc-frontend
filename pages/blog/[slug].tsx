import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'


import MoreStories from '../../components/more-stories'


import SectionSeparator from '../../components/section-separator'
import PageWrapper from '../../components/pagewrapper'
import PostTitle from '../../components/post-title'
import Tags from '../../components/tags'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import LargeOrangeShape from '../../components/shapes/large-orange'
import styled from 'styled-components'
import SmallPinkShape from '../../components/shapes/small-pink'
import theme from '../../components/Theme'
import Link from 'next/link'

const ShapeContainer = styled.div`
background: seagreen;
width: 100%;
.shape-pink {
    top: 0px;
   }
   .shape-orange {
    top: 0px;
   }

 `
 const BlogContainer = styled.article`
   background: ${theme.colours.blue};
  
   border-radius: 20px;
    width: 90%;
    margin: 100px auto 75px;
    padding: 50px;
   max-width: 1000px;
h1 {
  color: ${theme.colours.cream};
}
.back-btn {
  display: table;
  margin-top: 20px;
  color: ${theme.colours.pink};
      font-family: ${theme.type.logoType};
      &::after {
     display: block;
          content: "";
          height: 4px;
          background: ${theme.colours.pink};
          width: 10%;
         transition: all 0.25s ease-in;
         }
      &:hover {
            width: 30%;
            &::after {
              width: 80%;
              transition: all 0.25s ease-in;
            }
          }
         
   }
  
 `

export default function Post({ post, posts, preview, languageChoice }) {
  const router = useRouter()
  const morePosts = posts?.edges

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <PageWrapper  preview={preview} languageChoice={languageChoice}>
        <Head>
                <title>
                  {post.title} | Flegg Creative
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node.sourceUrl}
                />
              </Head>
   
              <ShapeContainer className="shape-container">
        <SmallPinkShape customClass="shape-pink" />
        <LargeOrangeShape customClass='shape-orange' />
      </ShapeContainer>
       
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <BlogContainer>
           
            <h1>{post.title ? post.title : "Loading..."}</h1>
            <div
        className="blog-excerpt"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

           
<Link href="/blog">
    <p className="back-btn">Back to Blog</p>

</Link>
            </BlogContainer>

            {/* <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          </>
        )}
 
    </PageWrapper>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
    fallback: true,
  }
}
