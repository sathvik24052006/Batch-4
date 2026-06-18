const express = require("express")
const app = express()

require("dotenv").config()

const connectdb = require("./config/db")

const authRoute = require("./router/authRouter")
const catRoute = require("./router/catRoute")

// Middleware
app.use(express.json())

// Database Connection
connectdb()

// Routes
app.use("/auth", authRoute)
app.use("/api/v1", catRoute)

app.get("/", (req, res) => {
    res.send("Cat Gallery Backend Running")
})

// Server
const PORT = process.env.PORT || 5002

app.get("/test",(req,res)=>{
    console.log("Test Route Hit")
    res.send("Test Route Working")
})

app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`)
})

