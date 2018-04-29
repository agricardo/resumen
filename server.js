var port = process.env.PORT || 3934;

var express = require('express');
var fs = require('fs');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fviclass@gmail.com',
    pass: 'fviclass2017'
  }

});

var mailOptions = {
  from: 'Contact from your Website <noreply@gmail.com',
  subject: 'Re: Your website'
}

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'Post');
  res.setHeader('Access-Control-Allow-Methods', 'X-Requested-With, content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.post("/", function (req, res) {




  // var emailBody = fs.readFileSync('./resume.html');
  // emailBody = emailBody;
  // var mailOptions = {
  //   from: req.body.from,
  //   to: req.body.dest_email,
  //   html: emailBody,
  //   subject: req.body.subject
  // };
  // transporter.sendMail(mailOptions, function (error, info){
  //   if (error){
  //     console.log(error);
  //     res.end("Something went wrong. Error:\n" + error);

  //   }else{
  //     console.log('Message sent' + info.response);
  //     res.end("Email sent to:" + mailOptions.dest_email + ".Response:\n" + info.response);
  //   }
  // });
});



app.get('/', function (req, res){
  res.send('Hello world')
})


app.listen(port, function (err) {
  if (err) throw err;
  console.log('listening on port' + port)
})

