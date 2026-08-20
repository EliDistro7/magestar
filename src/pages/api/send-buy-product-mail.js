import nodemailer from "nodemailer";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../sanity/lib/client";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { formData, product } = req.body;

  // Constructing the email content (plain text version)
  const textContent = `
    Product Details:
    ----------------
    Name: ${product?.name.toUpperCase()}
    Category: ${product?.mainCategory.toUpperCase()}

    Vehicle Details:
    ----------------
    ${formData.make ? `Make: ${formData.make.toUpperCase()}` : ""}
    ${formData.model ? `Model: ${formData.model.toUpperCase()}` : ""}
    ${formData.engine ? `Engine: ${formData.engine.toUpperCase()}` : ""}
    
    User Details:
    -------------
    Name: ${formData.name}
    Email: ${formData.email}
    Phone: ${formData.phone}
  `;

  // Constructing the email content (HTML version)
  const htmlContent = `
    <h1>Product Purchase Enquiry</h1>
    <h2>Product Details:</h2>
        ${product?.image ? `<img src="${imageUrlBuilder(client).image(product.image).url()}" alt="${product?.name}" width="200"/></li>` : "<li>No image available</li>"}
    <ul>
        <li><strong>Name:</strong> ${product?.name.toUpperCase()}</li>
      <li><strong>Category:</strong> ${product?.mainCategory.toUpperCase()}</li></ul>

    <h2>Vehicle Details:</h2>
    <ul>
      ${formData.make ? `<li><strong>Make:</strong> ${formData.make.toUpperCase()}</li>` : ""}
      ${formData.model ? `<li><strong>Model:</strong> ${formData.model.toUpperCase()}</li>` : ""}
      ${formData.engine ? `<li><strong>Engine:</strong> ${formData.engine.toUpperCase()}</li>` : ""}
    </ul>

    <h2>User Details:</h2>
    <ul>
     <li><strong>Name:</strong> ${formData.name}</li>
      <li><strong>Email:</strong> ${formData.email}</li>
      <li><strong>Phone:</strong> ${formData.phone}</li>
    </ul>
  `;

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
    to: process.env.EMAIL, // or customer's email if needed
    subject: "Product Purchase Enquiry",
    text: textContent, // Plain text version of the email
    html: htmlContent, // HTML version of the email
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({
      message: "Enquiry sent successfully!",
      status: 200,
    });
  } catch (error) {
    console.error("Mail send error: ", error);
    return res.status(500).json({
      message: "Something went wrong!",
      status: 500,
    });
  }
}
