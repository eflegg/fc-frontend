import styled from 'styled-components'
import theme from '../Theme'
import React, {useState, useEffect} from 'react';
import InputField from "./InputField";

const LeadMagnet = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    useEffect(() => {
        if(status === "success") clearFields();
      }, [status])
    
      const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
      }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        lastName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
            MERGE2: lastName,
        });
    }

    return (
      <form    onSubmit={(e) => handleSubmit(e)} className="mc__form">
          <h3 className="mc__title">
          {status === "success" 
            ? "Success!" 
            : "Join our email list for future updates."
          }
        </h3>
        {status === "sending" && (
          <div className="mc__alert mc__alert--sending">
            sending...
          </div>
        )}
        {status === "error" && (
          <div 
            className="mc__alert mc__alert--error"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="mc__alert mc__alert--success"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}

{status !== "success" ? (
                <div className="mc__field-container">
                <InputField
                className="lead-magnet__input"
                  label="First Name"
                  onChangeHandler={setFirstName}
                  type="text"
                  value={firstName}
                  placeholder="Jane"
                  isRequired
                  name="firstName"
                />
      
                <InputField
                  label="Last Name"
                  onChangeHandler={setLastName}
                  type="text"
                  value={lastName}
                  placeholder="Doe"
                  isRequired
                  name="lastName"
                />
      
                <InputField
                  label="Email"
                  onChangeHandler={setEmail}
                  type="email"
                  value={email}
                  placeholder="your@email.com"
                  isRequired
                  name="email"
                />
      
              </div>
        ) : null}
 

       

{
          status === 'success' ? <button
          
            className="g__justify-self-center">Check your inbox!</button> :  <button
            type="submit"
           
          >Get the post</button>
        }
      </form>
    );
};

export default LeadMagnet;