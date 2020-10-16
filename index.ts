import express from "express";
import fs from 'fs'
import { Request, Response } from "express";
import { json } from "body-parser";
import SgMail from "@sendgrid/mail";
const keys = require("./config/keys");

const app = express();
app.use(json());

SgMail.setApiKey(keys.SG_API_KEY);

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

declare global {
    namespace Express {
        interface Request {
            contactFormData?: ContactFormData;
            email?: string;
        }
    }
}

app.post("/api/submitContactForm", (req: Request, res: Response) => {
    const { contactFormData } = req.body;
    const { name, email, message } = contactFormData;

    const msg = {
        to: [email, "info@itcontext.nl"],
        from: "no-reply@itcontext.nl",
        subject: "IT Context formulier ingediend",
        html: `
            <h1 style='background-color: #0b4f6c; color: white; padding: 1rem 2rem; text-align: center;'>Bevestiging IT Context Contact Formulier</h1>
            <h3 style='text-align: center; font-size: 25px;'>Goede dag, ${name}! We hebben uw bericht in goede orde ontvangen!</h3>
            <p style='text-align:center; font-size: 20px;'>Wij streven ernaar om je vraag binnen 2 werkdagen te beantwoorden</p>
            <p style='text-align:center; font-size: 20px;'>Uw contact e-mail: ${email}</p>
            <p style='text-align:center; font-size: 20px;'>Uw bericht:</p>
            <p style='text-align:center; font-size: 18px; background-color: gold; padding: 2rem;'>${message}</p>
            </br>
            </br>
            <p style='text-align:center; font-size: 20px;'>Met vriendelijke groet,</p>
            <p style='text-align:center; font-size: 20px;'>IT Context</p>
            <p style='text-align:center; font-size: 20px;'>info@itcontext.nl</p>
            <p style='text-align:center; font-size: 20px;'>0299 70 50 72</p>
        `,
    };

    SgMail.send(msg);

    res.status(200).json("Sucess");
});

app.post("/api/sendOffer", (req: Request, res: Response) => {

    const {email} = req.body;

    const pathToAttachment = `${__dirname}/assets/brochure.pdf`;
    const attachment = fs.readFileSync(pathToAttachment).toString("base64");

    const msg = {
        to: [email, "info@itcontext.nl"],
        from: "no-reply@itcontext.nl",
        subject: "IT Context offerteaanvraag",
         attachments: [
            {
            content: attachment,
            filename: "IT Context Brochure.pdf",
            type: "application/pdf",
            disposition: "attachment"
            }
        ],
        html: `
            <h1 style='background-color: #0b4f6c; color: white; padding: 1rem 2rem; text-align: center;'>Offerte IT Context</h1>
            <h3 style='text-align: center; font-size: 25px;'>Goede dag! Hierbij sturen wij jouw offerte als bijlage.</h3>
            <p style='text-align:center; font-size: 20px;'>Als je nog interesse hebt in onze diensten, aarzel niet om contact met ons op te nemen via ons <a href='mailto:info@itcontext.nl'>e-mailadress</a> of <a href='tel:0299705072'>telefoon</a>.</p>
            </br>
            </br>
            <p style='text-align:center; font-size: 20px;'>Met vriendelijke groet,</p>
            <p style='text-align:center; font-size: 20px;'>IT Context</p>
            <p style='text-align:center; font-size: 20px;'>info@itcontext.nl</p>
            <p style='text-align:center; font-size: 20px;'>0299 70 50 72</p>
        `,
    };

    SgMail.send(msg);

    res.status(200).json("Success");
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}
const PORT = process.env.PORT || 4670;

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
});
