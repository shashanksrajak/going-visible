import nodemailer from 'nodemailer';
import { currentUser } from './server-actions/user-auth';

export const sendMoodAlerts = async (suggestion) => {

    const user = await currentUser();

    if (!user.family || user.family.length === 0) {
        return;
    }

    const to = user.family.map((member) => member.email);

    const userName = user.name.split(" ")[0];

    const subject = `Support and Encouragement for a Tough Day for ${userName} : Being Visible`;

    const text = `
Hey there,

We wanted to let you know that ${userName} is currently having a challenging day, and we’ve noticed a bit of a negative mood. As someone who cares deeply about ${userName}, your support and encouragement can make a big difference.

Here’s a small suggestion that might help lift their spirits:

${suggestion}

Sometimes, a kind word or a simple gesture can have a tremendous impact. If you have a moment, it would mean a lot if you could reach out to ${userName} with some words of encouragement or offer to do something comforting together.

Thank you for being there for ${userName} and for your ongoing support. It’s the little things that make a big difference.

Warm regards,
Being Visible
    `;


    sendEmail(to, subject, text)
}



// Function to send email
async function sendEmail(to, subject, text) {

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USERNAME, // Your email address
            pass: process.env.EMAIL_PASSWORD  // Your email password or app-specific password
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USERNAME, // Sender address
        to: to,                           // List of receivers
        subject: subject,                 // Subject line
        text: text                        // Plain text body
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
}