const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "admin",
    database: "maison",
    multipleStatements : true
});

mysqlConnection.connect((err)=>{
    if(!err)
        {
            console.log("Connexion à la BDD réussie");
        }
    else
        {
            console.log("Connexion à la BDD échouée");
        }
});

module.exports = mysqlConnection;