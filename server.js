const express = require('express');
const bodyParser = require('body-parser');
const mysqlConnection = require("./connexion");
const MaisonRoutes = require("./routes/maison");

var app = express();
app.use(bodyParser.json());

app.use("/maison", MaisonRoutes);

app.listen(3000);