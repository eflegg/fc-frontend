import Head from 'next/head'
import { useForm, SubmitHandler } from "react-hook-form"
import { GetStaticProps } from 'next'

import PageWrapper from '../components/pagewrapper'
import SignUp from '../components/signup'
import { getAllPostsForHome, getHomeData } from '../lib/api'

import styled from 'styled-components'
import theme from '../components/Theme'
import { useEffect, useState } from 'react'

const StyledContact = styled.section`
.form-wrapper {
    padding: 1rem;
    position: relative;
    @media ${theme.devices.small}{
        padding: 2rem;
    }
}

form {
    flex-direction: column;
    margin-bottom: 4rem;
}

label {
    font-family: "brother-1816", sans-serif;
    font-weight: 400;
    margin-top: 2.5rem;
}

input#mail,
input#fname {
    font-size: 1rem;
    margin: .5rem 0 2rem 0;
    width: 100%;
    background-color: ${theme.colours.cream};
    outline: none;
    border: none;
    border-top: solid 1px ${theme.colours.orange};
    border-bottom: solid 1px ${theme.colours.orange};
    padding: 3rem 0 1rem 0;
}

input#submit {
    width: 50%;
    height: 2.5rem;
    font-family: ${theme.type.body};
    font-weight: 600;
    font-size: 1.3rem;
    color: var(--background);
    border: none;
    border-radius: 5px;
    background-color: ${theme.colours.green};
    &:hover {
    background-color: ${theme.colours.blue};
    }
    @media ${theme.devices.small}{
        width: 30%;
    }
}
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
interface Inputs {
    firstName: string
    email: string
  }

export default function Contact({languageChoice}:{languageChoice: string}){
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()
      const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return (
    <PageWrapper languageChoice={languageChoice} >
        <Head>
        <title>Contact - Flegg Creative</title>
        </Head>
        <StyledContact className="main-content">

        <article className="contact">
            <h1>Tell us about your project</h1>
        </article>

        <section className="form-wrapper">
            <form className="flex" onSubmit={handleSubmit(onSubmit)} action="mailto:hello@fleggcreative.ca subject=hello!" method="post" encType="text/plain"
                >
                <label htmlFor="fname">First Name</label>
                <input defaultValue="first name" {...register("firstName", { required: true })} type="text" id="fname"  name="firstname" />
                {errors.firstName && <span>This field is required</span>}


                <label htmlFor="mail">E-mail</label>
                <input defaultValue="yourname@example.com" {...register("email", { required: true, pattern: emailRegex })} type="email" id="mail" name="email" />
                {errors.firstName && <span>This field is required</span>}

                <input type="submit" id="submit" value="Submit" />
            </form>
        </section>
        </StyledContact>
        </PageWrapper>
    )
}