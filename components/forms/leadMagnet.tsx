import styled from 'styled-components'
import theme from '../Theme'
import React, {useState, useEffect} from 'react';
import InputField from "./InputField";

const SubmitButton = styled.button`
    color: ${theme.colours.blue};
    font-family: ${theme.type.body};
    font-size: 1.8rem;
    background-color: ${theme.colours.pink};
    margin: 15px 0px 15px 0px;
    padding: 10px 40px;
    border-radius: 40px;
   width: fit-content;

`

const LeadMagnet = ({ status, message, onValidated, text, buttonText }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
  
    useEffect(() => {
        if(status === "success") clearFields();
      }, [status])
    
      const clearFields = () => {
        setFirstName('');
        setEmail('');
      }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
     
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
           
        });
    }

    return (
      <form    onSubmit={(e) => handleSubmit(e)} className="mc__form">
          <h3 className="mc__title">
          {status === "success" 
            ? "Success!" 
            : text
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
                
                  onChangeHandler={(e:any) =>
										setFirstName(e.target.value )
									}
                  type="text"
                  value={firstName}
                  placeholder=""
                  isRequired
                  name="firstName"
                />
      
            
      
                <InputField
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
      
              </div>
        ) : null}
 

       

{
          status === 'success' ? <SubmitButton
          
            className="g__justify-self-center btn-sign-up">Check your inbox!</SubmitButton> :  <SubmitButton
            type="submit"
           
          >{buttonText}</SubmitButton>
        }
      </form>
    );
};

export default LeadMagnet;