import React from 'react';
import LeadMagnet from './leadMagnet';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const LeadMagnetContainer = props => {

    const postUrl = `https://genhybridsystems.us1.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <LeadMagnet
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
};

export default LeadMagnetContainer;