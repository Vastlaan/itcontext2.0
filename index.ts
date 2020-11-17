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

            <div style=" padding: 10px;">
                <h1 style="font-family: 'Jura', sans-serif; font-size: 27px; color: #0F284E; letter-spacing: -1px; font-weight: 600; line-height: 0; text-shadow: 3px 3px 3px rgba(0,0,0,.3);">IT Context</h1>
                <h2 style=" font-family: 'Jura', sans-serif; font-size: 23px; color: #0F284E; letter-spacing: -1px; font-weight: 600; line-height: .5; text-shadow: 3px 3px 3px rgba(0,0,0,.3);">Web Design Studio</h2>
            </div>
            <div style="padding: 10px;">
                <h3 style="font-family: 'Forum', sans-serif; font-size: 16px; font-weight: 400; color: #0F284E;">Goede dag, ${email}! We hebben uw bericht in goede orde ontvangen!</h3>
                <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">Wij streven ernaar om je vraag binnen 2 werkdagen te beantwoorden.</p>
                </br>
                <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">Uw contact e-mail: ${email}</p>
                <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">Uw bericht:</p>
                <p style='text-align:center; font-size: 12px; background-color: #A6ABBD; padding: 10px;'>${message}</p>
                </br>
                <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">Met vriendelijke groet,</p>
                <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">IT Context</p>
                <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">info@itcontext.nl</p>
                <p style="font-family: 'Forum', sans-serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">0299 70 50 72</p>
            </div>
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
            filename: "Brochure.pdf",
            type: "application/pdf",
            disposition: "attachment"
            }
        ],
        html: `
             <div style=" padding: 10px;">
                <h1 style="font-family: 'Jura', sans-serif; font-size: 39px; color: #0F284E; letter-spacing: -1px; font-weight: 600; line-height: 0; text-shadow: 5px 5px 5px rgba(0,0,0,.3);">IT Context</h1>
                <h2 style=" font-family: 'Jura', sans-serif; font-size: 25px; color: #0F284E; letter-spacing: -1px; font-weight: 600; line-height: .5; text-shadow: 5px 5px 5px rgba(0,0,0,.3);">Web Design Studio</h2>
            </div>
            <div style="padding: 10px;">
                <h3 style="font-family: 'Forum', serif; font-size: 16px; font-weight: 400; color: #0F284E;">Goede dag ${email}! Hierbij sturen wij jouw offerte als bijlage.</h3>
                <p style="font-family: 'Forum', serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">Als je nog interesse hebt in onze diensten, aarzel niet om contact met
                ons op te nemen via ons <a  style=" font-family: 'Forum', serif; font-size: 16px; color: #006A93; text-decoration: none;" href='mailto:info@itcontext.nl'>e-mailadress</a> of <a style=" font-family: 'Forum', serif; font-size: 16px; color: #006A93; text-decoration: none;" href='tel:0299705072'>telefoon</a>.
                </p>
                </br>
                <p style="font-family: 'Forum', serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">Met vriendelijke groet,</p>
                <p style="font-family: 'Forum', serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">IT Context</p>
                <p style="font-family: 'Forum', serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">info@itcontext.nl</p>
                <p style="font-family: 'Forum', serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;">0299 70 50 72</p>
            </div>
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
