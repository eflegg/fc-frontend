import Head from 'next/head'
import PageWrapper from '../components/pagewrapper'
import { getCaseStudies } from '../lib/api'
import { GetStaticProps } from 'next'
import styled from 'styled-components'
import CaseStudyCard from '../components/caseStudies/case-study-card'



 export default function Test({ caseStudies, preview, languageChoice }){

  console.log('case studies data: ', caseStudies.edges);
    return (
        <>
  <PageWrapper languageChoice={languageChoice} >

             <Head>
        <title>Case Studies</title>
      </Head>
        <section>
          {caseStudies.edges.map((study, index)=> {
            return (
              <>
              <CaseStudyCard study={study} />
            
            
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