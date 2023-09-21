const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const nodemailer = require('nodemailer');
const express = require('express');
const router = express.Router();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

const transporter = nodemailer.createTransport({
service: 'gmail',

auth: {
    user: "adwaitpujari08@gmail.com",
    pass: "boaz szwa asmf owon"
},
});
transporter.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });


router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail = {
        from: name,
        to: "adwaitpujari08@gmail.com",
        subject: "Portfolio Contact Form",
        html: `<p> I am <b>${name}</b> and i want to connect you, 
        this is my email ${email} and my contact info ${phone}. </p>
        <p>Here is  my text message</p>
        <p> ${message} </p>`
    };
    res.status(200).json({ message: 'Email sent successfully!' });
    transporter.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message Sent" });
        }
    });
});

