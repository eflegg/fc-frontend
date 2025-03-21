import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
    console.log('body', req.body);
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "hello@fleggcreative.ca", // Your email where you'll receive emails
      from: "hello@fleggcreative.ca", // your website email address here
      subject: `New email from ${req.body.data.fullname}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>The HTML5 Herald</title>
        <meta name="description" content="Flegg Creative Contact Form">
        <meta name="author" content="EFleggs">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
       
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.data.fullname}, their email is: ✉️${req.body.data.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.data.message}</p>
              <br>
              </div>
                
              </div>
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;