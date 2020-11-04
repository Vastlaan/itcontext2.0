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
        html: "\n            <style>\n                \n                @import url('https://fonts.googleapis.com/css2?family=Forum&display=swap');\n                @import url('https://fonts.googleapis.com/css2?family=Forum&family=Jura:wght@400;500;600;700&display=swap');\n            \n                .header {\n                background-image: linear-gradient(to bottom right, #0F284E, #006A93);\n                padding: 10px;\n                box-shadow: 0px 10px 10px rgba(0,0,0,.3);\n                }\n            \n                .header>h1 {\n                font-family: 'Jura', sans-serif;\n                font-size: 39px;\n                color: white;\n                letter-spacing: -3px;\n                font-weight: 700;\n                line-height: 0;\n                text-shadow: 5px 5px 5px rgba(0,0,0,.3);\n                }\n            \n                .header>h2 {\n                font-family: 'Jura', sans-serif;\n                font-size: 25px;\n                color: white;\n                letter-spacing: -3px;\n                font-weight: 700;\n                line-height: .5;\n                text-shadow: 5px 5px 5px rgba(0,0,0,.3);\n                }\n            \n                .content {\n                padding: 10px;\n                }\n            \n                .content>h3 {\n                font-family: 'Forum', serif;\n                font-size: 20px;\n                color: #0F284E;\n                }\n            \n                .content>p {\n                font-family: 'Forum', serif;\n                font-size: 16px;\n                color: #343a40;\n                line-height: 1.3;\n                margin: 0;\n                }\n            \n                .content>p>a {\n                font-family: 'Forum', serif;\n                font-size: 16px;\n                color: #006A93;\n                text-decoration: none;\n                }\n            </style>\n            <div class='header'>\n                <h1>IT Context</h1>\n                <h2>Web Design Studio</h2>\n            </div>\n            <div class='content'>\n                <h3>Goede dag, " + name + "! We hebben uw bericht in goede orde ontvangen!</h3>\n                <p>Wij streven ernaar om je vraag binnen 2 werkdagen te beantwoorden.</p>\n                <p>Uw contact e-mail: " + email + "</p>\n                <p>Uw bericht:</p>\n                <p style='text-align:center; font-size: 12px; background-color: #A6ABBD; padding: 10px;'>" + message + "</p>\n                </br>\n                <p>Met vriendelijke groet,</p>\n                <p>IT Context</p>\n                <p>info@itcontext.nl</p>\n                <p>0299 70 50 72</p>\n            </div>\n        "
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
                filename: "Brochure.pdf",
                type: "application/pdf",
                disposition: "attachment"
            }
        ],
        html: "\n             <div style=\" background-image: linear-gradient(to bottom right, #0F284E, #006A93); padding: 10px; box-shadow: 0px 10px 10px rgba(0,0,0,.3); @import url('https://fonts.googleapis.com/css2?family=Forum&display=swap'); @import url('https://fonts.googleapis.com/css2?family=Forum&family=Jura:wght@400;500;600;700&display=swap');\">\n                <h1 style=\"font-family: 'Jura', sans-serif; font-size: 39px; color: white; letter-spacing: -3px; font-weight: 700; line-height: 0; text-shadow: 5px 5px 5px rgba(0,0,0,.3);\">IT Context</h1>\n                <h2 style=\" font-family: 'Jura', sans-serif; font-size: 25px; color: white; letter-spacing: -3px; font-weight: 700; line-height: .5; text-shadow: 5px 5px 5px rgba(0,0,0,.3);\">Web Design Studio</h2>\n            </div>\n            <div style=\"padding: 10px; @import url('https://fonts.googleapis.com/css2?family=Forum&display=swap'); @import url('https://fonts.googleapis.com/css2?family=Forum&family=Jura:wght@400;500;600;700&display=swap');\">\n                <h3 style=\"font-family: 'Forum', serif; font-size: 20px; color: #0F284E;\">Goede dag " + email + "! Hierbij sturen wij jouw offerte als bijlage.</h3>\n                <p style=\"font-family: 'Forum', serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;\">Als je nog interesse hebt in onze diensten, aarzel niet om contact met\n                ons op te nemen via ons <a  style=\" font-family: 'Forum', serif; font-size: 16px; color: #006A93; text-decoration: none;\" href='mailto:info@itcontext.nl'>e-mailadress</a> of <a style=\" font-family: 'Forum', serif; font-size: 16px; color: #006A93; text-decoration: none;\" href='tel:0299705072'>telefoon</a>.\n                </p>\n                </br>\n                <p style=\"font-family: 'Forum', serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;\">Met vriendelijke groet,</p>\n                <p style=\"font-family: 'Forum', serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;\">IT Context</p>\n                <p style=\"font-family: 'Forum', serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;\">info@itcontext.nl</p>\n                <p style=\"font-family: 'Forum', serif; font-size: 16px; color: #343a40; line-height: 1.3; margin: 0;\">0299 70 50 72</p>\n            </div>\n        "
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
