const express = require("express");
const path = require ("path");
const app = express();

var PORT = process.env.PORT || 8080

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservation = [];
var waitlist=[];

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

app.get("/api/tables", function(req, res) {
    return res.json(reservation);
});
app.get("/api/waitlist", function (req,res) {
    return res.json(waitlist);
});

app.listen(PORT, function() {
    console.log("App is listening on PORT " + PORT);
});


app.post("/api/tables", function(req, res) {
    var newReservation = req.body;
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
    console.log(newReservation);

    reservation.push(newReservation);
    res.json(reservation);
});

