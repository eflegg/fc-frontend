import styled from 'styled-components'
import Head from 'next/head'
import PageWrapper from '../components/pagewrapper'
import { getAboutData } from '../lib/api'
import { GetStaticProps } from 'next'

const ImageContainer = styled.div`
    background: blue url('/charcuterie.jpg') cover fixed top right;
`

 export default function Test({ aboutPage, preview, languageChoice }){

  console.log('about data: ', aboutPage.aboutPage.teamBio);
    return (
        <>
  <PageWrapper languageChoice={languageChoice} preview={preview}>

             <Head>
        <title>About Us</title>
      </Head>
        <section>
          <h2>Team bio</h2>
          <p>{aboutPage.aboutPage.teamBio}</p>
          <h2>Elizabeth bio</h2>
          <p>{aboutPage.aboutPage.elizabethBio}</p>
          <h2>Erin bio</h2>
          <p>{aboutPage.aboutPage.erinBio}</p>
        </section>
        </PageWrapper>
        </>
       
     
    )
 }

 export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
 const aboutPage = await getAboutData()


  return {
    props: { preview, aboutPage },
    revalidate: 10,
  }
}