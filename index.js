"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var mail_1 = __importDefault(require("@sendgrid/mail"));
var keys = require("./config/keys");
var app = express_1.default();
app.use(body_parser_1.json());
mail_1.default.setApiKey(keys.SG_API_KEY);
app.post("/api/submitContactForm", function (req, res) {
    var contactFormData = req.body.contactFormData;
    var name = contactFormData.name, email = contactFormData.email, message = contactFormData.message;
    var msg = {
        to: [email, "info@michalantczak.com"],
        from: "no-reply@itcontext.nl",
        subject: "IT Context Form Submittion",
        html: "\n            <h1 style='background-color: #0b4f6c; color: white; padding: 1rem 2rem; text-align: center;'>Bevestiging IT Context Contact Formulier</h1>\n            <h3 style='text-align: center; font-size: 25px;'>Goede dag, " + name + "! We hebben uw bericht in goede orde ontvangen!</h3>\n            <p style='text-align:center; font-size: 20px;'>Wij streven ernaar om je vraag binnen 2 werkdagen te beantwoorden</p>\n            <p style='text-align:center; font-size: 20px;'>Uw contact e-mail: " + email + "</p>\n            <p style='text-align:center; font-size: 20px;'>Uw bericht:</p>\n            <p style='text-align:center; font-size: 18px; background-color: gold; padding: 2rem;'>" + message + "</p>\n            </br>\n            </br>\n            <p style='text-align:center; font-size: 20px;'>IT Context</p>\n            <p style='text-align:center; font-size: 20px;'>info@itcontext.nl</p>\n            <p style='text-align:center; font-size: 20px;'>06 82 30 70 51</p>\n        ",
    };
    mail_1.default.send(msg);
    res.status(200).json("Sucess");
});
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static("client/build"));
    var path_1 = require("path");
    app.get("*", function (req, res) {
        res.sendFile(path_1.resolve(__dirname, "client", "build", "index.html"));
    });
}
var PORT = process.env.PORT || 4670;
app.listen(PORT, function () {
    console.log("App is listening on port " + PORT);
});
