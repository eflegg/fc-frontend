
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllCaseStudiesWithSlug, getAllPostsWithSlug, getPostAndMorePosts, getStudy, getStudyAndMoreStudies } from '../../lib/api'
import PageWrapper from '../../components/pagewrapper'
import styled from 'styled-components'
import theme from '../../components/Theme'
import Link from 'next/link'
import { th } from 'date-fns/locale'


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
  bottom: 0;
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

}

const WorkSingle: React.FC<WorkSingleProps> = ({ postData, languageChoice }) => {
  console.log('casestudy: ', postData.caseStudy);

  return (
    <>
      <PageWrapper languageChoice={languageChoice} >
        <Head>
          <title>Flegg Creative</title>
        </Head>
      

        <CaseStudyContainer>

          <section className="hero">
            <figure className="hero-img"><img className="position-0" src={postData.featuredImage.node.sourceUrl}
              alt="decorative asparagus stalks" /></figure>
            <hgroup className="company-name">
              <h1>{postData.title}</h1>
              <a className="site-link" href={postData.caseStudy.hero.clientWebsiteLink} target="blank">
                <div className="link flex">
                  <p>asparagusmagazine.com</p>
                  <figure className="arrow-icon">
                    <img src="/images/arrow-right-solid.svg" alt="arrow icon" />
                  </figure>
                </div>
              </a>
            </hgroup>
          </section>

          <section className="about-project-container">
            <article className="about-project">
              <h2>{postData.caseStudy.theWork.typeOfWork}</h2>
              <p>
              {postData.caseStudy.theWork.clientDescription}
              </p>
            </article>
            <hr />
          </section>

          <figure className="mobile-mockup-work">  <img src={postData.caseStudy.images.mobileMockup.sourceUrl} alt={postData.caseStudy.images.mobileMockup.altText} />
          </figure>

          <section className="challenge flex">
            <article>
              <h3>The Challenge</h3>
              <p>{postData.caseStudy.theWork.theChallenge}</p>
            </article>
            <hr />
          </section>

          <section className="full-width-img">
            <div className="bg-mockup">
              <figure className="lrg-img">
                <img src={postData.caseStudy.images.tabletMockup.sourceUrl} alt={postData.caseStudy.images.tabletMockup.altText} />
              </figure>
            </div>
          </section>

          <section className="keywords">
            <article className="design-keywords">
              <p>{postData.caseStudy.theWork.keywordDescription}
              </p>
              <div className="key-btn ">
              {postData.caseStudy.theWork.keywords && postData.caseStudy.theWork.keywords.length > 0 ? (
                postData.caseStudy.theWork.keywords.map((keyword, index)=>{
                  return (
                    <button key={index} className="btn-transparent">{keyword.keyword}</button>
                  )
                })
              ):null}
             
              </div>
            </article>
            <figure className="triple-stalk">
              <img src={postData.caseStudy.images.graphic.sourceUrl} alt={postData.caseStudy.images.mobileMockup.altText} />
            </figure>
          </section>


          <section className="full-width-img-1">
            <div className="bg-mockup-light">
              <figure className="lrg-img">
                <img src={postData.caseStudy.images.multisizeMockup.sourceUrl} alt={postData.caseStudy.images.mobileMockup.altText} />
              </figure>
            </div>
          </section>

          <section className="case-study-text">
            <article>
              <p>The team at Asparagus needed a tried-and-true backend platform to input new articles and images
                simply
                and
                seamlessly. By creating custom fields we made this process a snap and maintained consistency of
                style
                and
                layout throughout the site.
              </p>
              <p>We choose to build within the next.js framework because it offers unparalleled page load speed,
                accessibility
                features, improved SEO and a powerful e-commerce option for their online shop.</p>
              <p>Once the site was ready to launch, we set the team up with google analytics to
                track user and
                advertisement data. We provided a training document for the staff to input all of their
                content
                in
                the back end.
              </p>
            </article>
            <figure className="single-stalk">
              <img src={postData.caseStudy.images.logo.sourceUrl} alt={postData.caseStudy.images.logo.altText} />
            </figure>
          </section>


          <section className="full-width-img">
            <div className="bg-mockup">
              <figure className="lrg-img">
                <img src={postData.caseStudy.images.desktopMockup.sourceUrl} alt={postData.caseStudy.images.desktopMockup.altText} />
              </figure>
            </div>
            <h5>next project</h5>
          </section>

          <section className="next-project">

            <a className="next-link" href="case-study-2.html">
              <figure className="next-study">
                <img src="images/hearth-place.jpg" alt="" />
              </figure>
            </a>
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



  return {
    props: {
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