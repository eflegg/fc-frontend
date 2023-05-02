import styled from 'styled-components'
import theme from '../Theme'
import React, { useState, useEffect } from 'react';
import InputField from "./InputField";
import { event } from "nextjs-google-analytics";

const SubmitButton = styled.button`
    color: ${theme.colours.blue};
    font-family: ${theme.type.body};
    font-size: 2.2rem;
    background-color: ${theme.colours.pink};
    margin: 15px 0px 15px 0px;
    padding: 10px 40px;
    border-radius: 40px;
   width: fit-content;
   @media ${theme.devices.small}{
    font-size: 2.4rem;
    :hover {
      background: ${theme.colours.blue};
      color: ${theme.colours.cream};
    }
   }

`
const CustomFormContainer = styled.form`
h3 {
  font-size: 2.6rem;
  @media ${theme.devices.small}{
    font-size: 3.6rem;
  }
}
`

const SignUpForm = ({ status, message, onValidated, text, buttonText, languageChoice }) => {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);


  function testEmail() {
    let validEmail = /\S+@\S+\.\S+/.test(email);
    validEmail ? setEmailError(false) : setEmailError(true);
    // console.log('valid email? ', validEmail);
  }

  function testName() {
    firstName === '' ? setFirstNameError(true) : setFirstNameError(false);
  }


  useEffect(() => {
    if (status === "success") clearFields();
  }, [status])

  const clearFields = () => {
    setFirstName('');
    setEmail('');
  }



  const handleSubmit = (e: any) => {
    // console.log('footer submit clicked');
    e.preventDefault();
    testEmail();
    testName();
    email &&
      firstName &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        FNAME: firstName,

      });
    event("submit_form", {
      category: "Signup",
      label: email,
    });
  }
 

  return (
    <CustomFormContainer onSubmit={(e: any) => handleSubmit(e)} className="mc__form">
      <h3 className="mc__title">
        {status === "success"
          ? "Success!"
          : text
        }
      </h3>
      {status === "sending" && (
        <h3 className="mc__alert mc__alert--sending">
          sending...
        </h3>
      )}
   
     {status === "error" && ( 
        <h3
          className="mc__alert mc__alert--error"
          // dangerouslySetInnerHTML={{ __html: message }}
        >{`${languageChoice === "English" ? "Sorry! It looks like something's gone wrong on our end. Please refresh and try again." : "Désolée! On dirait que quelque chose s'est mal passé de notre côté. Veuillez actualiser et réessayer."}`}</h3>
      )}

      {status !== "success" ? (
        <div className="mc__field-container">
          <InputField
            onBlur={testName}
            className="lead-magnet__input"
            label={`${languageChoice === "English" ? "First Name" : "Nom"}`}
            id="signup_name"
            onChangeHandler={(e: any) =>
              setFirstName(e.target.value)
            }
            type="text"
            value={firstName}
            placeholder=""
            isRequired
            name="firstName"
          />
           {firstNameError ? (
            <p className="error-message">{`${languageChoice === "English"? "Please enter your name" : "Veuillez indiquer votre nom"}`}</p>
          ) : null}


          <InputField
            id="signup_email"
            onBlur={testEmail}
            label={`${languageChoice === "English" ? "Email" : "Courriel"}`}
            onChangeHandler={(e: any) =>
              setEmail(e.target.value)
            }
            type="text"
            value={email}
            placeholder=""
            isRequired
            name="email"
          />
         {emailError ? (
            <p className="error-message">{`${languageChoice === "English"? "Please enter a valid email" : "Merci d’entrer un courriel valide"}`}</p>
          ) : null}
        </div>
      ) : null}




{
        status === 'success' ? <SubmitButton

          className="g__justify-self-center btn-sign-up">{`${languageChoice === "English"? "Check your inbox!" : "vérifier votre boîte de réception!"}`}</SubmitButton> : <SubmitButton
            type="submit"
            onClick={handleSubmit}
          >{buttonText}</SubmitButton>
      }
    </CustomFormContainer>
  );
};

export default SignUpForm;