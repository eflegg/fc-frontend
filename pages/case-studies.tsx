import styled from 'styled-components'
import Head from 'next/head'
import PageWrapper from '../components/pagewrapper'
import { getCaseStudies } from '../lib/api'
import { GetStaticProps } from 'next'



 export default function Test({ caseStudies, preview, languageChoice }){

  console.log('case studies data: ', caseStudies.edges);
    return (
        <>
  <PageWrapper languageChoice={languageChoice} preview={preview}>

             <Head>
        <title>Case Studies</title>
      </Head>
        <section>
          {caseStudies.edges.map((study, index)=> {
            return (
              <>
              <h2>{study.node.title}</h2>
              <div key={index}>{study.node.content}</div>
              </>
            )
          })}
        
        </section>
        </PageWrapper>
        </> 
       
     
    )
 }

 export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
 const caseStudies = await getCaseStudies()


  return {
    props: { caseStudies },
    revalidate: 10,
  }
}