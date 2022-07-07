import express from "express"
import bodyParser from "body-parser"
import anagramsRouter from "./routes/anagrams.js"

const app = express()

app.use(bodyParser.json())

app.use('/', anagramsRouter)

app.listen(8080, function() {
    console.log("Server running on port 8080");
})