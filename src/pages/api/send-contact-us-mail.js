import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!req.body) {
    return res.status(400).json({ message: "Bad request" });
  }

  const { full_name, email, phone, details } = req.body;

  if (!full_name || !email || !phone || !details) {
    return res.status(400).json({ message: "Please fill in all the fields" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASS,
    },
  });

  

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Enquiry",
    text: `Name : ${full_name} \nEmail : ${email} \nPhone : ${phone} \nDetails : ${details}`,
  };

  try {
    console.log({
      'email' : process.env.EMAIL,
      'pass' : process.env.APP_PASS
    });
    await transporter.sendMail(mailOptions);
    return res.status(200).json({
      message: "Enquiry sent successfully!",
      status: 200,
    });
  } catch (error) {
    console.log("Mail send error : ",error);
    return res.status(500).json({
      message: "Something went wrong!",
      status: 500,
    });
  }
}
