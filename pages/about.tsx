import Head from 'next/head'
import { GetStaticProps } from 'next'

import PageWrapper from '../components/pagewrapper'
import SignUp from '../components/signup'
import { getAllPostsForHome, getHomeData } from '../lib/api'

import styled from 'styled-components'
import theme from '../components/Theme'
import { useEffect, useState } from 'react'
import UseWaypoint from '../components/useWaypoint'


const AboutContainer = styled.div`

h1, h2 {
    color: ${theme.colours.blue};
}

p {
    color: black;
    line-height: 120%;
}

article.about-top {
    padding: 1rem;
    @media ${theme.devices.medium}{
        padding: 2rem;
    }
    @media ${theme.devices.large}{
        height: 99vh;
        min-height: 710px;
    }
}

article.about-top h1 {
    margin-top: 12rem;
    font-size: 2rem;
    color: ${theme.colours.blue};
    @media ${theme.devices.medium}{
        font-size: 3rem;
        width: 80%;
    }
    @media ${theme.devices.large} {
        font-size: 5rem;
        margin: 16rem 5rem 0 0;
        width: 100%;
    }
}
hgroup.tagline h1, .h1 {
    font-size: 1.7rem;
    color: ${theme.colours.blue};
    @media ${theme.devices.medium}{
        font-size: 3.5rem;
    }
    @media ${theme.devices.large} {
        font-size: 7rem;
        text-align: center;
    }
}
hgroup.tagline {
    padding: 2rem;
    @media ${theme.devices.medium}{
        padding: 4rem 2rem;
        flex-direction: column;
        justify-content: center;
        margin: 4rem 2rem;
       }
    @media ${theme.devices.large} {
        margin: 4rem 0 4rem 0;
    }
}
hgroup.tagline h2 {
    margin: 0;
    font-size: 1.3rem;
    color: ${theme.colours.orange};
    @media ${theme.devices.medium}{
        font-size: 2.5rem;
    }
    @media ${theme.devices.large} {
        font-size: 4rem;
        text-align: center;
    }
}

`

const AboutIntro = styled.div`

@media ${theme.devices.medium}{
    display: flex;
    padding: 2rem;
    justify-content: space-between;
}
padding: 1rem;


section.about-intro p {
    font-size: 1rem;
    line-height: 115%;
}

figure.about-intro-img {
    width: 100%;
    margin: 2rem 0 2rem 0;
    @media ${theme.devices.medium}{
        width: 50%;
       margin: 0;
       }
    @media ${theme.devices.large}{
        height: 500px;
    }
}

figure.about-intro-img img {
    @media ${theme.devices.medium}{
         border-radius: 20px;
        }
    }

article {
    @media ${theme.devices.medium}{
        width: 50%;
        margin: 0;
        padding: 0 2rem 0 0;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }
}

p {
    @media ${theme.devices.medium}{
        text-align: right;
    }
    @media ${theme.devices.large} {
        width: 75%;
        margin-right: 1rem;
    }
}
   
 

`

const AboutUs = styled.div`
padding: 1rem;
@media ${theme.devices.medium}{
    padding: 2rem 6rem;
    margin-bottom: 6rem;
}
@media ${theme.devices.large} {
    display: flex;
    position: relative;
    justify-content: center;
}
p {
    @media ${theme.devices.medium}{
        width: 80%;
    }

}
article {
    @media ${theme.devices.large} {
        width: 50%;
        margin-left: 2rem;
    }
}
figure {
    @media ${theme.devices.large} {
        width: 30%;
        height: 50%;
        position: sticky;
        top: 6rem;
    }
  
}

`





