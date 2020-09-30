"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var SgMail = __importStar(require("@sendgrid/mail"));
var keys = require("./config/keys");
var app = express_1.default();
app.use(body_parser_1.json());
SgMail.setApiKey(keys.SG_API_KEY);
app.post("/submitContactForm", function (req, res) {
    var contactFormData = req.body.contactFormData;
    var name = contactFormData.name, email = contactFormData.email, message = contactFormData.message;
    var msg = {
        to: [email, "info@michalantczak.com"],
        from: "no-reply@itcontext.nl",
        subject: "IT Context Form Submittion",
        html: "\n            <h1 style='background-color: #0b4f6c; color: white; width: 100%; padding: 1rem 2rem; text-align: center;'>Bevestiging IT Context Contact Formulier</h1>\n            <h3 style='text-align: center; font-size: 25px;'>Goede dag, " + name + "! We hebben uw bericht in goede orde ontvangen!</h3>\n            <p style='text-align:center; font-size: 20px;'>Wij streven ernaar om je vraag binnen 2 werkdagen te beantwoorden</p>\n            <p style='text-align:center; font-size: 20px;'>Uw contact e-mail: " + email + "</p>\n            <p style='text-align:center; font-size: 20px;'>Uw bericht:</p>\n            <p style='text-align:center; font-size: 18px; background-color: gold;'>" + message + "</p>\n            </br>\n            </br>\n            <p style='text-align:center; font-size: 20px;'>IT Context</p>\n            <p style='text-align:center; font-size: 20px;'>info@itcontext.nl</p>\n            <p style='text-align:center; font-size: 20px;'>06 82 30 70 51</p>\n        ",
    };
    SgMail.send(msg);
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
