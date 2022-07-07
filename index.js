import express from "express"
import bodyParser from "body-parser"

const app = express()

app.use(bodyParser.json())

app.get('/', function(req, res){
    res.json({
        outcome: "Hello World!"
    })
})

app.listen(8080, function() {
    console.log("Server running on port 8080");
})