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

import styled from 'styled-components'

import theme from '../../components/Theme'
import Link from 'next/link'


const BlogContainer = styled.article`
 
   border-radius: 20px;
    width: 95%;
    margin: 150px auto;
    padding: 1rem;
   max-width: 1000px;
   @media ${theme.devices.small}{
    width: 90%;
    padding: 2rem;
   }
h1 {
  color: ${theme.colours.orange};
  font-size: 2.5rem;
 
}
h2 {
  color: ${theme.colours.orange};
  font-family: ${theme.type.body};
  font-size: 2rem;
}
p{
  
  line-height: 120%;
  color: black;
  @media ${theme.devices.small}{
    font-size: 1.8rem;
   }
   figure {
    display: flex;
    flex-direction: column;
    align-items: center;
   }

  
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

export default function Post({ post, posts, morePosts }) {
  const router = useRouter()
  const allMorePosts = posts?.edges
  console.log('all more posts', allMorePosts);
  console.log('next prev posts', morePosts);

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <PageWrapper >
      <Head>
        <title>
          {post.title} | Flegg Creative
        </title>
        <meta
          property="og:image"
          content={post.featuredImage?.node.sourceUrl}
        />
      </Head>



      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <BlogContainer>

            <h1>{post.title}</h1>
            <div
              className="blog-excerpt"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />


            <Link href={`/blog/${morePosts[1].node.slug}`}>
              <p className="back-btn">previous post</p>

            </Link>

            <Link href={`/blog/${morePosts[0].node.slug}`}>
              <p className="back-btn">next post</p>

            </Link>
          </BlogContainer>

       
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


  const currentPostIndex = data.posts.edges.findIndex(({ node }) => node.slug === params.slug);
  const prevPost = data.posts.edges[currentPostIndex - 1] || data.posts.edges[data.posts.edges.length - 1];
  const nextPost = data.posts.edges[currentPostIndex + 1] || data.posts.edges[0];
 

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
      morePosts: [prevPost, nextPost],
    },
    revalidate: 60,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
    fallback: false,
  }
}
