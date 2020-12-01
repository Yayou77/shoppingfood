const express = require('express');
const Router = express.Router();
const mysqlConnection = require("../connexion");

Router.get("/", (req, res)=>{
    mysqlConnection.query("SELECT * from salledebain", (err, rows, fields)=>{
        if(!err)
            {
                res.send(rows);
            }
        else
            {
                console.log(err);
            }
    })
})

Router.put("/", (req, res)=>{
    mysqlConnection.query("UPDATE salledebain SET dentifrice=dentifrice+?", (err, rows, fields)=>{
        if(!err)
            {
                res.send(rows);
            }
        else
            {
                console.log(err);
            }
    })
})

module.exports = Router;