export default function About({ languageChoice }) {

    const [spinOffset, setSpinOffset] = useState(null);

    useEffect(()=>{
        const spinHandler=()=>{
            const spin = document.querySelectorAll('.about-para');
            let offset = window.scrollY;
            console.log(offset);
            spin.forEach(element => {
                setSpinOffset(offset);
            // element.style.transform = `rotate(${offset * 0.08}deg)`;
            
            });
        }
        window.addEventListener('scroll', spinHandler);
        return()=>{
          window.removeEventListener('scroll', spinHandler);
        }
    })
    return (

        <PageWrapper >
            <Head>
                <title>Flegg Creative</title>
            </Head>

            <AboutContainer>
                <article className="about-top">
                    <h1>Flegg Creative is a Canada-based design studio led by sisters Erin and Elizabeth Flegg.
                    </h1>
                </article>

                <AboutIntro>
                    <article>

                        <p>Brought together by a vision of combining creativity with modern technology, we offer cutting edge
                            tech
                            and design focused on accessibility, with an approach that supports our clients every step of the
                            way.
                            Our human-centric process lets your vision be the driving force behind the work. The end results are
                            beautiful, functional websites for all kinds of users with technology that works hard for you.</p>

                    </article>

                    <figure className="about-intro-img">
                        <img src="images/about-us.jpg" alt="erin and elizabeth in an apple orchard" />
                    </figure>
                </AboutIntro>

                <UseWaypoint animClass='appear'>
                    <hgroup className="tagline">
                        <h2 className="track h1">Trust us with your vision.</h2>
                        <h2 className="track">Let us take care of the rest.</h2>
                    </hgroup>
                </UseWaypoint>

                <AboutUs>
                    <figure>
                        <img style={{transform:`rotate(${spinOffset * 0.08}deg)` }}className="about-para" src="images/home-graphic-2.svg" alt="photo of elizabeth in front of a lake" />
                    </figure>
                    <article className="about-eliz">
                        <p>I'm Elizabeth Flegg and I began my creative career in digital photography at Algonquin College, but
                            after
                            graduating it just wasn't the right fit. I went on to point my creativity towards food where I
                            worked as
                            a cook in restaurants for many years. I loved creating stunning and delicious things to share with
                            those
                            around me, taking inspiration from the colours and products themselves</p>
                        <p>Feeling creatively reinvigorated, I decided it was time to take these ideas in a different direction,
                            so
                            I went back to school. I studied graphic applications in desktop publishing which piqued my interest
                            in
                            UI design and web development. I continued with a focused program in Web Design and User Interface
                            at
                            Concordia University. I took a deeper dive into design and UX specifically in relation to web design
                            and
                            development.</p>
                        <p>I love that design offers me a unique opportunity to create beauty as well as functionality. I'm
                            amazed
                            that by combining the logic and structure of code with artistic expression we can create truly
                            wonderful
                            online spaces. I'm inspired everyday by the beautiful city I live in, filled with life, art, culture
                            and
                            especially creative people of all kinds.</p>
                    </article>
                </AboutUs>

                <AboutUs>
                    <article className="about-erin">
                        <p>I'm Erin Flegg, lead developer and west coast contingent of Flegg Creative. I believe technology
                            should
                            be accessible. It should work in service of creative and innovative people, not the other way
                            around.
                        </p>
                        <p>After completing a degree in English lit and history, I wanted to push my writing skills and explore
                            my
                            creativity. I got an MFA in creative writing from the University of British Columbia (I had to write
                            a
                            novel to get it!) and spent the next years working as a freelance writer, publishing everything from
                            local news stories to national features with a smattering of fiction and poetry thrown in.</p>
                        <p>A decade later, burnout drove me straight into the arms of my local technical institute (BCIT) where
                            I
                            received a diploma in new media design and web development. From there I've been lucky to combine my
                            creative tendencies with my tech skills, working as a user experience designer for the Vancouver Art
                            Gallery, art director for award-winning Asparagus Magazine [link to case study] and finally for
                            myself
                            as a full-stack developer bringing to life the digital dreams of a variety of smart people and
                            organizations.</p>
                        <p>Years of working with clients in a variety of fields have shown me that clarity and simplicity are
                            the
                            keys to letting your creative vision shine through. And our continued education in accessibility
                            (via
                            courses through The A11y Collective, Deque Systems amazing annual accessibility conference and
                            others)
                            has led us to create our own systems to ensure technology supports your vision and gets out of the
                            way
                        </p>
                        <p>I draw strength and inspiration from beautiful Quw'utsun territory where I live, and when I'm not
                            writing
                            words or lines of code, I'm loading another roll of film into one of my (too) many cameras to
                            capture
                            life on rural Vancouver Island.</p>
                    </article>
                    <figure>
                        <img className="about-para" src="images/contact-graphic.svg" alt="colourful graphic" />
                    </figure>
                </AboutUs>

            </AboutContainer>

        </PageWrapper>
    )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const allPosts = await getAllPostsForHome(preview)
    const homePage = await getHomeData()

    return {
        props: { allPosts, preview, homePage },
        revalidate: 10,
    }
}

