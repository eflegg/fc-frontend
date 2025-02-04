
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import next, { GetStaticPaths, GetStaticProps } from 'next'
import { getAllCaseStudiesWithSlug, getAllPostsWithSlug, getCaseStudies, getPostAndMorePosts, getStudy, getStudyAndMoreStudies } from '../../lib/api'
import PageWrapper from '../../components/pagewrapper'
import styled from 'styled-components'
import theme from '../../components/Theme'
import Link from 'next/link'
import UseWaypoint from '../../components/useWaypoint'
import { useState } from 'react'



const CaseStudyContainer = styled.div`
.fade-layer {
  position: absolute;
  z-index: 1;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  background: ${theme.colours.cream};
  /* background: slateblue; */
  transition: opacity .5s ease-in-out;
  &.activated {
    opacity: 1;
    z-index: 20;
  }
}
  position: relative;
  z-index: 10;
  section.hero {
    height: 100vh;
    padding: 8rem 1rem 4rem 1rem;
    position: relative;
    @media ${theme.devices.small} {
      height: 100vh;
      min-height: 40rem;
      padding: 6rem 2rem 4rem;
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
  z-index: 10;
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
    /* height: 70vh; */
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
    margin-bottom: 3rem;
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
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 4rem;
  }
  h3 {
    color: ${theme.colours.green};
    margin: 0;
    font-size: 3rem;
   
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
    margin-bottom: 3rem;
    @media ${theme.devices.medium} {
      width: 50%;
    }
  }
}





div.bg-mockup {
  background-color: ${theme.colours.green};
  margin-bottom: 8rem;
  padding-bottom: 2rem;
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
      font-size: 2rem;
    }
  }
  article.design-keywords {
    @media ${theme.devices.small} {
      width: 70%;
    }
    @media ${theme.devices.medium} {
      width: 63%;
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


ul.key-btn {
  margin-top: 2rem ;
  display: flex;
  flex-wrap: wrap;
}

section.keywords li {
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
  padding-bottom: 4rem;
  @media ${theme.devices.small} {
    padding: 2rem;
  }
  @media ${theme.devices.medium} {
    min-height: 100vh;
   padding-bottom: 12rem;
  }
  article {
    margin: 0rem 0rem 5rem 0rem;
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

  width: 300px;
 
 margin: 0 auto;
  height: auto;
  /* transform: rotate(90deg); */

  position: relative;
  bottom: 0;
  /* left: -10%; */
  opacity: .4;
  z-index: -10;
  img {
      object-fit: fill;
    }
  @media ${theme.devices.small} {
    /* width: 600px;
    opacity: .4;
    right: 20rem; */
    /* bottom: -40rem; */
  }
  @media ${theme.devices.medium}{
    /* width: 400px;
    height: auto;
    right: 30rem;
    top: -100px; */
    /* bottom: 7rem; */
  }
}

section.full-width-img {
  /* border: 3px solid orange; */
  padding-bottom: 10rem;
  &.tablet-mock {
    padding-bottom: 0;
  }
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
      padding-bottom: 10rem;
    }
  }
  @media ${theme.devices.small} {
    padding-bottom: 15rem;
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



.position-zero {
  object-position: 0 0;
}




`
const NextProject = styled.section`
  padding: 1rem;
  height: 30vh;
  margin: 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 190;
  transition: all 1s ease-in-out;
  &.slide-up {
    height: 95vh;
    padding: 6rem 2rem;
    /* transition: all 1s ease-in-out; */
    @media ${theme.devices.small}{
      height: 100vh;
    }
  }
  .next-study {
    width: 100%;
    height: 100%;
    margin: 0;
    img{
      object-position: 0 0;
  }
  }
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

`


type WorkSingleProps = {
  postData: any,
 nextPost: any,
 fade: boolean,
 allPosts: any,
}

const WorkSingle: React.FC<WorkSingleProps> = ({ postData, allPosts, nextPost }) => {

 

  const [faded, setFaded]= useState(false);
  const [slide, setSlide]= useState(false);

  console.log('slide? ', slide);

  const router = useRouter()
  const handleClick = (e:any, path:any) => {
  
    e.preventDefault();
    setFaded(true);
    setSlide(true);
    setTimeout(()=>{
      router.push('/work/' + path);
    
    }, 1000);
    setTimeout(()=>{
      setFaded(false);
    }, 1000)
    setTimeout(()=>{
      setSlide(false);
    }, 2500);

   
  
   };



  

  return (
    <>
  
      <PageWrapper noFooter fade={false} noFade >
        <Head>
          <title>Flegg Creative</title>
        </Head>
      

        <CaseStudyContainer className={`${postData.slug}`}>

         

       

          <section className="hero">
            <figure className="hero-img">
              {postData.featuredImage && (
              <img className="position-zero" src={postData.featuredImage.node.sourceUrl}
              alt={postData.featuredImage.node.altText? postData.featuredImage.node.altText : "case study featured image"} />
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

          <section className="full-width-img tablet-mock">
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
              <ul className="key-btn ">
              {postData.caseStudy.theWork.keywords && postData.caseStudy.theWork.keywords.length > 0 ? (
                postData.caseStudy.theWork.keywords.map((keyword:any, index:number)=>{
                  return (
                    <li key={index} className="btn-transparent">{keyword.keyword}</li>
                  )
                })
              ):null}
             
              </ul>
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


    
            <NextProject className={`${slide? "slide-up" : "" } next-project`}>
                {nextPost.node.slug && nextPost.node.featuredImage.node.sourceUrl && (

                  <Link onClick={(e)=> handleClick(e, nextPost.node.slug)} className="next-link" href={`/work/${nextPost.node.slug}`}>
                
                    <figure className="next-study">
                      <img src={nextPost.node.featuredImage.node.sourceUrl} alt={nextPost.node.featuredImage.node.altText ? nextPost.node.featuredImage.node.altText: "Decorative image for next case study" } />
                    </figure>

                  </Link>
                )}
          </NextProject>
          <div className={`fade-layer ${faded ? "activated" : "" }`}>
      </div>
        </CaseStudyContainer>
        {/* <h5>next project</h5> */}
      </PageWrapper>
  
    </>
  )

}

export default WorkSingle;



export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getStudy(params.slug);

const allPosts = await getCaseStudies();

const currentPostIndex = allPosts.edges.findIndex(({ node }) => node.slug === params.slug);
const prevPost = allPosts.edges[currentPostIndex - 1] || allPosts.edges[allPosts.edges.length - 1];
const nextPost = allPosts.edges[currentPostIndex + 1] || allPosts.edges[0];

  return {
    props: {
     
   allPosts: allPosts,
      postData: data ? data : null,
      nextPost: nextPost,
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