
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
  padding: 8rem 1rem 4rem 1rem;
  position: relative;
  @media ${theme.devices.medium} {
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
    @media ${theme.devices.medium} {
      font-size: 6rem;
    }
    @media ${theme.devices.large} {
      font-size: 8rem;
    }
  }
  p {
    text-align: right;
    color: ${theme.colours.green};
    margin: 0;
    @media ${theme.devices.medium} {
      font-size: 2rem;
    }
  }
  @media ${theme.devices.medium} {
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
  @media ${theme.devices.medium} {
    padding: 2rem;
  }
  @media ${theme.devices.large} {
    height: 70vh;
    margin-bottom: 6rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
}

article.about-project {
  margin: 0;
  @media ${theme.devices.medium} {
    margin-bottom: 5rem;
  }
  @media ${theme.devices.large} {
    width: 50%;
  }
  h2 {
    margin: 0;
    color: ${theme.colours.green};
    font-size: 1.5rem;
    line-height: 120%;
    @media ${theme.devices.medium} {
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
  @media ${theme.devices.medium} {
    padding: 2rem;
    margin-top: 10rem;
  }
  @media ${theme.devices.large} {
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 4rem;
  }
  h3 {
    color: ${theme.colours.green};
    margin: 0;
    @media ${theme.devices.medium} {
      font-size: 2rem;
    }
  }
  h4 {
    margin-top: .3rem;
    font-size: 1rem;
  }
  hr {
    @media ${theme.devices.medium} {
      width: 100%;
    }
  }
  article {
    @media ${theme.devices.large} {
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
  @media ${theme.devices.medium} {
    padding: 4rem 2rem 0 2rem;
    margin-bottom: 20rem;
  }
  @media ${theme.devices.large} {
    display: flex;
    position: relative;
    margin-bottom: 12rem;
    padding-left: 12rem;
  }
  p {
    @media ${theme.devices.medium} {
      font-size: 2.5rem;
    }
  }
  article.design-keywords {
    @media ${theme.devices.medium} {
      width: 70%;
    }
    @media ${theme.devices.large} {
      width: 60%;
    }
  }
}

figure.icon {
  display: none;
  @media ${theme.devices.medium} {
    display: block;
    width: 400px;
    height: auto;
    bottom: -30px;
    position: absolute;
    right: 4rem;
  }
  @media ${theme.devices.large}{
    right: 6rem;
    bottom: -250px;
  }
}

figure.icon2 {
  @media ${theme.devices.large} {
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
  @media ${theme.devices.medium}{
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
  @media ${theme.devices.medium} {
    width: 400px;
    right: 8rem;
    top: 25rem;
  }
  @media ${theme.devices.large} {
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
  height: 100vh;
  margin-bottom: 4rem;
  @media ${theme.devices.medium} {
    padding: 2rem;
  }
  @media ${theme.devices.large} {
    margin-bottom: 12rem;
  }
  article {
    @media ${theme.devices.medium} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 10rem 8rem;
    }
    @media ${theme.devices.large} {
      flex-direction: row;
    }
  }
  p {
    @media ${theme.devices.large} {
      margin: 1rem;
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
  @media ${theme.devices.medium} {
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
    @media ${theme.devices.medium} {
      margin: 2rem;
    }
  }
  @media ${theme.devices.medium} {
    margin-bottom: 20rem;
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
    color: ${theme.colours.green});
    margin: 0;
    @media ${theme.devices.medium} {
      font-size: 3rem;
    }
  }
  @media ${theme.devices.medium} {
    margin: 0;
    padding: 0 2rem;
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
  console.log('casestudy: ', postData);

  return (
    <>
      <PageWrapper languageChoice={languageChoice} >
        <Head>
          <title>Flegg Creative</title>
        </Head>
        <h1>{postData.title}</h1>

        <CaseStudyContainer>

          <section className="hero">
            <figure className="hero-img"><img className="position-0" src="images/work-hero.svg"
              alt="decorative asparagus stalks" /></figure>
            <hgroup className="company-name">
              <h1>Asparagus Magazine</h1>
              <a className="site-link" href="https://www.asparagusmagazine.com/" target="blank">
                <div className="link flex">
                  <p>asparagusmagazine.com</p>
                  <figure className="arrow-icon">
                    <img src="images/arrow-right-solid.svg" alt="arrow icon" />
                  </figure>
                </div>
              </a>
            </hgroup>
          </section>

          <section className="about-project-container">
            <article className="about-project">
              <h2>website design and development - 2022</h2>
              <p>
                Asparagus Magazine is an award-winning publication based in Vancouver Canada, dedicated to
                stories
                about how we can live sustainably, from an environmental, social, and cultural perspective. They
                aim
                to approach these stories in a way that is intersectional, impactful, firmly grounded in
                science,
                but also fun.
              </p>
            </article>
            <hr />
          </section>

          <figure className="mobile-mockup-work"><img src="images/asp-mobile-mockups.jpg"
            alt="asparagus magazine mobile mockup" />
          </figure>

          <section className="challenge flex">
            <article>
              <h3>The Challenge</h3>
              <p>After several years of publishing online through Medium, Asparagus Magazine crossed over into
                print
                and
                quickly began to outgrow its online home. Medium presented many challenges including limited
                control
                over branding, layout and images, and ineffective search function. Asparagus Magazine was in
                need of
                a
                custom site tailored to their needs and in support of growth.</p>
            </article>
            <hr />
          </section>

          <section className="full-width-img">
            <div className="bg-mockup">
              <figure className="lrg-img">
                <img src="images/asp-tablet-mockups.png" alt="asparagus magazine tablet mockup" />
              </figure>
            </div>
          </section>

          <section className="keywords">
            <article className="design-keywords">
              <p>Asparagus needed a site that clearly communicated their values as an organization. We focused on
                these keywords in the design phase.
              </p>
              <div className="key-btn flex">
                <button className="btn-transparent">hope</button>
                <button className="btn-transparent">approachability</button>
                <button className="btn-transparent">calm</button>
                <button className="btn-transparent">accessibility</button>
                <button className="btn-transparent">criticality</button>
              </div>
            </article>
            <figure className="triple-stalk">
              <img src="images/triplestalk.svg" alt="triple asparagus stalk logo" />
            </figure>
          </section>


          <section className="full-width-img-1">
            <div className="bg-mockup-light">
              <figure className="lrg-img">
                <img src="images/asp-multi-screen.png" alt="asparagus magazine multi-screen mockup" />
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
              <img src="images/singlestalk.svg" alt="asparagus logo" />
            </figure>
          </section>


          <section className="full-width-img">
            <div className="bg-mockup">
              <figure className="lrg-img">
                <img src="images/asp-desktop-mockup.png" alt="asparagus magazine desktop mockup" />
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