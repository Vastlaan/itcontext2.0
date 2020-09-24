"use strict";
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var app = express_1.default();
app.use(body_parser_1.json());
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static("client/build"));
    var path_1 = require("path");
    app.get("*", function (req, res) {
        res.sendFile(
            path_1.resolve(__dirname, "client", "public", "index.html")
        );
    });
}
app.listen(4670, function () {
    console.log("App is listening on port 4670");
});
