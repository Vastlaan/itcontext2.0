import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.send(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

app.listen(4670, () => {
    console.log(`App is listening on port 4670`);
});
