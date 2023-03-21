import React from 'react';
import LeadMagnet from './leadMagnet';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const LeadMagnetContainer = props => {

    const postUrl = `https://fleggcreative.us10.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <LeadMagnet
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

export default LeadMagnetContainer;