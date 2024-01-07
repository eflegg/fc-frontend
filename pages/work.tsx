import Head from 'next/head'
import PageWrapper from '../components/pagewrapper'
import { getCaseStudies } from '../lib/api'
import { GetStaticProps } from 'next'
import styled from 'styled-components'
import CaseStudyCard from '../components/caseStudies/case-study-card'
import theme from '../components/Theme'

const TopSection = styled.div`
padding: 1rem;
@media ${theme.devices.medium} {
  padding: 2rem;
}
h1 {
  margin-top: 12rem;
  color: ${theme.colours.blue};
  
}
`

const CaseStudiesContainer = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
grid-gap: 2rem;
margin: 6rem 0 4rem 0;
}



`

export default function Test({ caseStudies, preview, languageChoice }) {

  console.log('case studies data: ', caseStudies.edges);
  return (
    <>
      <PageWrapper languageChoice={languageChoice} >

        <Head>
          <title>Case Studies</title>
        </Head>
        <TopSection>
          <h1>
            check out some of our work
          </h1>
        </TopSection>
        <CaseStudiesContainer>

          {caseStudies.edges.map((study, index) => {
            return (
              <>
                <CaseStudyCard study={study} />


              </>
            )
          })}

        </CaseStudiesContainer>
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