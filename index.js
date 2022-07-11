import express from "express";
import bodyParser from "body-parser";
import anagramsRouter from "./routes/endpoints.js";

const app = express();
const port = process.env.PORT || 8080;
app.use(bodyParser.json());

app.use('/', anagramsRouter);

app.listen(port, function() {
    console.log("Server running on port " + port);
});