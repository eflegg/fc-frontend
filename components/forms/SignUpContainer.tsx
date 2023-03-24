import React from 'react';
import LeadMagnet from './leadMagnet';
import SignUpForm from './signupForm';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const SignUpContainer = props => {

    const postUrl = `https://fleggcreative.us10.list-manage.com/subscribe/post?u=dbac204bdb201aeff55412584&amp;id=5a9f02ab80&amp;f_id=00cacbe5f0`;

    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <SignUpForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                        text={props.text}
                        buttonText={props.buttonText}
                    />
                )}
            />
      
        </div>
    );
};

export default SignUpContainer;