import nodemailer from "nodemailer"
export async function POST(req) {
    const { name, email, service, phoneNumber, message } = await req.json();

    const transporter = nodemailer.createTransport({
        host: 'mail.pixelbraindesigns.com',
        port: 587,
        secure: false,
        tls: {
            rejectUnauthorized: false // Disable TLS verification
        },
        auth: {
            user: "info@pixelbraindesigns.com",
            pass: "pixelBrainDesigns789_!"
        }
    });

    const mailOptions = {
        from: "info@pixelbraindesigns.com",
        to: "info@pixelbraindesigns.com",
        subject: "Inquire from contact form PixelBrainDesign",
        html: `Full Name: ${name} <br/> Phone No: ${phoneNumber} <br/> Selected Service: ${service} <br/> Email:${email} <br/> Message: ${message}`,
        replyTo: email,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response(JSON.stringify({ message: 'Error sending message.' }), { status: 500 });
    }
}
