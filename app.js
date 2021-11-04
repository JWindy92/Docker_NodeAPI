var express = require("express")
var app = express()
var mysql = require('mysql2')
var mysql_funcs = require('./databases/mysql_funcs')

require("dotenv").config()

mysql_funcs.init(mysql)

const PORT = process.env.NODE_DOCKER_PORT || 3000

app.get("/", (req, res) => {
    res.json({
        "message": "You've hit the API!",
        "statusCode": res.statusCode
    })
})

app.get("/tests/mysql", (req, res) => {
    mysql_funcs.test_mysql()
    res.json({
        "statusCode": res.statusCode,
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})