
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import next, { GetStaticPaths, GetStaticProps } from 'next'
import { getAllCaseStudiesWithSlug, getAllPostsWithSlug, getCaseStudies, getNextPrev, getPostAndMorePosts, getStudy, getStudyAndMoreStudies } from '../../lib/api'
import PageWrapper from '../../components/pagewrapper'
import styled from 'styled-components'
import theme from '../../components/Theme'
import Link from 'next/link'
import { th } from 'date-fns/locale'
import UseWaypoint from '../../components/useWaypoint'
import { useState } from 'react'


const CaseStudyContainer = styled.div`

section.hero {
  height: 80vh;
  min-height: 285px;
  padding: 8rem 1rem 4rem 1rem;
  position: relative;
  @media ${theme.devices.small} {
    padding: 6rem 2rem;
        height: 100vh;
  }
}

figure.hero-img {
  margin: 0;
  height: 100%;
}

hgroup.company-name {
  position: absolute;
  bottom: 4rem;
  right: 1.5rem;
  margin-bottom: 1rem;
  h1 {
    text-align: right;
    color: ${theme.colours.green};
    margin: 0;
    @media ${theme.devices.small} {
      font-size: 6rem;
    }
    @media ${theme.devices.medium} {
      font-size: 8rem;
    }
  }
  p {
    text-align: right;
    color: ${theme.colours.green};
    margin: 0;
    @media ${theme.devices.small} {
      font-size: 2rem;
    }
  }
  @media ${theme.devices.small} {
    flex-direction: column;
    align-items: flex-end;
    bottom: 6rem;
    right: 3rem;
  }
  @media ${theme.devices.large} {
    width: 50%;
  }
}


hgroup.company-name h1.hp,
hgroup.company-name p.hp {
    color: ${theme.colours.cream};
}

.link {
  justify-content: flex-end;
}

section.about-project-container {
  padding: 1rem;
  @media ${theme.devices.small} {
    padding: 2rem;
  }
  @media ${theme.devices.medium} {
    height: 70vh;
    margin-bottom: 4rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
}

article.about-project {
  margin: 0;
  @media ${theme.devices.small} {
    margin-bottom: 5rem;
  }
  @media ${theme.devices.medium} {
    width: 50%;
  }
  h2 {
    margin: 0;
    color: ${theme.colours.green};
    font-size: 1.5rem;
    line-height: 120%;
    @media ${theme.devices.small} {
      font-size: 2rem;
    }
  }
}



figure.mobile-mockup-work {
  margin: 0;
}

figure.mobile-mockup-work img {
  border-radius: 0;
}

section.challenge {
  padding: 1rem;
  flex-direction: column;
  @media ${theme.devices.small} {
    padding: 2rem;
    margin-top: 10rem;
  }
  @media ${theme.devices.medium} {
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 4rem;
  }
  h3 {
    color: ${theme.colours.green};
    margin: 0;
    @media ${theme.devices.small} {
      font-size: 2rem;
    }
  }
  h4 {
    margin-top: .3rem;
    font-size: 1rem;
  }
  hr {
    @media ${theme.devices.small} {
      width: 100%;
    }
  }
  article {
    @media ${theme.devices.medium} {
      width: 50%;
    }
  }
}





div.bg-mockup {
  background-color: ${theme.colours.green};
  margin-bottom: 8rem;
}

section.keywords {
  padding: 1rem 1rem 0 1rem;
  position: relative;
  margin-bottom: 10rem;
  @media ${theme.devices.small} {
    padding: 4rem 2rem 0 2rem;
    margin-bottom: 20rem;
  }
  @media ${theme.devices.medium} {
    display: flex;
    position: relative;
    margin-bottom: 12rem;
    padding-left: 12rem;
  }
  p {
    @media ${theme.devices.small} {
      font-size: 2.5rem;
    }
  }
  article.design-keywords {
    @media ${theme.devices.small} {
      width: 70%;
    }
    @media ${theme.devices.medium} {
      width: 60%;
    }
  }
}

figure.icon {
  display: none;
  @media ${theme.devices.small} {
    display: block;
    width: 400px;
    height: auto;
    bottom: -30px;
    position: absolute;
    right: 4rem;
  }
  @media ${theme.devices.medium}{
    right: 6rem;
    bottom: -250px;
  }
}

figure.icon2 {
  @media ${theme.devices.medium} {
    width: 500px;
    height: auto;
    position: absolute;
    z-index: -10;
    opacity: .4;
    right: 4rem;
    top: 5rem;
  }
}


div.key-btn {
  flex-wrap: wrap;
}

section.keywords button {
  margin: .3rem 1rem 1rem 0;
  font-size: 1rem;
  @media ${theme.devices.small}{
    font-size: 1.3rem;
  }
}

figure.triple-stalk {
  width: 200px;
  height: auto;
  transform: rotate(45deg);
  position: absolute;
  z-index: -10;
  opacity: .4;
  right: 4rem;
  top: 16rem;
  @media ${theme.devices.small} {
    width: 400px;
    right: 8rem;
    top: 25rem;
  }
  @media ${theme.devices.medium} {
    width: 400px;
    height: auto;
    transform: rotate(45deg);
    position: absolute;
    z-index: -10;
    opacity: .4;
    right: 12rem;
    top: 5rem;
  }
}

figure.triple-stalk img {
  object-position: 0 0;
  transform: scaleX(-1);

}

div.bg-mockup-light {
  background-color: #D5E5A5;
}

figure.lrg-img {
  margin: 0;
}

section.case-study-text {
  padding: 1rem;
  position: relative;
  margin-bottom: 4rem;
  @media ${theme.devices.small} {
    padding: 2rem;
  }
  @media ${theme.devices.medium} {
    height: 100vh;
    margin-bottom: 12rem;
  }
  article {
    @media ${theme.devices.small} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 9rem 6rem;
    }
    @media ${theme.devices.medium} {
      flex-direction: row;
      margin: 9rem 6rem;
    }
  }
  p {
    @media ${theme.devices.medium} {
      margin: 1rem;
      width: 33%;
    }
  }
}

figure.single-stalk {

  width: 200px;
  height: auto;
  transform: rotate(90deg);
  margin: 0;
  position: absolute;
  top: 300px;
  right: 15rem;
  opacity: .4;
  z-index: -10;
  img {
      object-fit: fill;
    }
  @media ${theme.devices.small} {
    width: 600px;
    opacity: .4;
    right: 20rem;
    bottom: -40rem;
  }
}

section.full-width-img {
  margin-bottom: 10rem;
  img {
    object-position: 0 36px;
  }
  h5 {
    font-weight: 700;
    font-size: 3rem;
    color: ${theme.colours.blue};
    margin: 1rem;
    @media ${theme.devices.small} {
      margin: 2rem;
    }
  }
  @media ${theme.devices.small} {
    margin-bottom: 15rem;
  }
}


section.next-project {
  padding: 1rem;
  height: 30vh;
  margin: 0;
  overflow: hidden;
  position: absolute;
  bottom: -14rem;
  width: 100%;
  z-index: 90;
  h5 {
    color: ${theme.colours.green};
    margin: 0;
    @media ${theme.devices.small} {
      font-size: 3rem;
    }
  }
  @media ${theme.devices.small} {
    margin: 0;
    padding: 0 2rem;
  }
}

.arrow-icon {
    width: 1rem;
    transform: rotateY(0) rotate(-45deg);
    margin: 0;
    img {
      object-fit: fill;
    }
}

figure.next-study {
  width: 100%;
  height: 100%;
  margin: 0;

}

.position-zero {
  object-position: 0 0;
}

figure.next-study img {
  object-position: 0 0;
}



`


