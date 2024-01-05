

import styled from 'styled-components'
import theme from '../components/Theme'

import Image from 'next/image';
import SignUpContainer from './forms/SignUpContainer';

const FooterContainer = styled.footer`
 background-color: rgb(201, 82, 60);
  padding: 1rem;
  @media ${theme.devices.small}{
    figure.insta {
        margin-right: 0;
    }
    figure.logo-footer {
        height: 3rem;
        margin: 1rem;
    }
    display: flex;
        justify-content: space-between;
        padding: 2rem;
        align-items: flex-end;
}
label {
    font-family: "brother-1816", sans-serif;
    font-weight: 400;
    /* margin-top: 2.5rem; */
}
  section.newsletter {
    flex-direction: column;
    justify-content: space-between;
    color: #F7F5EE;
    padding-right: 2rem;
    @media ${theme.devices.small}{
      width: 60%;
    }
    @media ${theme.devices.medium}{
      width: 40%;
    }
}

section.contact {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    @media ${theme.devices.small}{
      flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 40%;
    }
    @media ${theme.devices.medium}{
      justify-content: space-between;
      width: 40%;
        height: 100%;
    }

}

h3.create-inclusive {
    font-family: "brother-1816", sans-serif;
    font-size: 2rem;
    margin: 0;
    font-style: italic;
    /* width: 70%; */
    text-transform: capitalize;
    @media ${theme.devices.medium}{
      width: 80%;
    }
}

h4 {
    font-family: "brother-1816", sans-serif;
    font-weight: 400;
    margin: 1rem 0 2rem 0;
    color: var(--background);
}
input#signup_name,
input#signup_email {
    font-size: 1rem;
    margin: .5rem 0 1rem 0;
    width: 100%;
    background-color: var(--background);
    outline: none;
    border: none;
    padding: 1rem;
    @media ${theme.devices.medium}{
      width: 80%;
    }
}

label.footer {
    margin-top: 1rem;
}

button.get-newsletter {
    width: 30%;
}

h1.good-fit {
    text-align: left;
    color: #F7F5EE;
    width: 100%;
    font-size: 2.5rem;
    @media ${theme.devices.medium}{
      font-size: 4rem;
        width: 90%;
    }
}

figure.insta {
    height: 2rem;
    width: 2rem;
    margin: 0 1rem;
    border-radius: 0px;
}

div.contact-insta {
    align-items: center;
}

h2.in-touch {
    color: #F7F5EE;
    font-size: 2rem;
    font-weight: 100;
    margin: 0 0 1rem 0;
}

figure.logo-footer {
    height: 3rem;
    margin: 0;
}

figure.logo-footer img {
    border-radius: 0px;
}






`



export default function Footer(props) {
  return (
    <FooterContainer className="">
          <section className="contact flex">
                    <h1 className="good-fit">wondering if we're a good fit?</h1>
                    <h2 className="in-touch">get in touch</h2>
                    <div className="contact-insta flex">
                        <a href="/contact.html">
                            <span className="btn-green">contact</span>
                        </a>
                        <a href="https://www.instagram.com/fleggcreative/">
                            <figure className="insta"><Image src="/images/instagram-brands.svg" alt="Instagram link" width={40} height={40} /></figure>
                        </a>
                        <figure className="logo-footer">
                            <img src="/images/asset-2.svg" alt="" />
                        </figure>
                    </div>
                </section>

                <section className="newsletter flex">
                    <h3 className="create-inclusive">create truly inclusive digital spaces with us</h3>
                    <h4>get our newsletter and find out why we put accessibility first</h4>

                    <SignUpContainer languageChoice={props.languageChoice} text={`${props.languageChoice === "English" ? "Get our newsletter" : "Recevoir notre infolettre" }`} buttonText={`${props.languageChoice === "English" ? "Sign up" : "Abonnez-vous" }`} />

                   
                </section>

       
       
      
      
    </FooterContainer>
  )
}



 {/* <form class="footer-form flex" action="mailto:hello@fleggcreative.ca subject=hello!" method="post"
                        enctype="text/plain" validate>
                        <label for="fname" class="footer">First Name</label>
                        <input type="text" id="footer-fname" placeholder="Your Name" name="firstname" required>
                        <label for="mail" class="footer">E-mail</label>
                        <input type="email" id="footer-mail" placeholder="yourname@example.com" name="email" required>
                        <input type="submit" id="submit" value="Submit">
                    </form> */}



          {/* &copy; Flegg Creative {(new Date().getFullYear())} */}