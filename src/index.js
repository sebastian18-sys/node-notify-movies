import express from "express"
import managerRouter from "./routes/send-notify-sms.js"

const app = express()
const PORT = process.env.PORT || 5000

app.use('/api/', managerRouter)


app.listen(PORT, async() => {
  console.log(`Listen on port ${PORT}`)
  await fetch("http://localhost:5000/api/send-notity-movies")
})