type WorkSingleProps = {
  postData: any,
  languageChoice: boolean,
 nextPost: any,
 fade: boolean;
}

const WorkSingle: React.FC<WorkSingleProps> = ({ postData, languageChoice, nextPost }) => {
  console.log('casestudy: ', postData.caseStudy);
  console.log('next post: ', nextPost);

  const [faded, setFaded]= useState(false);
  const [slide, setSlide]= useState(false);

  function handleTransition(event){
  setFaded(true);
  setSlide(true);
  console.log('faded');
  const href = event.target.getAttribute('href');
  setTimeout(() => {
      // window.location.href = href;
      setFaded(false);
      setSlide(false);
  }, 1000);
  }

  return (
    <>
      <PageWrapper fade={faded} >
        <Head>
          <title>Flegg Creative</title>
        </Head>
      

        <CaseStudyContainer>

          <section className="hero">
            <figure className="hero-img">
              {postData.featuredImage && (
              <img className="position-0" src={postData.featuredImage.node.sourceUrl}
              alt={postData.featuredImage.node.altText? postData.featuredImage.node.altText : "featured image"} />
              )}
              </figure>
            <hgroup className="company-name">
              {postData.title && (
              <h1>{postData.title}</h1>
              )}
            {postData.caseStudy.hero.clientWebsiteLink && (
              <a className="site-link" href={postData.caseStudy.hero.clientWebsiteLink} target="blank">
                <div className="link flex">
                  <p>{postData.caseStudy.hero.websiteTitle}</p>
                  <figure className="arrow-icon">
                    <img src="/images/arrow-right-solid.svg" alt="arrow icon" />
                  </figure>
                </div>
              </a>
            )}
            </hgroup>
          </section>

          <section className="about-project-container">
            <article className="about-project">
            {postData.caseStudy.theWork.typeOfWork && (
              <h2>{postData.caseStudy.theWork.typeOfWork}</h2>
            )}
              {postData.caseStudy.theWork.clientDescription && (
              <p>
              {postData.caseStudy.theWork.clientDescription}
              </p>
              )}
            </article>
            <UseWaypoint animClass="grow">
                <hr />
                </UseWaypoint>
          </section>


          {postData.caseStudy.images.mobileMockup && (
          <figure className="mobile-mockup-work">  <img src={postData.caseStudy.images.mobileMockup.sourceUrl} alt={postData.caseStudy.images.mobileMockup.altText ? postData.caseStudy.images.mobileMockup.altText : "mobile mockups"} />
          </figure>
          )}

          <section className="challenge flex">
            <article>
              <h3>The Challenge</h3>
              {postData.caseStudy.theWork.theChallenge && (
              <p>{postData.caseStudy.theWork.theChallenge}</p>
              )}
            </article>
            <UseWaypoint animClass="grow">
                <hr />
                </UseWaypoint>
          </section>

          <section className="full-width-img">
            <div className="bg-mockup">
              {postData.caseStudy.images.tabletMockup && (
              <figure className="lrg-img">
                <img src={postData.caseStudy.images.tabletMockup.sourceUrl} alt={postData.caseStudy.images.tabletMockup.altText ? postData.caseStudy.images.tabletMockup.altText : "tablet mockups"} />
              </figure>
              )}
            </div>
          </section>

          <section className="keywords">
            <article className="design-keywords">
            {postData.caseStudy.theWork.keywordDescription && (  
              <p>{postData.caseStudy.theWork.keywordDescription}
              </p>
            )}
              <div className="key-btn ">
              {postData.caseStudy.theWork.keywords && postData.caseStudy.theWork.keywords.length > 0 ? (
                postData.caseStudy.theWork.keywords.map((keyword:any, index:number)=>{
                  return (
                    <button key={index} className="btn-transparent">{keyword.keyword}</button>
                  )
                })
              ):null}
             
              </div>
            </article>
            {postData.caseStudy.images.graphic && (
            <figure className="triple-stalk">
              <img src={postData.caseStudy.images.graphic.sourceUrl} alt={postData.caseStudy.images.mobileMockup.altText ? postData.caseStudy.images.mobileMockup.altText : "Decorative image from client branding"} />
            </figure>
            )}
          </section>


          <section className="full-width-img-1">
            <div className="bg-mockup-light">
              {postData.caseStudy.images.multisizeMockup && (
              <figure className="lrg-img">
                <img src={postData.caseStudy.images.multisizeMockup.sourceUrl} alt={postData.caseStudy.images.mobileMockup.altText ? postData.caseStudy.images.mobileMockup.altText : "multi-size mockups"} />
              </figure>
              )}
            </div>
          </section>

          <section className="case-study-text">
            {postData.caseStudy.theProcess && (
            <article>
              {postData.caseStudy.theProcess.vision && (
                <p>{postData.caseStudy.theProcess.vision}</p>
              )}
               {postData.caseStudy.theProcess.build && (
                <p>{postData.caseStudy.theProcess.build}</p>
              )}
               {postData.caseStudy.theProcess.launch && (
                <p>{postData.caseStudy.theProcess.launch}</p>
              )}
            </article>
            )}
            {postData.caseStudy.images.logo && (
            <figure className="single-stalk">
              <img src={postData.caseStudy.images.logo.sourceUrl} alt={postData.caseStudy.images.logo.altText} />
            </figure>
            )}
          </section>


          <section className="full-width-img">
            <div className="bg-mockup">
              {postData.caseStudy.images.desktopMockup && (
              <figure className="lrg-img">
                <img src={postData.caseStudy.images.desktopMockup.sourceUrl} alt={postData.caseStudy.images.desktopMockup.altText} />
              </figure>
              )}
            </div>
            <h5>next project</h5>
          </section>

          <section className={`${slide? "slide-up":"" } next-project`}>
          {nextPost.node.slug && nextPost.node.featuredImage.node.sourceUrl && (
            <Link onClick={()=> handleTransition(event)} className="next-link"href={`/work/${nextPost.node.slug}`}>
           
              <figure className="next-study">
                <img src={nextPost.node.featuredImage.node.sourceUrl} alt={nextPost.node.featuredImage.node.altText ? nextPost.node.featuredImage.node.altText: "Decorative image for next case study" } />
              </figure>
         
            </Link>
          )}
          </section>

          <div className="cursor"></div>
          <div className="cursor-2"></div>
        </CaseStudyContainer>
      </PageWrapper>
    </>
  )

}

export default WorkSingle;



export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getStudy(params.slug);
// const nextPrev = await getNextPrev(params.slug);
const allPosts = await getCaseStudies();

const currentPost = allPosts.edges.find((post) => post.slug === params.slug);
const currentPostIndex = allPosts.edges.findIndex((post) => post.slug === params.slug);
const prevPost = allPosts.edges[currentPostIndex - 1];
// || allPosts.edges[allPosts.length - 1];
const nextPost = allPosts.edges[currentPostIndex + 1];
// || allPosts.edges[0];


  return {
    props: {
      nextPost: nextPost? nextPost : prevPost ? prevPost : allPosts.edges[0],
      postData: data ? data : null,
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