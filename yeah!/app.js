const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("sign");
});

app.get("/play", function(req,res){
    res.render("index");
});

app.listen(3000, function(req, res){
    console.log("The server is live on port 3000");
});