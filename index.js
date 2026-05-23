const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const Users = require("./schemas/test")
const userRoutes = require("./routes/userRoutes")
require("./config/mongoconnection")

const app = express()
app.use(cors({ origin: "*" }))
app.use(bodyParser.json())

const port = 5000

app.use("/users", userRoutes  )

const data = [
    {
        username: "nirmal"

    },
    {
        username: "nirmal"
    },
    {
        username: "nirmal"
    }
    ,
    {
        username: "nirmal"
    }
    ,
    {
        username: "parshant saini"
    }
]

app.get("/", (req, res) => {
    res.send(data)
})

app.get("/products", (req, res) => {
    res.send(data)
})



app.listen(port, (req, res) => {
    console.log(`Server started on http://localhost:${port}`)
})