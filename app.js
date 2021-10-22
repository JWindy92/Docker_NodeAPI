var express = require("express")
var app = express()

const port = 3000

app.get("/", (req, res) => {
    res.json({
        "message": "You've hit the API!",
        "statusCode": res.statusCode
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})