import React from 'react';
import LeadMagnet from './leadMagnet';

import MailchimpSubscribe from "react-mailchimp-subscribe";

const LeadMagnetContainer = props => {

    const postUrl = `https://fleggcreative.us10.list-manage.com/subscribe/post?u=dbac204bdb201aeff55412584&amp;id=5a9f02ab80&amp;f_id=00cacbe5f0`;

    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <LeadMagnet
                    languageChoice={"English"}
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