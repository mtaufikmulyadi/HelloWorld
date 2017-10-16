var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mtaufikmulyadi@gmail.com',
    pass: 'eem76131788910'
  }
});

var mailOptions = {
  from: 'mtaufikmulyadi@gmail.com',
  to: 'mtaufikmulyadi2@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});