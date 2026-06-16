const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sathviknidamanuri24@gmail.com',
        pass: 'arzvzplsurdsthls'
    }
});
let mailOptions = {
    from: 'sathviknidamanuri24@gmail.com',
    to: 'sathviknidamanuri@gmail.com',
    subject: 'Sending Email using Node.js',
    text:  'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ');
    }
}); 
   