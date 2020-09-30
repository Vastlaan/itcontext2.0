import express from "express";
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
        }
    }
}

app.post("/api/submitContactForm", (req: Request, res: Response) => {
    const { contactFormData } = req.body;
    const { name, email, message } = contactFormData;

    const msg = {
        to: [email, "info@michalantczak.com"],
        from: "no-reply@itcontext.nl",
        subject: "IT Context Form Submittion",
        html: `
            <h1 style='background-color: #0b4f6c; color: white; padding: 1rem 2rem; text-align: center;'>Bevestiging IT Context Contact Formulier</h1>
            <h3 style='text-align: center; font-size: 25px;'>Goede dag, ${name}! We hebben uw bericht in goede orde ontvangen!</h3>
            <p style='text-align:center; font-size: 20px;'>Wij streven ernaar om je vraag binnen 2 werkdagen te beantwoorden</p>
            <p style='text-align:center; font-size: 20px;'>Uw contact e-mail: ${email}</p>
            <p style='text-align:center; font-size: 20px;'>Uw bericht:</p>
            <p style='text-align:center; font-size: 18px; background-color: gold; padding: 2rem;'>${message}</p>
            </br>
            </br>
            <p style='text-align:center; font-size: 20px;'>IT Context</p>
            <p style='text-align:center; font-size: 20px;'>info@itcontext.nl</p>
            <p style='text-align:center; font-size: 20px;'>06 82 30 70 51</p>
        `,
    };

    SgMail.send(msg);

    res.status(200).json("Sucess");
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
