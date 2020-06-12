const express = require("express");
const path = require ("path");
const app = express();

var PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var reservation = []

app.get("/", function (req, res) {
    console.log("it works!");
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});