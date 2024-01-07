import Head from 'next/head'
import { GetStaticProps } from 'next'

import PageWrapper from '../components/pagewrapper'
import SignUp from '../components/signup'
import { getAllPostsForHome, getHomeData } from '../lib/api'

import styled from 'styled-components'
import theme from '../components/Theme'
import { useEffect, useState } from 'react'

const StyledContact = styled.section`
.contact {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 10rem;
    padding: 1rem;
    h1 {
    color: #1D76FC;
    font-size: 4rem;
}
}
.contact-insta {
    align-items: center;
}
`


export default function Contact({}:{}){
    return (
    <PageWrapper >
        <Head>
        <title>Contact - Flegg Creative</title>
        </Head>
        <StyledContact className="main-content">

        <article className="contact">
            <h1>Tell us about your project</h1>
        </article>

        <section className="form-wrapper">
            <form className="flex" action="mailto:hello@fleggcreative.ca subject=hello!" method="post" itemType="text/plain"
                >
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" placeholder="Your Name" name="firstname" required />

                <label htmlFor="mail">E-mail</label>
                <input type="email" id="mail" placeholder="yourname@example.com" name="email" required />

                <input type="submit" id="submit" value="Submit" />
            </form>
        </section>
        </StyledContact>
        </PageWrapper>
    )
}