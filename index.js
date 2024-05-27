const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')

const app = express()

const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001','https://plain-shirts-jwnr.vercel.app']

app.use(
    cors({
        credentials: true,
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true)
            } else {
                callback(new Error('Not allowed by CORS'))
            }
        }
    })
)
app.use(express.json())
app.use(cookieParser())

app.use("/api", router)

const PORT = process.env.PORT || 8080

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB")
        console.log("Server is running on port " + PORT)
    })
})
