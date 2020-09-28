import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

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
