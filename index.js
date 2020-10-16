"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var body_parser_1 = require("body-parser");
var mail_1 = __importDefault(require("@sendgrid/mail"));
var keys = require("./config/keys");
var app = express_1["default"]();
app.use(body_parser_1.json());
mail_1["default"].setApiKey(keys.SG_API_KEY);
app.post("/api/submitContactForm", function (req, res) {
    var contactFormData = req.body.contactFormData;
    var name = contactFormData.name, email = contactFormData.email, message = contactFormData.message;
    var msg = {
        to: [email, "info@itcontext.nl"],
        from: "no-reply@itcontext.nl",
        subject: "IT Context formulier ingediend",
        html: "\n            <h1 style='background-color: #0b4f6c; color: white; padding: 1rem 2rem; text-align: center;'>Bevestiging IT Context Contact Formulier</h1>\n            <h3 style='text-align: center; font-size: 25px;'>Goede dag, " + name + "! We hebben uw bericht in goede orde ontvangen!</h3>\n            <p style='text-align:center; font-size: 20px;'>Wij streven ernaar om je vraag binnen 2 werkdagen te beantwoorden</p>\n            <p style='text-align:center; font-size: 20px;'>Uw contact e-mail: " + email + "</p>\n            <p style='text-align:center; font-size: 20px;'>Uw bericht:</p>\n            <p style='text-align:center; font-size: 18px; background-color: gold; padding: 2rem;'>" + message + "</p>\n            </br>\n            </br>\n            <p style='text-align:center; font-size: 20px;'>Met vriendelijke groet,</p>\n            <p style='text-align:center; font-size: 20px;'>IT Context</p>\n            <p style='text-align:center; font-size: 20px;'>info@itcontext.nl</p>\n            <p style='text-align:center; font-size: 20px;'>0299 70 50 72</p>\n        "
    };
    mail_1["default"].send(msg);
    res.status(200).json("Sucess");
});
app.post("/api/sendOffer", function (req, res) {
    var email = req.body.email;
    var pathToAttachment = __dirname + "/assets/brochure.pdf";
    var attachment = fs_1["default"].readFileSync(pathToAttachment).toString("base64");
    var msg = {
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
        html: "\n            <h1 style='background-color: #0b4f6c; color: white; padding: 1rem 2rem; text-align: center;'>Offerte IT Context</h1>\n            <h3 style='text-align: center; font-size: 25px;'>Goede dag! Hierbij sturen wij jouw offerte als bijlage.</h3>\n            <p style='text-align:center; font-size: 20px;'>Als je nog interesse hebt in onze diensten, aarzel niet om contact met ons op te nemen via ons <a href='mailto:info@itcontext.nl'>e-mailadress</a> of <a href='tel:0299705072'>telefoon</a>.</p>\n            </br>\n            </br>\n            <p style='text-align:center; font-size: 20px;'>Met vriendelijke groet,</p>\n            <p style='text-align:center; font-size: 20px;'>IT Context</p>\n            <p style='text-align:center; font-size: 20px;'>info@itcontext.nl</p>\n            <p style='text-align:center; font-size: 20px;'>0299 70 50 72</p>\n        "
    };
    mail_1["default"].send(msg);
    res.status(200).json("Success");
});
if (process.env.NODE_ENV === "production") {
    app.use(express_1["default"].static("client/build"));
    var path_1 = require("path");
    app.get("*", function (req, res) {
        res.sendFile(path_1.resolve(__dirname, "client", "build", "index.html"));
    });
}
var PORT = process.env.PORT || 4670;
app.listen(PORT, function () {
    console.log("App is listening on port " + PORT);
});
