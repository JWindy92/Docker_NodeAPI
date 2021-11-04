var mysql_conn;

const config = require("../config/mysql")

function test_func() {
    console.log("Hello from mysql_funcs.js")
}

function init(mysql) {
    mysql_conn = mysql.createConnection({
        host: config.HOST,
        user: config.USER,
        password: config.PASSWORD,
        database: config.DB,
    })
}

function createUser() {
    console.log("Creating a new user")
}

function getUser(id) {
    connect()
    mysql_conn.query(
        "SELECT * FROM users WHERE id = ?",
        [id],
        (err, results, fields) => {
            if (err) throw err;
            console.log(results)
            // console.log(fields)
        }
    )
}

function updateUser() {
    console.log("Updating a user")
}

function deleteUser() {
    console.log("Deleting a user")
}

function getAllUsers() {
    connect()

    mysql_conn.query(
        "SELECT * FROM users",
        (err, results, fields) => {
            if (err) throw err;
            console.log(results)
        }
    )
}

function test_mysql() {
    return getAllUsers()
}


function connect() {
    mysql_conn.connect((err) => {
        if (err) throw err;
        console.log("Connected to MySQL Container from mysql_funcs.js!")
    })
}


module.exports = {
    test_func: test_func,
    init: init,
    connect: connect,
    getUser: getUser,
    test_mysql: test_mysql,
}