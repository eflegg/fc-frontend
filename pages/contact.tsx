import Head from 'next/head'
import { useForm, SubmitHandler } from "react-hook-form"
import PageWrapper from '../components/pagewrapper'
import styled from 'styled-components'
import theme from '../components/Theme'
import {  useState } from 'react'

const StyledContact = styled.section`
h2 {
    color: ${theme.colours.blue};
    font-weight: 700;
}
.error {
    font-weight: 400;
    color: red;
    font-family: ${theme.type.body};
    top: -25px;
    position: relative;
}
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
input#fname, #message {
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
    margin-top: 20px;
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
    fullname: string
    email: string
    message: string
  }

export default function Contact({languageChoice}:{languageChoice: string}){

    const [submitted, setSubmitted]= useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm<Inputs>()
 

      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      const onSubmit = async data => {
                console.log('data', data);

                const res = await fetch("/api/sendgrid", {
                  body: JSON.stringify({
                   data
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                  method: "POST",
                 
                });
                
                const { error } = await res.json();
                if (error) {
                  console.log(error);
                  return;
                }
                setSubmitted(true);
                
            }
      
    


    return (
    <PageWrapper >
        <Head>
        <title>Contact - Flegg Creative</title>
        </Head>
        <StyledContact className="main-content">

        <article className="contact">

{!submitted ? (
    <h1>Tell us about your project</h1>
):(
    <h1>Thanks for getting in touch! We will get back to you within 48 hours</h1>
)}
            
        </article>

        <section className="form-wrapper">
            {!submitted ? (
                <form className="flex" onSubmit={handleSubmit(onSubmit)} 
                >
                <label htmlFor="fname">Your Name</label>
                <input defaultValue="Your name" {...register("fullname", { required: true })} type="text" id="fname"  name="fullname" />
                {errors.fullname && <span className="error">Please enter a name</span>}


                <label htmlFor="mail">E-mail</label>
                <input defaultValue="yourname@example.com" {...register("email", { required: true, pattern: emailRegex })} type="email" id="mail" name="email" />
                {errors.fullname && <span className="error">Please enter a valid email</span>}

                <label htmlFor="message">Message</label>
                <input type="textarea" {...register("message", {required: true})} id="message" name="message" />
                {errors.message && <span className="error">Please leave us a message!</span>}

                <input type="submit" id="submit" value="Submit" />
                </form>
            ):(
                null
            )}
           
        </section>
        </StyledContact>
        </PageWrapper>
    )
}