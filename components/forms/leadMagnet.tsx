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
  
`

const LeadMagnet = ({ status, message, onValidated, text, buttonText }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [firstNameError, setFirstNameError] = useState(false);


    function testEmail() {
      let validEmail = /\S+@\S+\.\S+/.test(email);
      validEmail ? setEmailError(false) : setEmailError(true);
      console.log('valid email? ', validEmail);
    }

    function testName(){
    firstName === '' ? setFirstNameError(true) : setFirstNameError(false);
    }

  
    useEffect(() => {
        if(status === "success") clearFields();
      }, [status])
    
      const clearFields = () => {
        setFirstName('');
        setEmail('');
      }
    
      console.log('email: ', email);
      console.log('name: ', firstName);

    const handleSubmit = (e:any) => {
      console.log('lead magnet submit clicked');
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
          category: "Leadmagnet",
          label: email,
        });
    }
    console.log('status: ', status);

    return (
      <CustomFormContainer    onSubmit={(e:any) => handleSubmit(e)} className="mc__form">
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
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <h3
            className="mc__alert mc__alert--success"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )} 

{status !== "success" ? (
                <div className="mc__field-container">
                <InputField
                id="lead_name"
                onBlur={testName}
                className="lead-magnet__input"
                  label="First Name"
                
                  onChangeHandler={(e:any) =>
										setFirstName(e.target.value )
									}
                  type="text"
                  value={firstName}
                  placeholder=""
                  isRequired
                  name="firstName"
                />
      {firstNameError ? (
        <p className="error-message">Please enter your name</p>
      ): null}
            
      
                <InputField
                 id="lead_email"
                onBlur={testEmail}
                  label="Email"
                  onChangeHandler={(e:any) =>
										setEmail(e.target.value )
									}
                  type="text"
                  value={email}
                  placeholder=""
                  isRequired
                  name="email"
                />
        {emailError ? (
        <p className="error-message">Please enter a valid email</p>
      ): null}
              </div>
        ) : null}
 



      {
        status === 'success' ? <SubmitButton

          className="g__justify-self-center btn-sign-up">Check your inbox!</SubmitButton> : <SubmitButton
            type="submit"
           onClick={handleSubmit}
          >{buttonText}</SubmitButton>
        }
      </CustomFormContainer>
    );
};

export default LeadMagnet;