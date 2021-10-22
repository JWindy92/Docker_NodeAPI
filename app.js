var express = require("express")
var app = express()
var mysql = require('mysql2')
var mysql_funcs = require('./databases/mysql_funcs')

mysql_funcs.init(mysql)

const port = 3000

app.get("/", (req, res) => {
    res.json({
        "message": "You've hit the API!",
        "statusCode": res.statusCode
    })
})

app.get("/tests/mysql", (req, res) => {
    mysql_funcs.test_mysql()
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})