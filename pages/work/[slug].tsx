
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllCaseStudiesWithSlug, getAllPostsWithSlug, getPostAndMorePosts, getStudy, getStudyAndMoreStudies } from '../../lib/api'
import PageWrapper from '../../components/pagewrapper'
import styled from 'styled-components'
import theme from '../../components/Theme'
import Link from 'next/link'

type WorkSingleProps = {
  postData: any,
  languageChoice: boolean,

}

const WorkSingle: React.FC<WorkSingleProps> = ({postData, languageChoice}) => {
  console.log('casestudy: ',postData);

    return (
        <>
         <PageWrapper languageChoice={languageChoice} >
      <Head>
        <title>Flegg Creative</title>
      </Head>
        <h1>{postData.title}</h1>
        </PageWrapper>
        </>
    )

}

export default WorkSingle;



export const getStaticProps: GetStaticProps = async({ params })=> {
  const data = await getStudy(params.slug);

  

  return {
    props: {
      postData: data ? data: null,
    },
  };
}
  
  export const getStaticPaths: GetStaticPaths = async () => {
    const allPosts = await getAllCaseStudiesWithSlug()
  
    return {
      paths: allPosts.edges.map(({ node }) => `/work/${node.slug}`) || [],
      fallback: false,
    }
  }