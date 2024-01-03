
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllCaseStudiesWithSlug, getAllPostsWithSlug, getPostAndMorePosts, getStudy } from '../../lib/api'
import PageWrapper from '../../components/pagewrapper'
import styled from 'styled-components'
import theme from '../../components/Theme'
import Link from 'next/link'

type WorkSingleProps = {
    title: string,
    excerpt: string,
    image: string,

}

const WorkSingle: React.FC<WorkSingleProps> = ({}) => {

    return (
        <>
        <h1>Work</h1>
        </>
    )

}

export default WorkSingle;




export const getStaticProps: GetStaticProps = async ({
    params,
    preview = false,
    previewData,
  }) => {
    const data = await getStudy(params?.slug, preview, previewData)
  
    return {
      props: {
        preview,
        post: data,
       
      },
      revalidate: 60,
    }
  }
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const allPosts = await getAllCaseStudiesWithSlug()
  
    return {
      paths: allPosts.edges.map(({ node }) => `/work/${node.slug}`) || [],
      fallback: false,
    }
  }